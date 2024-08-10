// src/context/stoneContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Stone {
  id: number;
  name: string;
  bonus?: string;
  img?: string;
  noBids?: boolean;
  coin?: string;
  users?: string;
  bets?: string;
  volume?: string;
}

interface StoneContextType {
  selectedStone: Stone | null;
  selectStone: (stone: Stone) => void;
}

const StoneContext = createContext<StoneContextType | undefined>(undefined);

export const StoneProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedStone, setSelectedStone] = useState<Stone | null>(null);

  const selectStone = (stone: Stone) => {
    setSelectedStone(stone);
  };

  return (
    <StoneContext.Provider value={{ selectedStone, selectStone }}>
      {children}
    </StoneContext.Provider>
  );
};

export const useStone = (): StoneContextType => {
  const context = useContext(StoneContext);
  if (!context) {
    throw new Error("useStone must be used within a StoneProvider");
  }
  return context;
};
