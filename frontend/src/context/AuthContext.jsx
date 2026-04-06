import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the logged-in user with the Sanctum token
  const fetchUser = async (token) => {
    try {
      const res = await fetch('/api/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        setUser(null);
        localStorage.removeItem('lms_token');
      }
    } catch (err) {
      console.error(err);
      setUser(null);
      localStorage.removeItem('lms_token');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('lms_token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();
    if (!res.ok) {
      const errorMsg = data.errors ? Object.values(data.errors).flat().join(', ') : (data.message || 'Invalid credentials');
      throw errorMsg;
    }

    localStorage.setItem('lms_token', data.access_token);
    setUser(data.user);
    return data.user;
  };

  const register = async (name, email, password, role) => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // role is passed, auth controller ignores it for now unless you added it to DB
      body: JSON.stringify({ name, email, password, role }) 
    });

    const data = await res.json();
    if (!res.ok) {
      const errorMsg = data.errors ? Object.values(data.errors).flat().join(', ') : (data.message || 'Registration failed');
      throw errorMsg;
    }

    // Do not auto-login after register, force user to go to sign in instead
    return data.user;
  };

  const logout = async () => {
    const token = localStorage.getItem('lms_token');
    if (token) {
      try {
        await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
    
    setUser(null);
    localStorage.removeItem('lms_token');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
