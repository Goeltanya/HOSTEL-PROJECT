# Deployment Instructions

This document provides the step-by-step guide for deploying the **Hostel Management System** to a production environment.

## Prerequisites

Before deploying, ensure the following:

- A cloud platform account (e.g., **AWS**, **Heroku**, **DigitalOcean**).
- A server (for backend) or a platform (for frontend).
- Set up a **MySQL** or **MongoDB** database for storing your data.
- Set up an account for your payment gateway (if you’re integrating one).

## Backend Deployment (Node.js with Express)

### 1. Setting Up Your Server
- Choose a cloud platform (e.g., **AWS**, **Heroku**, **DigitalOcean**) and set up your virtual machine or use managed services like **AWS EC2** or **Heroku Dynos**.
- Clone the repository to your server using the following command:
    ```bash
    git clone https://github.com/yourusername/hostel-management.git
    ```

### 2. Configure Environment Variables
- Navigate to your `backend` directory:
    ```bash
    cd hostel-management/backend
    ```
- Copy the `.env.example` file to `.env` and configure the necessary environment variables, such as:
    - **DB_HOST**: Your database host.
    - **DB_USER**: Your database username.
    - **DB_PASSWORD**: Your database password.
    - **JWT_SECRET**: Your JWT secret key.
    - **PORT**: Port for your backend server (default: 5000).
    - **PAYMENT_GATEWAY**: Your payment gateway API credentials.

Example `.env` file:


### 3. Install Backend Dependencies
- Run the following command to install backend dependencies:
    ```bash
    npm install
    ```

### 4. Run the Backend Server
- Start the backend server with **PM2** (for production) or use **Node.js** directly:
    ```bash
    pm2 start server.js
    ```
- Alternatively, you can use:
    ```bash
    node server.js
    ```

### 5. Set Up a Database
- Set up a **MySQL** or **MongoDB** database on your cloud platform (e.g., **AWS RDS**, **MongoDB Atlas**).
- For **MySQL**, create a database and tables according to the schema used in your project. Use this SQL:
    ```sql
    CREATE DATABASE hostel_management;

    USE hostel_management;

    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('admin', 'student', 'staff') NOT NULL
    );

    CREATE TABLE rooms (
      id INT AUTO_INCREMENT PRIMARY KEY,
      room_number VARCHAR(50) NOT NULL,
      room_type VARCHAR(50) NOT NULL,
      capacity INT NOT NULL,
      price DECIMAL(10, 2) NOT NULL
    );

    CREATE TABLE bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      room_id INT NOT NULL,
      booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      check_in DATE NOT NULL,
      check_out DATE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (room_id) REFERENCES rooms(id)
    );

    CREATE TABLE fees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      status ENUM('paid', 'pending') NOT NULL,
      due_date DATE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE notifications (
      id INT AUTO_INCREMENT PRIMARY KEY,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    ```
- Update the database connection URL in your `.env` file accordingly.

### 6. Expose the Backend API
- Make sure your backend API is accessible through a public URL, like `https://api.yourdomain.com`. If using **Heroku**, your app URL will be provided after deployment.

---

## Frontend Deployment (React App)

### 1. Build the React App
- Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
- Run the following command to build the production version of your React app:
    ```bash
    npm run build
    ```
- This will create a `build` folder containing the optimized production files.

### 2. Deploy the Frontend
- There are several options for deploying the frontend:

#### Option 1: **Netlify**
1. Create an account on **Netlify** (if you don’t already have one).
2. Link your GitHub repository or drag-and-drop the `build` folder.
3. Netlify will automatically deploy your app and provide a public URL.

#### Option 2: **Vercel**
1. Create an account on **Vercel**.
2. Link your GitHub repository or upload the contents of the `build` folder.
3. Vercel will deploy your frontend and provide a public URL.

#### Option 3: **AWS S3 + CloudFront**
1. Upload the contents of the `build` folder to an S3 bucket.
2. Set the bucket policy to allow public access and configure the **CloudFront** CDN for faster content delivery.
3. Use the S3 URL or configure your custom domain with **Route 53**.

#### Option 4: **DigitalOcean** or Other VPS Providers
1. If you're using **DigitalOcean**, create a Droplet.
2. Install **Nginx** to serve static files:
    ```bash
    sudo apt install nginx
    ```
3. Configure **Nginx** to serve the React app's `build` folder.
4. Upload the `build` folder to your Droplet and configure Nginx accordingly.

### 3. Configure Frontend to Connect to Backend
- In your frontend, ensure that the API base URL is updated to the backend production URL in `src/services/api.js`. For example:
    ```javascript
    const API_BASE_URL = "https://api.yourdomain.com";
    ```

### 4. Run the Frontend App
- After deployment, ensure that your frontend is running correctly and is able to connect with the backend.

---

## Database Deployment

### 1. Set Up MySQL Database
- If using **MySQL**, create a database and tables according to the schema used in your project. You can use services like **AWS RDS** or **Google Cloud SQL** for managed databases.

Example SQL for creating a database:
```sql
CREATE DATABASE hostel_management;

USE hostel_management;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'student', 'staff') NOT NULL
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_number VARCHAR(50) NOT NULL,
  room_type VARCHAR(50) NOT NULL,
  capacity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE fees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  status ENUM('paid', 'pending') NOT NULL,
  due_date DATE NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
