import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['EXPO_PUBLIC_OPENAI_API_KEY'],
});

export const getChatResponse = async (prompt: string) => {
  try {
    const response = await client.responses.create({
      model: 'gpt-4.1-mini',
      instructions: 'Your job is to extract items and their prices from images of receipts.',
      input: prompt,
    });

    console.log(response.output_text);
    return response.output_text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw error;
  }
};