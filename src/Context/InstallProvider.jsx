import useInstalledApps from '../hooks/useInstalledApps';
import { InstallContext } from './installContext';

export default function InstallProvider({ children }) {
  const value = useInstalledApps();

  return (
    <InstallContext.Provider value={value}>{children}</InstallContext.Provider>
  );
}
