import { useState } from "react";

export const PageSpaTest3 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="sub-page page-spaTest3">
      <p>Display Name : {name}</p>
      <p>Display Age : {age}</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            value={age}
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
