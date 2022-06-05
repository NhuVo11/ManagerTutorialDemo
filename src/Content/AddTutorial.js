import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TutorialService from "./TutorialService";

function AddTutorial() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  const handleAdd = () => {
    const tutorial = {
      title: title,
      description: description,
    };
    console.log(tutorial);
    // fetch('/api/tutorials',{
    //     method: "POST",
    //     headers:{"Content-Type": "application/json"},
    //     body: JSON.stringify(tutorial)
    // }).then(() =>{
    //     console.log("new tutorials added")
    // })
    TutorialService.create(tutorial)
      .then((response) => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>New Tutorial</h1>
      title:
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      description:
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button className="btn btn-primary" onClick={handleAdd}>
        Thêm
      </button>
      <span style={{ padding: 2 }}>
        <Link to={"/tutorials"} className="btn btn-primary">
          Hủy
        </Link>
      </span>
    </div>
  );
}
export default AddTutorial;
