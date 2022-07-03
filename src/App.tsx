import { SetStateAction, useState } from "react";
import "./App.css";
import BingoPanel from "./components/BingoPanel/BingoPanel";
import Modal from "./components/Modal/Modal";
import Bingo from "../src/Fixtures/bingo.gif";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const getCurrentScore = (score: SetStateAction<number>) => {
    setTotalScore(score);
  };

  const shuffleBingo = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <Modal
        isShowing={showModal}
        closeModal={() => setShowModal(false)}
        shuffleGame={() => shuffleBingo()}
      >
        <img className="modal-image" src={Bingo} alt="Merry Christmas" />
        <h2 className="total-score">Total Bingos: {totalScore}</h2>
      </Modal>
      <BingoPanel
        setModalStatus={setShowModal}
        getCurrentScore={getCurrentScore}
      />
    </div>
  );
}

export default App;
