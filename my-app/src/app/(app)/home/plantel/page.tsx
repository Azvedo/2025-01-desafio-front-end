'use client';
import { useEffect, useState } from 'react';
import { Player } from '@/types/player';
import Header from '@/components/header';
import PlayerCard from '@/components/playerCard';

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
                    <PlayerCard player={player} key={player.player_id} />
                ))}
            </div>
        </div>
    );
}