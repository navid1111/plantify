import Image from 'next/image';
import Link from 'next/link';

import { SignInForm } from './sign-in-form';

export default function SignInPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
          Mastery Hub
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Unleash Your Academic Success with Exam Mastery Hub&apos;s Exam
              Excellence Platform
            </p>
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-100 to-green-50" />
        <Image
          src="/placeholder.svg?height=800&width=800"
          alt="Student studying illustration"
          width={800}
          height={800}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Image
              src="/placeholder.svg"
              alt="Mastery Hub Logo"
              width={150}
              height={40}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to sign in to your account
            </p>
          </div>
          <SignInForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Are you new?{' '}
            <Link
              href="/sign-up"
              className="underline underline-offset-4 hover:text-primary"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
