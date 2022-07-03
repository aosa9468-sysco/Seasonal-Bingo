import { useEffect, useState } from "react";
import { TileProps } from "./Tile.Interface";
import "./Tile.css";

const Tile = (props: TileProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(!isActive);
  }, [isSelected]);

  return (
    <div
      className={`tile ${isSelected ? "active" : ""}`}
      id={props.id}
      onClick={() => {
        setIsSelected(!isSelected);
        if (isActive)
          props.isPlayerWin(props.index, props.rowIndex - 1, props.tileArray);
      }}
    >
      <div className="tile-number">{props.id}</div>
      <div className="tile-quote">{props.quote}</div>
    </div>
  );
};

export default Tile;
