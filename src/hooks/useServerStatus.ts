import { useEffect, useState } from "react";

export type ServerStatus = {
  onlinePlayers: number | null;
  isOnline: boolean | null;
  isLoading: boolean;
};

const STATUS_URL =
  "https://api.mcsrvstat.us/2/xpro-1.syrtex-app.cloud:25808";

export function useServerStatus(): ServerStatus {
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null);
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchStatus = async () => {
      try {
        const response = await fetch(STATUS_URL);
        const data = await response.json();

        if (!isMounted) return;

        if (data.online) {
          setIsOnline(true);
          setOnlinePlayers(
            typeof data.players?.online === "number"
              ? data.players.online
              : null
          );
        } else {
          setIsOnline(false);
          setOnlinePlayers(null);
        }
      } catch (error) {
        if (!isMounted) return;
        console.error("Erro ao buscar status do servidor:", error);
        setIsOnline(null);
        setOnlinePlayers(null);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { onlinePlayers, isOnline, isLoading };
}


