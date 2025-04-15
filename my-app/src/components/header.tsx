import Link from "next/link";

export default function Header() {
    return (
        <header className="text-white p-4 mb-2">
            <nav>
                <ul className="flex md:space-x-36 gap-6 text-lg font-semibold">
                    <li>
                        <Link href="/home" className="hover:underline">
                            Time
                        </Link>
                    </li>
                    <li>
                        <Link href="/home/plantel" className="hover:underline">
                            Plantel
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}