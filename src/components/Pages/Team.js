import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Team = () => {
  const [drivers, setdrivers] = useState([]);
  const location = useLocation();
  const team = location.state;
  console.log(team);

  const getDrivers = async (req, res) => {
    try {
      //console.log(name)
      const { data } = await axios.post(`http://localhost:5000/team`, {
        team,
      });
      console.log(data);
      setdrivers(data);
      // console.log(drivers)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrivers();
  }, []);
  return (
    <Layout>
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
                <td>{c.name}</td>
                <td>{c.tag}</td>
                <td>{c.nationality}</td>
                <td>{c.team}</td>
                <td>{c.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Team;
