
export default function Header() {
    return (
        <header className="text-white p-4 mb-2">
            <nav>
                <ul className="flex space-x-36 text-lg font-semibold">
                    <li><a href="#time" className="hover:underline">Time</a></li>
                    <li><a href="#plantel" className="hover:underline">Plantel</a></li>
                    <li><a href="#partidas" className="hover:underline">Partidas</a></li>
                </ul>
            </nav>
        </header>
    );
}