import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TutorialService from "./TutorialService";

function Home() {
  const [tutorials, setTutorias] = useState([]);

  //delete tutorial by id
  const handleDelete = (id) => {
    TutorialService.remove(id)
      .then((res) => {
        getAllTutorials();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //load data
  useEffect(() => {
    getAllTutorials();
  }, []);

  const getAllTutorials = () => {
    TutorialService.getAll()
      .then((res) => {
        setTutorias(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h1>List tutorials</h1>
      <Link to={"/tutorials/Add"} className="btn btn-primary">
        Thêm
      </Link>
      {tutorials ? (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">description</th>
              <th scope="col">published</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial.id}>
                <th scope="row">{tutorial.id}</th>
                <td>{tutorial.title}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.published ? "1" : "0"}</td>
                <td>
                  <span style={{ padding: 2 }}>
                    <button
                      onClick={() => handleDelete(tutorial.id)}
                      className="btn btn-primary"
                    >
                      Xóa
                    </button>
                  </span>
                  {/* {console.log(tutorial)} */}
                  <Link
                    to={"/tutorials/Edit/" + tutorial.id}
                    className="btn btn-primary"
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h1>List Empty</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
