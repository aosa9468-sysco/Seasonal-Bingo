export interface TileRowProps {
  id: any;
  tiles: Array<Tile>;
  isPlayerWin: any;
  tileArray: Array<string>;
}
interface Tile {
  row: number;
  id: string;
  isPlayerWin: any;
  quote: string;
  rowIndex: number;
  index: number;
  tileArray: Array<string>;
}
