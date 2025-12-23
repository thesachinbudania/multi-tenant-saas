import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="flex gap-12 items-center w-full px-8 py-4">
      {/* Logo Section */}
      <div className="flex gap-1 items-center shrink-0">
        <p className="text-xl font-semibold text-black whitespace-nowrap">
          covert
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex gap-8 items-start grow shrink-0 basis-0 min-w-0 min-h-0">
        <a href="#products" className="text-base text-black whitespace-nowrap hover:opacity-70 transition-opacity">
          Products
        </a>
        <a href="#pricing" className="text-base text-black whitespace-nowrap hover:opacity-70 transition-opacity">
          Pricing
        </a>
        <a href="#customers" className="text-base text-black whitespace-nowrap hover:opacity-70 transition-opacity">
          Customers
        </a>
        <a href="#integrations" className="text-base text-black whitespace-nowrap hover:opacity-70 transition-opacity">
          Integrations
        </a>
        <a href="#resources" className="text-base text-black whitespace-nowrap hover:opacity-70 transition-opacity">
          Resources
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex gap-3 items-center shrink-0">
        <Link href="/login">
          <Button variant="ghost" size="lg">
            Log in
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="outline" size="md">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
}
