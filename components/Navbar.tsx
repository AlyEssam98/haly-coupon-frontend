'use client';
import Link from 'next/link';
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-extrabold tracking-tight" aria-label="HALY Coupon home">
            <span className="text-primary">HALY</span>
          </Link>
          <nav className="hidden md:flex gap-4 items-center text-sm" aria-label="Primary navigation">
            <Link href="/" className="px-2 py-1 text-muted-foreground hover:text-slate-900">Home</Link>
            <Link href="/places" className="px-2 py-1 text-muted-foreground hover:text-slate-900">Places</Link>
            <Link href="/about" className="px-2 py-1 text-muted-foreground hover:text-slate-900">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/places" className="hidden md:inline-block rounded-lg bg-gradient-to-r from-primary to-primary-700 px-4 py-2 text-sm font-semibold text-white shadow" aria-label="Get the deals">
            Get the Deals
          </Link>
        </div>
      </div>
    </header>
  );
}
