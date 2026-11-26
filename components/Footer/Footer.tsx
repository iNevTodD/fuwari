import Link from "next/link";

export default function Footer() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/goals">Goals</Link>
        </li>
        <li>
          <Link href="/wallet">Wallet</Link>
        </li>
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
