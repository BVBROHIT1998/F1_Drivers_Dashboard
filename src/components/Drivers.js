import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Drivers = (year) => {
  const navigate = useNavigate();

  const [drivers, setdrivers] = useState([]);
  const [driver, setdriver] = useState("");

  const getdrivers = async (req, res) => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/drivers-year`,
        year
      );
      //console.log(data);
      setdrivers(data);

      // if(data){
      //   setyear(data)
      // }
      //console.log(drivers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdrivers();
  }, [year]);

  const handleName = (e) => {
    //console.log(e.name);
    navigate("/driver", { state: e.name });
  };

  const handleCountry = (e) => {
    //console.log(e.nationality);
    navigate("/country", { state: e.nationality });
  };

  const handleTeam = (e) => {
    //console.log(e.team);
    navigate("/team", { state: e.team });
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Year</th>
            <th scope="col">position</th>
            <th scope="col">Name</th>
            <th scope="col">Tag</th>
            <th scope="col">Nationality</th>
            <th scope="col">Team</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((c, id) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.year}</td>
              <td>{c.position}</td>
              <td
                onClick={() => {
                  handleName(c);
                }}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {c.name}
              </td>
              <td>{c.tag}</td>
              <td
                onClick={() => {
                  handleCountry(c);
                }}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {c.nationality}
              </td>
              <td
                onClick={() => {
                  handleTeam(c);
                }}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {c.team}
              </td>
              <td>{c.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;
