import logo from "./logo.svg";
import "./App.css";
import Tree from "react-d3-tree";
import { useState } from "react";

const a = {
  "Python Basic": {
    _attributes: [
      { attribute_name: "Data Source", attribute_value: "Kaggle" },
      { attribute_name: "No. Of Validators", attribute_value: "7" },
      { attribute_name: "Python Language", attribute_value: "Yes" },
      { attribute_name: "Pep8 Score", attribute_value: "> 60%" },
      {
        attribute_name: "Average duration of projects",
        attribute_value: "> 2 months",
      },
    ],
    "SQL Basic": {
      "SciKit ": {
        PyTorch: {},
        Keras: {},
        _attributes: [
          { attribute_name: "Data Source", attribute_value: "Kaggle" },
          { attribute_name: "No. Of Validators", attribute_value: "6" },
          { attribute_name: "Python Language", attribute_value: "Yes" },
          { attribute_name: "Pep8 Score", attribute_value: "> 60%" },
          { attribute_name: "SciKit Learn Library", attribute_value: "Yes" },
          { attribute_name: "No. of projects", attribute_value: ">3" },
          {
            attribute_name: "Average duration of projects",
            attribute_value: "> 2 months",
          },
        ],
      },
      TensorFlow: {
        GCP: {},
        _attributes: [
          { attribute_name: "Data Source", attribute_value: "Kaggle" },
          { attribute_name: "No. Of Validators", attribute_value: "6" },
          { attribute_name: "SQL Language", attribute_value: "Yes" },
          { attribute_name: "SQL Code Quality", attribute_value: "Above Good" },
          { attribute_name: "SQL Basic Joins", attribute_value: "Yes" },
          { attribute_name: "No. of projects", attribute_value: ">4" },
          {
            attribute_name: "Average duration of projects",
            attribute_value: "> 2 months",
          },
        ],
      },
      _attributes: [
        { attribute_name: "Data Source", attribute_value: "Kaggle" },
        { attribute_name: "No. Of Validators", attribute_value: "6" },
        { attribute_name: "SQL Language", attribute_value: "Yes" },
        { attribute_name: "SQL Code Quality", attribute_value: "Above Good" },
        { attribute_name: "SQL Basic Joins", attribute_value: "Yes" },
        { attribute_name: "No. of projects", attribute_value: ">4" },
        {
          attribute_name: "Average duration of projects",
          attribute_value: "> 2 months",
        },
      ],
    },
    "R Basic": {
      "Shiny Library": {
        AWS: {},
        Azure: {},
        _attributes: [
          { attribute_name: "Data Source", attribute_value: "Kaggle" },
          { attribute_name: "No. Of Validators", attribute_value: "6" },
          { attribute_name: "SQL Language", attribute_value: "Yes" },
          { attribute_name: "SQL Code Quality", attribute_value: "Above Good" },
          { attribute_name: "SQL Basic Joins", attribute_value: "Yes" },
          { attribute_name: "No. of projects", attribute_value: ">4" },
          {
            attribute_name: "Average duration of projects",
            attribute_value: "> 2 months",
          },
        ],
      },
    },
  },
};

const returnGraphObject = (name, objj) => {
  const obb = Object.keys(objj).filter((k) => k !== "_attributes");
  if (obb.length <= 0) {
    return { name, _attributes: objj["_attributes"] };
  }
  return {
    name: name,
    _attributes: objj["_attributes"] || [],
    children: obb.map((key) => {
      return returnGraphObject(key, objj[key]);
    }),
    usl: { sadfasd: "d" },
  };
};
const kk = returnGraphObject("", a);

function App() {
  const [selectedObject, setSelectedObject] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
      className="App"
    >
      <Tree
        style={{ flex: "1" }}
        onNodeClick={(k) => setSelectedObject([...k.data._attributes])}
        collapsible={false}
        data={kk}
      />
      <div style={{ width: "800px", textAlign: "left" }}>
        <h1> Skill Detail:</h1>
        <br />
        {selectedObject.map(({ attribute_name, attribute_value }) => {
          return (
            <div style={{ fontSize: "20px", lineHeight: "40px" }}>
              <b>{attribute_name}</b> : {attribute_value}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
