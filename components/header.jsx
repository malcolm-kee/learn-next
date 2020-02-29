import Link from 'next/link';

export const Header = () => (
  <header className="bg-teal-700 text-gray-100">
    <nav className="max-w-6xl mx-auto text-lg p-3">
      <Link href="/">
        <a className="mx-2">Home</a>
      </Link>
      <Link href="/about">
        <a className="mx-2">About</a>
      </Link>
      <Link href="/quote-of-the-day">
        <a className="mx-2">Quote</a>
      </Link>
    </nav>
  </header>
);
