import { useState } from 'react';

export const useLocalStorage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitToLocalStorage = async (formData: any) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      const result = await response.json();
      alert('Data saved successfully!');
      return result;
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save data. Please try again.');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitToLocalStorage, isLoading };
};