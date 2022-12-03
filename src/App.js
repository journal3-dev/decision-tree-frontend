import logo from "./logo.svg";
import "./App.css";
import Tree from "react-d3-tree";
import { useState } from "react";

const a = {
  "Skill 1": {
    _attributes: [{ attribute_name: "Name1", attribute_value: "vaule2" }],
    "Skill 2": {
      "Skill 4": {
        _attributes: [{ attribute_name: "Name2", attribute_value: "vaule2" }],
      },
      _attributes: [{ attribute_name: "Name3", attribute_value: "vaule2" }],
    },
    "Skill 3": {
      "Skill 5 🐳": {
        _attributes: [{ attribute_name: "Name4", attribute_value: "vaule2" }],
      },
      "Skill 6": {
        _attributes: [{ attribute_name: "Name5", attribute_value: "vaule2" }],
      },
      "Skill 7": {
        "Skill 8": {
          "Skill 9": {
            _attributes: [
              { attribute_name: "Name6", attribute_value: "vaule2" },
            ],
          },
          "Skill 10": {
            _attributes: [
              { attribute_name: "Name7", attribute_value: "vaule2" },
            ],
          },
        },
      },
    },
  },
  "Skill 11": {
    "Skill 12": {},
    "Skill 13": {},
  },
};

const returnGraphObject = (name, objj) => {
  const obb = Object.keys(objj).filter((k) => k !== "_attributes");
  if (obb.length <= 0) {
    return { name };
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
const kk = returnGraphObject("Msas", a);

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
      <div style={{ width: "800px" }}>
        <h1> Skill Detail:</h1>
        <br />
        {selectedObject.map(({ attribute_name, attribute_value }) => {
          return (
            <div style={{ fontSize: "20px" }}>
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
