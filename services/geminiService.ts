import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;

// Initialize conditionally to avoid crashing if env is missing during static render
try {
    if (process.env.API_KEY) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else {
        console.warn("Gemini API Key missing. Demo will use mock responses.");
    }
} catch (e) {
    console.error("Failed to initialize GoogleGenAI", e);
}

export const streamGeminiResponse = async function* (
    message: string,
    language: string
): AsyncGenerator<string, void, unknown> {
    
    // Fallback if no API key
    if (!ai) {
        const mockResponse = language === 'ES' 
            ? "Lo siento, la API Key no está configurada en esta demostración. Por favor contacta al administrador." 
            : "Sorry, the API Key is not configured in this demo. Please contact the administrator.";
        
        const words = mockResponse.split(' ');
        for (const word of words) {
            await new Promise(r => setTimeout(r, 50));
            yield word + " ";
        }
        return;
    }

    try {
        const systemPrompt = `You are a helpful, professional, and concise AI assistant for a company called 'IAnalytics'. 
        The company builds AI agents for Fintech, LegalTech, and Logistics. 
        Your tone is professional, trustworthy, and technologically advanced.
        Answer strictly in ${language === 'ES' ? 'Spanish' : 'English'}.
        Keep answers under 50 words unless asked for detail.`;

        const responseStream = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash-latest', // Using the fast flash model for demo
            contents: message,
            config: {
                systemInstruction: systemPrompt,
            }
        });

        for await (const chunk of responseStream) {
            const c = chunk as GenerateContentResponse;
            if (c.text) {
                yield c.text;
            }
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        yield language === 'ES' 
            ? "Hubo un error conectando con el agente. Por favor intente más tarde." 
            : "There was an error connecting to the agent. Please try again later.";
    }
};