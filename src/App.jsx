import React, { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log(username);
    setusername("");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          type="text"
          placeholder="userName"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
