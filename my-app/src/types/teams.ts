import { Player } from "./player";

export type Team = {
    team_key: string;
    team_name: string;
    team_country: string;
    team_founded: string;
    team_badge: string;
    venue: {
        venue_name: string;
        venue_address: string;
        venue_city: string;
        venue_capacity: string;
        venue_surface: string;
    };
    players: Player[];
    coaches: Coach[];
};


export type Coach = {
    coach_name: string;
    coach_country: string;
    coach_age: string;
};