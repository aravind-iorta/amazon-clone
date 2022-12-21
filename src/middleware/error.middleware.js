const errorMiddleware = (error, req, res, next) => {
  const code = error.code ?? 500;
  const message = error.message ?? "Something went wrong";

  res.status(code).json({
    response: "Error",
    error: {
      error: error.error.message,
      status: code,
      message,
    },
  });
};
export default errorMiddleware;
