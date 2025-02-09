// utils/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Logs error to the console
  
    const statusCode = err.status || 500;
    res.status(statusCode).json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;
  