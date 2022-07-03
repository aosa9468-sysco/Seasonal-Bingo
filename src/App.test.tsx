import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BingoPanel from "../src/components/BingoPanel/BingoPanel";

describe("Test the Bingo Panel Component", () => {
  test("render the header image", () => {
    render(<BingoPanel setModalStatus={false} getCurrentScore={2} />);
    const imageAltText = screen.getByAltText("Christmas bingo Logo");
    expect(imageAltText).toBeInTheDocument();
  });

  test("render the id component in Bingo cards", () => {
    render(<BingoPanel setModalStatus={true} getCurrentScore={2} />);
    const panelId5 = screen.getByText("5");
    expect(panelId5).toBeInTheDocument();
  });
});
