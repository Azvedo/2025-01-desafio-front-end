export const getTeamInfo = async (teamName: string): Promise<string> => {
    try {
        const response = await fetch("/api/openAI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: teamName }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch team info: ${response.statusText}`);
        }

        const data = await response.json();
        return data.response; 
    } catch (error) {
        console.error("Error fetching team info:", error);
        throw error; 
    }
};