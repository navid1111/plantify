'use server';

import { SignInResponse } from '@/types/auth';

export async function signIn(
  prevState: SignInResponse | undefined,
  formData: FormData,
): Promise<SignInResponse> {
  try {
    // This is where you would integrate with your backend
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, always succeed if email contains "@"
    if (!email.includes('@')) {
      return {
        error: 'Invalid email address',
        success: false,
      };
    }

    return {
      success: true,
      user: {
        id: '1',
        name: email.split('@')[0],
        email: email,
      },
    };
  } catch (error) {
    return {
      error: 'An error occurred during sign in',
      success: false,
    };
  }
}
