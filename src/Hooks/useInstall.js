import { useContext } from 'react';
import { InstallContext } from '../context/installContext';

export default function useInstall() {
  const ctx = useContext(InstallContext);
  if (!ctx) {
    throw new Error('useInstall must be used within InstallProvider');
  }
  return ctx;
}
