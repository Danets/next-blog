import Link from "next/link";

export default function ContactsPage() {
  return (
    <div>
      <h2 className={`mb-2 text-lg font-semibold text-gray-900 dark:text-white`}>Contacts Page</h2>
      <Link href="/about">Return to AboutPage</Link>
    </div>
  );
}
