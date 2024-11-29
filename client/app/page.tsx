import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import { Heart, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="mx-auto px-6 py-6 md:py-8 max-w-screen-xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold text-olive-russet hover:text-olive transition-all"
          >
            Plants
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-lg text-olive hover:text-green-600 transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg text-olive hover:text-green-600 transition-all"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-lg text-olive hover:text-green-600 transition-all"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="text-lg text-olive hover:text-green-600 transition-all"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg text-olive hover:text-green-600 transition-all"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5 text-green-800" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Add to Wishlist">
              <Heart className="h-5 w-5 text-green-800" />
            </Button>
            <SignInButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto px-6 py-24 md:py-32 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Gardening is a way to a{' '}
              <span className="text-olive-russet">healthy life</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-md">
              Plants purify our air, boost our mood, and create a refreshing
              environment. Start your green journey today with a wide selection
              of plants.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-spring-soge hover:bg-olive-russet text-cream px-8 py-3 transition-all">
                Plant Now
              </Button>
              <Button
                variant="outline"
                className="bg-cream text-olive-russet border-olive-russet px-8 py-3 hover:bg-olive transition-all"
              >
                Watch Video
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-[10/9] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/pexels-scottwebb-1903965.jpg"
              alt="Beautiful plant"
              fill
              className="object-cover"
              sizes="(max-width: 1008px) 100vw, (max-width: 1500px) 50vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
