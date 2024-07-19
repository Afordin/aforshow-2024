import { useEffect, useState } from 'react';

export interface Contributor {
  username: string;
  avatarUrl: string;
}

export const useContributors = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contributors, setContributors] = useState<Array<Contributor>>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Afordin/aforshow-2024/contributors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (!Array.isArray(data) || data.some((item) => typeof item.login !== 'string' || typeof item.avatar_url !== 'string')) {
          throw new Error('Invalid data format');
        }

        const contributorsData: Array<Contributor> = data
          .map(({ login, avatar_url, contributions }) => ({
            username: login,
            avatarUrl: avatar_url,
            contributions
          }))
          .sort((a, b) => b.contributions - a.contributions);

        setContributors(contributorsData);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error fetching contributors: ${error.message}`);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return { contributors, isLoading, error };
};
