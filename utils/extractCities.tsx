export const extractCity = (text: string) => {
  const match = text.match(/weather\s+(?:in|for)?\s*([a-zA-Z\s]+)/i);
  return match ? match[1].trim() : null;
};
