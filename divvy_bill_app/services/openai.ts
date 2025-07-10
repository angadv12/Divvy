import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['EXPO_PUBLIC_OPENAI_API_KEY'],
});

export const analyzeReceiptImage = async (base64Image: string) => {
  try {
    const response = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: [
        {
          role: 'user',
          content: [
            {
              type: 'input_text',
              text: 'Extract all items and their prices from this receipt image. Return ONLY a JSON array of objects with "item" and "price" keys. If the image does not contain a receipt, respond exactly with "failed to identify receipt, try again please".'
            },
            {
              type: 'input_image',
              image_url: `data:image/jpeg;base64,${base64Image}`,
              detail: 'auto'
            }
          ]
        }
      ]
    });

    return (response as any).output_text ?? '';
  } catch (error) {
    console.error('Error analyzing receipt:', error);
    throw error;
  }
};