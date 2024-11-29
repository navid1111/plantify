// clerk.d.ts
import { User } from '@clerk/clerk-sdk-node'; // import the User type from Clerk SDK

declare global {
  namespace Express {
    interface Request {
      auth: {
        user: User;
      };
    }
  }
}
