declare global {
  namespace Express {
    interface Request {
      userId?: string; // or number, depending on your user ID type
    }
  }
}

export {}; // This empty export makes it a module
