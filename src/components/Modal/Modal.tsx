import ReactDom from "react-dom";
import { ModalProps } from "./Modal.Interface";
import "./Modal.css";

const Modal = (props: ModalProps) => {
  if (!props.isShowing) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay"></div>
      <div className="bingo-modal">
        {props.children}
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-success mb-2" onClick={props.closeModal}>
              Continue
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-warning" onClick={props.shuffleGame}>
              Shuffle
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
