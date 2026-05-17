import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEY } from '../configs';

const readStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export default function useInstalledApps() {
  const [installed, setInstalled] = useState(readStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
  }, [installed]);

  const isInstalled = useCallback(
    (id) => installed.some((app) => app.id === Number(id)),
    [installed],
  );

  const installApp = useCallback((app) => {
    setInstalled((prev) => {
      if (prev.some((item) => item.id === app.id)) return prev;
      return [...prev, app];
    });
  }, []);

  const uninstallApp = useCallback((id) => {
    setInstalled((prev) => prev.filter((app) => app.id !== Number(id)));
  }, []);

  return { installed, isInstalled, installApp, uninstallApp };
}
