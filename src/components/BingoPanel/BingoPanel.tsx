import { Key, useEffect, useState } from "react";
import TileRow from "../TileRow/TileRow";
import { bingoData } from "../../services/BingoService";
import { GetBingoPanel } from "../../hooks/BingoHook";
import { BingoPanelProps } from "./BingoPanel.Interface";
import "./BingoPanel.css";
import logo from "../../Fixtures/logo.svg";
import middle from "../../Fixtures/middle.svg";

const BingoPanel = (props: BingoPanelProps) => {
  let [currentScore, setCurrentScore] = useState(0);
  const panelArray = GetBingoPanel();

  useEffect(() => {
    const midTile = document.getElementById("13");
    // @ts-ignore: Object is possibly 'null'.
    midTile.children[1].innerHTML =
      '<img src="' + middle + '" text-align: center height="50px" />';
    // @ts-ignore: Object is possibly 'null'.
    midTile.classList.add("active");
  }, []);

  const getPanelDiagonals = (array: string | any[]) => {
    const rightDiagonal = [];
    const leftDiagonal = [];
    let row = 0;
    let leftCol = 0;
    let rightCol = array[0].length - 1;
    while (row < array.length) {
      rightDiagonal.push(array[row][leftCol]);
      leftDiagonal.push(array[row][rightCol]);
      row++;
      leftCol++;
      rightCol--;
    }
    return [rightDiagonal, leftDiagonal];
  };

  const isPlayerWin = (tileIndex: any, rowIndex: any, tileArray: any) => {
    const [leftDiagonal, rightDiagonal] = getPanelDiagonals(tileArray);
    const row = tileArray[rowIndex];
    const column = [];
    for (let i = 0; i < tileArray.length; i++) {
      column.push(tileArray[i][tileIndex]);
    }
    const getPanelRow = row.filter(
      (tile: { classList: { contains: (arg0: string) => any } }) =>
        tile.classList.contains("active")
    );
    const getPanelColumn = column.filter((tile) =>
      tile.classList.contains("active")
    );
    const getPanelLeftDiagonal = leftDiagonal.filter((tile) =>
      tile.classList.contains("active")
    );
    const getPanelRightDiagonal = rightDiagonal.filter((tile) =>
      tile.classList.contains("active")
    );

    const isSelectedEntireRow = getPanelRow.length === row.length - 1;
    const isSelectedEntireColumn = getPanelColumn.length === column.length - 1;
    const isSelectedEntireLeftDiagonal =
      getPanelLeftDiagonal.length === leftDiagonal.length - 1;
    const isSelectedEntireRightDiagonal =
      getPanelRightDiagonal.length === rightDiagonal.length - 1;

    const isWin =
      isSelectedEntireRow ||
      isSelectedEntireColumn ||
      isSelectedEntireLeftDiagonal ||
      isSelectedEntireRightDiagonal;

    if (isWin) {
      props.setModalStatus(true);
      setCurrentScore((currentScore += 1));
      props.getCurrentScore(currentScore);
    }
  };

  return (
    <div className="bingo-panel">
      <div className="row">
        <div className="col-md-12 logo">
          <img src={logo} className="logo" alt="Christmas bingo Logo" />
        </div>
      </div>
      {bingoData.map((row: { rowId: Key | null | undefined; array: any }) => (
        <TileRow
          key={row.rowId}
          id={row.rowId}
          tiles={[...row.array]}
          isPlayerWin={isPlayerWin}
          tileArray={panelArray}
        />
      ))}
    </div>
  );
};

export default BingoPanel;
