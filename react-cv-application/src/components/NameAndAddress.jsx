import { useState } from "react";
import "../styles/styles.css";

const NameAndAddress = ({smallHeading}) => {
  const [name, setName] = useState("");
  const [save, setSave] = useState(false);

  const cvName = (e) => {
    setName(e.target.value);
  };

  const saveAndEdit = () => {
    setSave(!save);
  };

  return (
    <div>
      <h5>{smallHeading}</h5>
      <div className="nameAndAddress_subsection">
        <div>
          {save ? <textarea type="text" onChange={cvName} /> : <p>{name}</p>}
        </div>
        <button onClick={saveAndEdit}>{save ? "Submit" : "Edit"}</button>
      </div>
    </div>
  );
};

export default NameAndAddress;
