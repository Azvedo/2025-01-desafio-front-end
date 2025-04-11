"use client";
import { useEffect, useRef, useState } from "react";
import { Team } from "@/types/teams";
import Image from "next/image";
import { FastAverageColor } from "fast-average-color";
import Header from "@/components/header";

export default function TeamPage() {
    const [team, setTeam] = useState<Team | null>(null);
    const [bgStyle, setBgStyle] = useState<React.CSSProperties>({});
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const storedTeam = localStorage.getItem("team");
        if (storedTeam) {
            const parsedTeam: Team = JSON.parse(storedTeam);
            setTeam(parsedTeam);
        }
    }, []);

    const handleImageLoad = async () => {
        if (imgRef.current) {
            const fac = new FastAverageColor();
            try {
                const color = await fac.getColorAsync(imgRef.current);
                const mainColor = color.hex || "#111";

                setBgStyle({
                    background: `linear-gradient(135deg, ${mainColor}, ${mainColor}99)`,
                });
            } catch (error) {
                console.error("Erro ao pegar paleta:", error);
            }
        }
    };

    if (!team) return <div>Carregando...</div>;

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen transition-all duration-500 text-white"
            style={bgStyle}
        >
            <Header />
            <div className="items-center justify-center flex flex-col bg-opacity-50 p-6 rounded-lg shadow-lg">
                <Image
                    ref={imgRef}
                    src={team.team_badge}
                    alt="Team Badge"
                    onLoad={handleImageLoad}
                    crossOrigin="anonymous"
                    className="mb-4 object-contain"
                    width={150}
                    height={150}
                />
                <h1 className="text-3xl font-bold drop-shadow-md">{team.team_name}</h1>
            </div>

        </div>
    );
}
