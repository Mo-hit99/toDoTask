import { useState } from "react";
import "./App.css";
import Model from "./Model";
import AddLink from "./AddLink";
import ImageUpload from "./ImageUpload";
import ListItems from "./ListItems";
import EditModal from "./EditModel";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [image, setImage] = useState("");

  const [list, SetList] = useState([]);

  function addList(inputText) {
    if (inputText !== "") {
      SetList([...list, inputText]);
      handleButtonClick();
    }
  }
  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
  const handleButtonClick = () => {
    setModalOpen(false);
    setModalOpen2(false);
    setModalOpen3(false);
    setEditModal(null);
  };

  const renameItem = (item) => {
    setEditModal({ ...item });
  };

  const editList = (item) => {
    const listCopy = [...list];
    listCopy[item.idx] = item?.text ?? "";
    SetList(listCopy);
    setEditModal(null);
  };

  function deleteList(key) {
    let newList = [...list];
    newList.splice(key, 1);
    SetList([...newList]);
  }
  return (
    <>
      <div className="App">
        <h1>Course Builder</h1>

        <nav className="nav-link">
          <button className="btn btn-open" onClick={() => setModalOpen(true)}>
            Add
          </button>
          {modalOpen && (
            <Model
              onSubmit={handleButtonClick}
              onCancel={handleButtonClick}
              onClose={handleButtonClick}
              addList={addList}
            ></Model>
          )}
          {editModal && (
            <EditModal
              currentItem={editModal}
              onSubmit={handleButtonClick}
              onCancel={handleButtonClick}
              onClose={handleButtonClick}
              editList={editList}
            ></EditModal>
          )}

          <button className="btn btn-open" onClick={() => setModalOpen2(true)}>
            Add Link
          </button>
          {modalOpen2 && (
            <AddLink
              onSubmit={handleButtonClick}
              onCancel={handleButtonClick}
              onClose={handleButtonClick}
              addList={addList}
            ></AddLink>
          )}

          <button className="btn btn-open" onClick={() => setModalOpen3(true)}>
            UploadFile
          </button>
          {modalOpen3 && (
            <ImageUpload
              onSubmit={(e) => addList(image?.name)}
              onCancel={handleButtonClick}
              onClose={handleButtonClick}
            >
              <input type="file" name="file" onChange={handleImage} />
            </ImageUpload>
          )}
        </nav>
      </div>
      {/* <Lottie animationData={home} /> */}
      <div style={{ padding: "20px", position: "relative", top: 0 }}>
        {list.map((listItem, i) => {
          return (
            <ListItems
              key={i}
              index={i}
              item={listItem}
              renameItem={renameItem}
              deleteList={deleteList}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
