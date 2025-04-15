import { Player } from "@/types/player";

interface PlayerCardProps {
    player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
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
    );
}