# 🎓 PrimeLearn – Online Course Learning Platform

**PrimeLearn** is a modern online learning platform inspired by popular e-learning systems. It allows users to explore, enroll, and learn from a variety of courses through an intuitive and responsive interface.

Built using **React**, **Laravel**, and **SQL**, PrimeLearn provides a powerful full-stack solution for delivering high-quality educational content.

---
## 🚀 Live Demo
Experience the platform in action:  
🔗 **[ Demo  )](https://youtu.be/QatqBlzc6oc)**

---

## 🚀 Tech Stack

### 🌐 Frontend

* React.js
* JavaScript 
* Axios (API handling)

### ⚙️ Backend

* Laravel (PHP Framework)
* RESTful API architecture

### 🗄️ Database

* MySQL (SQL-based relational database)

---

## ✨ Features

### 👨‍🎓 User Features

* 🔐 User registration and login authentication
* 📚 Browse and search courses
* 📝 Enroll in courses
* ▶️ Watch course videos/lessons
* 📊 Track learning progress

### 👨‍🏫 Admin Features

* ➕ Create, update, and delete courses
* 👥 Manage users
* 📂 Upload course content (videos, materials)
* 📈 Monitor platform activity

---

## 📁 Project Structure

```
PrimeLearn/
│
├── frontend/        # React application
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/         # Laravel API
│   ├── app/
│   ├── routes/
│   ├── controllers/
│   └── models/
│
└── database/        # SQL database files
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/primelearn.git
cd primelearn
```

---

### 🔹 2. Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

---

### 🔹 3. Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

---

### 🔹 4. Database Setup

* Create a MySQL database
* Update `.env` file with DB credentials

```env
DB_DATABASE=primelearn
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```bash
php artisan migrate
```

---

### 🔹 5. Run Backend Server

```bash
php artisan serve
```

---

## 🔗 API Integration

* React frontend communicates with Laravel backend via REST APIs.
* Axios is used for HTTP requests.
* Authentication handled using Laravel (Sanctum or JWT recommended).

---

## 🎯 Future Improvements

* 💳 Payment gateway integration
* ⭐ Course reviews and ratings
* 📱 Mobile app version
* 🤖 AI-based course recommendations
* 📡 Live classes & webinars

---

