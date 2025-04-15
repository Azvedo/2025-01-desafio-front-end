'use client';
import { useEffect, useState } from 'react';
import { Player } from '@/types/player';
import Header from '@/components/header';

export default function TeamPage() {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const team = localStorage.getItem('team');
        if (team) {
            const parsedTeam = JSON.parse(team);
            setPlayers(parsedTeam.players || []);
        }
    }, []);

    const teamColors = localStorage.getItem('teamColors');

    return (
        <div className="flex flex-col text-center justify-center items-center "
            style={teamColors ? { background: `linear-gradient(90deg, ${JSON.parse(teamColors).mainColor}, ${JSON.parse(teamColors).secondColor})` } : {}}
        >
            <Header />
            <div className="w-2/3 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {players.map((player) => (
                    <div key={player.player_key} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img
                            src={player.player_image ? player.player_image : "/profileimg.png"}
                            alt={player.player_name}
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <h2 className="text-lg font-semibold">{player.player_name}</h2>
                        <p className="text-gray-600">{player.player_type}</p>
                        <p className="text-gray-600">#{player.player_number}</p>
                        <p className="text-gray-600">{player.player_country}</p>
                        <p className="text-gray-600">{player.player_age} years</p>
                    </div>
                ))}
            </div>
        </div>
    );
}