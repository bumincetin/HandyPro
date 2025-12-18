
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateJobDescription = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As a professional home services assistant, take the following rough description and turn it into a professional, clear, and itemized job post for a marketplace. If it sounds like a plumber, electrician, or handyman is needed, specify that.
    
    User prompt: "${prompt}"`,
    config: {
      temperature: 0.7,
      topP: 0.95,
      maxOutputTokens: 1000,
    }
  });
  return response.text;
};

export const analyzeJobImage = async (base64Image: string, mimeType: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      {
        inlineData: {
          data: base64Image,
          mimeType: mimeType,
        },
      },
      { text: "Look at this image of a home repair issue. Suggest the most likely service category (e.g., Plumbing, Electrical, HVAC, Carpentry, Painting, Cleaning). Return ONLY the category name." },
    ],
  });
  return response.text?.trim();
};

export const translateMessage = async (text: string, targetLang: string = "English") => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Translate the following chat message into ${targetLang}. If it is already in that language, return it exactly as is.
    
    Message: "${text}"`,
    config: {
      temperature: 0.1,
    }
  });
  return response.text;
};

export const transcribeWorkerVoice = async (base64Audio: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-native-audio-preview-09-2025',
    contents: [
      {
        inlineData: {
          data: base64Audio,
          mimeType: 'audio/webm',
        },
      },
      { text: "The user is a blue-collar worker offering a bid for a job. Transcribe their words into a professional, polite, and clear bid description for a client. Fix any grammar issues but keep it authentic." },
    ],
  });
  return response.text;
};
