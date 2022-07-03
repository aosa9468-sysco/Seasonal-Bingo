import Tile from "../Tile/Tile";
import { TileRowProps } from "./TileRow.Interface";

const TileRow = (props: TileRowProps) => {
  return (
    <div className="tile-row">
      {props.tiles.map((tile) => (
        <Tile
          key={tile.id}
          id={tile.id}
          index={tile.index}
          isPlayerWin={props.isPlayerWin}
          quote={tile.quote}
          rowIndex={tile.row}
          tileArray={props.tileArray}
        />
      ))}
    </div>
  );
};

export default TileRow;
