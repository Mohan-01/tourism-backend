// class AppError extends Error {
//   constructor(message, status) {
//     super(message);

//     this.status = status;
//     this.statusMessage = `${status}`.startsWith('4') ? 'fail' : 'success';
//     this.isOperational = true;

//     // Error.toString(this, this.constructor)
//     console.log(Error.captureStackTrace(this, this.constructor));
//   }
// }

class AppError extends Error {
  constructor(message, status, res) {
    super(message);
    res.status(status).json({
      statusbar: 'error',
      message
    })
  }
}

export default AppError;
  