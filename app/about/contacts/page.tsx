import Link from "next/link";

export default function Contacts() {
  return (
    <div>
      <h1>Contacts Page</h1>
      <Link href="/about">Return to About Page</Link>
    </div>
  );
}
