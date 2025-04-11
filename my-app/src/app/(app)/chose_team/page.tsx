'use client'
import { useEffect, useState } from "react";
import { getCoutries, getLeagues, getTeams } from "@/services/getInformations";
import { Country } from "@/types/country";
import { Competition } from "@/types/competition";
import { Team } from "@/types/teams";
import Image from "next/image";

export default function ChoseTeam() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [countries, setCountries] = useState<Country[]>([]);
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [selectedCompetition, setSelectedCompetition] = useState("");
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedTeam, setSelectedTeam] = useState("");

    const fetchCountries = async () => {
        try {
            const data = await getCoutries();
            const filteredCountries = data.filter((country: any) =>
                ["France", "Spain", "England", "Germany", "Portugal", "Brazil"].includes(country.country_name)
            );
            setCountries(filteredCountries);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    const fetchCompetitions = async (countryid: string) => {
        try {
            const data = await getLeagues(countryid);
            setCompetitions(data);
        } catch (error) {
            console.error("Error fetching competitions:", error);
        }
    };

    const fetchTeams = async (leagueId: string) => {
        try {
            const data = await getTeams(leagueId);
            setTeams(data);
        } catch (error) {
            console.error("Error fetching teams:", error);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const selectedCountryId = countries.find(country => country.country_name === selectedCountry)?.country_id;
            if (selectedCountryId) {
                fetchCompetitions(selectedCountryId);
            }
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCompetition) {
            const selectedLeagueId = competitions.find(competition => competition.league_name === selectedCompetition)?.league_id;
            if (selectedLeagueId) {
                fetchTeams(selectedLeagueId);
            }
        }
    }, [selectedCompetition]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white relative p-4">
            <h1 className="absolute top-0 text-3xl font-bold my-6 z-10">Escolha seu time</h1>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-gray-800 opacity-50 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                    src={"/campo.jpg"}
                    alt="Campo de futebol"
                    width={700}
                    height={700}
                    className="object-cover hidden md:block opacity-80 rounded-2xl"
                />
            </div>
            <div className="w-full max-w-lg md:bg-transparent bg-[#188e44] rounded-lg shadow-lg p-6 flex flex-col items-center z-10">
                <div className="mb-6 w-full">
                    <h2 className="text-lg font-semibold text-center mb-4 text-black">Escolha o país</h2>
                    <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black"
                    >
                        <option value="">Selecione um país</option>
                        {countries.map((country) => (
                            <option key={country.country_id} value={country.country_name}>
                                {country.country_name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedCountry && (
                    <div className="mb-6 w-full">
                        <h2 className="text-lg font-semibold text-center mb-4 text-black">Escolha a competição</h2>
                        <select
                            value={selectedCompetition}
                            onChange={(e) => setSelectedCompetition(e.target.value)}
                            className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black"
                        >
                            <option value="">Selecione uma competição</option>
                            {competitions.map((competition) => (
                                <option key={competition.league_id} value={competition.league_name}>
                                    {competition.league_name} ({competition.league_season})
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedCompetition && (
                    <div className="w-full">
                        <h2 className="text-lg font-semibold text-center mb-4 text-black">Escolha o clube</h2>
                        <select
                            value={selectedTeam}
                            onChange={(e) => setSelectedTeam(e.target.value)}
                            className="w-full p-2 rounded-lg border border-gray-300 bg-white text-black"
                        >
                            <option value="">Selecione um clube</option>
                            {teams.map((team) => (
                                <option key={team.team_key} value={team.team_name}>
                                    {team.team_name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedTeam && (
                    <div className="mt-6 w-full text-center">
                        <button
                            onClick={() => alert(`Continuando com o clube: ${selectedTeam}`)}
                            className="w-full mt-4 px-4 py-3 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            Continuar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}