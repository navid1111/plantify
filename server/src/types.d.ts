// types.d.ts
declare namespace Express {
  export interface Request {
    userId?: string; // Optional, since userId may not always be available
  }
}
