"use client";
import { useEffect, useRef, useState } from "react";
import { Team } from "@/types/teams";
import Image from "next/image";
import ColorThief from "colorthief";
import Header from "@/components/header";
import { getTeamInfo } from "@/services/openAI";
import TypewriterEffect from "@/components/Typewriter";

export default function TeamPage() {
    const [team, setTeam] = useState<Team | null>(null);
    const [bgStyle, setBgStyle] = useState<React.CSSProperties>({});
    const [teamHistory, setTeamHistory] = useState<string | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    // Carregar o time do localStorage
    useEffect(() => {
        const storedTeam = localStorage.getItem("team");
        if (storedTeam) {
            const parsedTeam: Team = JSON.parse(storedTeam);
            setTeam(parsedTeam);
        }
    }, []);

    // Buscar informações do time após o estado `team` ser atualizado
    useEffect(() => {
        if (team?.team_name) {
            const fetchTeamInfo = async () => {
                try {
                    const history = await getTeamInfo(`Me fale sobre o time ${team.team_name}`);
                    setTeamHistory(history);
                } catch (error) {
                    console.error("Erro ao buscar informações do time:", error);
                }
            };

            fetchTeamInfo();
        }
    }, [team]);

    const handleImageLoad = () => {
        if (imgRef.current) {
            const colorThief = new ColorThief();
            const img = imgRef.current as HTMLImageElement;

            // precisa esperar a imagem carregar totalmente
            if (img.complete) {
                const palette = colorThief.getPalette(img, 2); // pega 2 cores principais
                const [main, second] = palette;

                const mainColor = `rgb(${main[0]}, ${main[1]}, ${main[2]})`;
                const secondColor = `rgb(${second[0]}, ${second[1]}, ${second[2]})`;

                setBgStyle({
                    background: `linear-gradient(135deg, ${mainColor}, ${secondColor})`,
                });
            }
        }
    };

    if (!team) return <div className="text-center justify-center items-center">Carregando...</div>;

    return (
        <div
            className="flex flex-col items-center justify-center h-full text-white"
            style={bgStyle}
        >
            <Header />
            <div className="items-center justify-center flex flex-col bg-opacity-50 p-6 my-16 rounded-lg shadow-lg">
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
            <div className="mt-6 mb-5 mx-4 w-full max-w-lg rounded-lg shadow-lg p-6 flex flex-col items-center z-10">
                <div className="mt-4">
                    <TypewriterEffect words={["Historia do time"]} />
                </div>
                {teamHistory && (
                    <TypewriterEffect words={[teamHistory]} />
                )}
            </div>

        </div>
    );
}
