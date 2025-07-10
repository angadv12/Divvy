import React, { createContext, useContext, useState } from 'react';

interface ScanResultContextValue {
  lastScan: string | null;
  setLastScan: (data: string) => void;
}

const ScanResultContext = createContext<ScanResultContextValue | undefined>(undefined);

export const ScanResultProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lastScan, setLastScanState] = useState<string | null>(null);

  const setLastScan = (data: string) => {
    setLastScanState(data);
  };

  return (
    <ScanResultContext.Provider value={{ lastScan, setLastScan }}>
      {children}
    </ScanResultContext.Provider>
  );
};

export const useScanResult = () => {
  const ctx = useContext(ScanResultContext);
  if (!ctx) {
    throw new Error('useScanResult must be used within ScanResultProvider');
  }
  return ctx;
}; 