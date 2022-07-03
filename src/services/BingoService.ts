export const bingoData: any[] = [];

const titles = [
  "Build a Snowman",
  "Watch a Christmas Movie",
  "Bake Gingerbread Cookies",
  "Wrap Presents",
  "Listen to Christmas Music",
  "Look at Christmas Lights",
  "Donate Old Toys",
  "Make Snow Angels",
  "Read a Christmas Story",
  "Visit Santa",
  "Serve Someone in Need",
  "Decorate Christmas Tree",
  "Make a Christmas List",
  "Make Reindeer Food",
  "Eat a Candy Cane",
  "Go Sledding",
  "Write a letter to Your Elf",
  "Drink hot Chocalte",
  "Wear Christmas Jammies",
  "Make a Paper Snowflake",
  "Make a Christmas Card",
  "Sing Christmas Carols",
  "Visit Family",
  "Make an Ornament",
  "Look at Christmas Lights",
  "Take a Festive Photo",
  "Decorate The House",
  "Participate in a Secret Santa",
  "Haven't Started Christmas Shopping",
  "I Saw Mom Kissing Santa",
];

const makeBingoPanel = () => {
  const panel: { id: number; quote: string; row: number; isActive: boolean }[] =
    [];
  let rowNumber;

  let i = 0;
  while (i < 25) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    i < 5
      ? (rowNumber = 1)
      : i < 10
      ? (rowNumber = 2)
      : i < 15
      ? (rowNumber = 3)
      : i < 20
      ? (rowNumber = 4)
      : (rowNumber = 5);

    if (
      panel.every((tile) => {
        return tile.quote !== title;
      })
    ) {
      panel.push({
        id: i + 1,
        quote: title,
        row: rowNumber,
        isActive: false,
      });
      i++;
    }
  }
  return panel;
};

const makePanelRows = (array: any[]) => {
  const panelRows = [];
  for (let i = 0; i < 5; i++) {
    panelRows.push({ rowId: i + 1, array: array.splice(0, 5) });
  }
  return panelRows;
};

const bingoPanel = makeBingoPanel();
const panelrows: any[] = makePanelRows(bingoPanel);
panelrows.forEach((row) => {
  for (let i = 0; i < row.array.length; i++) {
    row.array[i].index = i;
  }
});

bingoData.push(...panelrows);
