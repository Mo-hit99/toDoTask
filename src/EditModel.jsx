import "./Model.css";
import { useState } from "react";

const EditModal = ({ currentItem, editList, onClose, onCancel }) => {
  const [textInput, setTextInput] = useState("");
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <p> Edit Item</p>
            <p className="close" onClick={() => onClose()}>
              &times;
            </p>
          </div>
          <div className="modal-content">
            <form>
              <p>Current Item</p>
              <input type="text" disabled value={currentItem?.text ?? ""} />
              <p>New Item</p>
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-submit"
              onClick={() => {
                editList({ ...currentItem, text: textInput });
                setTextInput("");
              }}
            >
              Submit
            </button>
            <button className="btn btn-cancel" onClick={() => onCancel()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
