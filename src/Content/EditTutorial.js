import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TutorialService from "./TutorialService";

function EditTutorial() {
  let { id } = useParams();

  const [tutorial, setTutorial] = useState(null);

  let nav = useNavigate();

  useEffect(() => {
    //   console.log(id)
    if (id) {
      getTutorial(id);
    }
  }, [id]);

  const onChangeTitle = (e) => {
    setTutorial({
      ...tutorial,
      title: e.target.value,
    });
  };
  const onChangeDescription = (e) => {
    setTutorial({
      ...tutorial,
      description: e.target.value,
    });
  };

  const getTutorial = (id) => {
    TutorialService.get(id)
      .then((res) => {
        setTutorial(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  const handlePublished = (e) => {
    setTutorial({
      ...tutorial,
      published: !tutorial.published,
    });
  };
  const handleEdit = () => {
    TutorialService.update(tutorial, id).then((res) => nav("/tutorials"));
  };
  //   console.log(tutorial)
  return (
    <div>
      {tutorial ? (
        <div>
          <h1>Edit Tutorial</h1>
          title:
          <input
            type="text"
            placeholder="Enter title"
            value={tutorial.title}
            onChange={onChangeTitle}
          />
          <br />
          description:
          <input
            type="text"
            placeholder="Enter description"
            value={tutorial.description}
            onChange={onChangeDescription}
          />
          <br />
          published:{tutorial.published ? "true" : "false"}
          <br />
          <span style={{ padding: 2 }}>
            <button className="btn btn-primary" onClick={handlePublished}>
              published
            </button>
          </span>
          <button className="btn btn-primary" onClick={handleEdit}>
            Sửa
          </button>
          <span style={{ padding: 2 }}>
            <Link to={"/tutorials"} className="btn btn-primary">
              Hủy
            </Link>
          </span>
        </div>
      ) : (
        <div>
          <h1>Empty</h1>
        </div>
      )}
    </div>
  );
}
export default EditTutorial;
