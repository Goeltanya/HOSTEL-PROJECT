# API Documentation

The following is a list of all available API endpoints for the Hostel Management System.

## Authentication

### POST /auth/register
- **Description**: Registers a new user (admin, student, or staff).
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "role": "student"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "message": "User registered successfully."
    }
    ```

### POST /auth/login
- **Description**: Logs in an existing user and returns a JWT token.
- **Request Body**:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
- **Response**:
    ```json
    {
      "token": "jwt_token_here"
    }
    ```

## Rooms

### GET /rooms/available
- **Description**: Fetches all available rooms.
- **Response**:
    ```json
    [
      {
        "id": 1,
        "type": "single",
        "availability": true,
        "price": 1000
      },
      ...
    ]
    ```

### POST /rooms/book
- **Description**: Books a room for a student.
- **Request Body**:
    ```json
    {
      "userId": "123",
      "roomId": "1",
      "startDate": "2025-02-01",
      "endDate": "2025-05-01"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "message": "Room booked successfully."
    }
    ```

## Fees

### GET /fee/details
- **Description**: Fetches fee details for the logged-in user.
- **Response**:
    ```json
    {
      "userId": "123",
      "amount": 2000,
      "dueDate": "2025-02-15",
      "status": "pending"
    }
    ```

### POST /fee/pay
- **Description**: Pays the hostel fee.
- **Request Body**:
    ```json
    {
      "userId": "123",
      "amount": 2000,
      "paymentMethod": "credit_card"
    }
    ```
- **Response**:
    ```json
    {
      "success": true,
      "message": "Payment successful."
    }
    ```

## Notifications

### GET /notifications
- **Description**: Fetches notifications for the logged-in user.
- **Response**:
    ```json
    [
      {
        "id": 1,
        "userId": "123",
        "message": "Your room booking is confirmed.",
        "date": "2025-02-01"
      },
      ...
    ]
    ```

---

### 4. **Deployment.md**

This file provides steps for deploying your application to a production server or cloud platform like AWS, Heroku, or DigitalOcean.

```markdown
# Deployment Instructions

## Prerequisites
- A cloud platform account (e.g., AWS, Heroku, DigitalOcean)
- A server (for backend) or platform (for frontend)

## Deploying Backend (Node.js)
1. Push the code to your cloud platform (e.g., Heroku, AWS).
2. Configure the environment variables (e.g., database URL, JWT secret).
3. Install dependencies on your cloud server:
    ```bash
    npm install
    ```
4. Set up a process manager (e.g., PM2) to keep the app running:
    ```bash
    pm2 start server.js
    ```
5. Expose the backend on a public URL and ensure that it is running.

## Deploying Frontend (React)
1. Build the React app:
    ```bash
    npm run build
    ```
2. Upload the `build` folder to your hosting service (e.g., Netlify, Vercel, AWS S3).
3. Configure the frontend to interact with your production backend by updating the `api.js` base URL.

## Optional: Setting Up Database
- Set up a MySQL or MongoDB database on your cloud platform and update the `.env` file with the database connection details.

## Troubleshooting
- Check logs for any errors:
    ```bash
    tail -f /path/to/your/log/file
    ```
- Ensure your environment variables are set correctly.
