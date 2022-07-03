import { useEffect, useState } from "react";

export const GetBingoPanel = () => {
  const [bingoPanel, setBingoPanel] = useState<any[]>([]);

  useEffect(() => {
    const panelRows = Array.from(document.querySelectorAll(".tile-row"));
    const bingoPanel: any[] = panelRows.map((row) => [...row.children]);
    setBingoPanel([bingoPanel]);
  }, []);
  return bingoPanel[0];
};
