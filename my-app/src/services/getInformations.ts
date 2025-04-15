import {api} from "./api";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Ensure you have your API key in your .env file

export const getCoutries = async () => {
    try {
        const response = await api.get(`/?action=get_countries&APIkey=${API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
}
export const getLeagues = async (countryId: string) => {
    try {
        const response = await api.get(`/?action=get_leagues&country_id=${countryId}&APIkey=${API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching leagues:", error);
        throw error;
    }
}

export const getTeams = async (leagueId: string) => {
    try {
        const response = await api.get(`/?action=get_teams&league_id=${leagueId}&APIkey=${API_KEY}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching teams:", error);
        throw error;
    }
}
