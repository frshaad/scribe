import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/documents/123">Go to document 123</Link>
    </div>
  );
}
