import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout.js";
import axios from "axios";
import Drivers from "./Drivers.js";

const Dashboard = () => {
  const [year, setyear] = useState([]);
  const [selectedValue, setselectedValue] = useState("");

  const getyears = async (req, res) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/years`);
      //console.log(data);
      setyear(data);
      // if(data){
      //   setyear(data)
      // }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getyears();
  }, []);

  const handleValueChange = (event) => {
    setselectedValue(event.target.value);
  };

  return (
    <Layout>
      <div className="container mt-4 p-4">
        <h1 className="text-center p-2">F1 Drivers</h1>
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedValue}
          onChange={handleValueChange}
        >
          <option>--choose an option</option>
          {year.map((c) => (
            <option value={c.year} key={c.year}>
              {c.year}
            </option>
          ))}
        </select>

        {selectedValue && <Drivers year={selectedValue} />}
      </div>
    </Layout>
  );
};

export default Dashboard;
