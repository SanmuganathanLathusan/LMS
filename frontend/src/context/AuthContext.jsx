import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // MOCK: Check existing user in local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('lms_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock authentication logic
        if (email === 'student@lms.com' && password === 'password') {
          const student = { id: 1, name: 'Alex Student', email, role: 'student', avatar: 'https://ui-avatars.com/api/?name=Alex+Student&background=0ea5e9&color=fff' };
          setUser(student);
          localStorage.setItem('lms_user', JSON.stringify(student));
          resolve(student);
        } else if (email === 'instructor@lms.com' && password === 'password') {
          const instructor = { id: 2, name: 'Sarah Instructor', email, role: 'instructor', avatar: 'https://ui-avatars.com/api/?name=Sarah+Instructor&background=f59e0b&color=fff' };
          setUser(instructor);
          localStorage.setItem('lms_user', JSON.stringify(instructor));
          resolve(instructor);
        } else if (email === 'admin@lms.com' && password === 'password') {
          const admin = { id: 3, name: 'Admin User', email, role: 'admin', avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff' };
          setUser(admin);
          localStorage.setItem('lms_user', JSON.stringify(admin));
          resolve(admin);
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  };

  const register = async (name, email, password, role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { id: Date.now(), name, email, role, avatar: `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=10b981&color=fff` };
        setUser(newUser);
        localStorage.setItem('lms_user', JSON.stringify(newUser));
        resolve(newUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lms_user');
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
