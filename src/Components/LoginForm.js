import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const chaneEmailVal = (e) => {
    setEmail(e.target.value);
  };

  const changePassVal = (e) => {
    setPassword(e.target.value);
  };

  const onFormSumit = (e) => {
    if (email && password) {
      e.preventDefault();
      let newData = {
        id: new Date().getTime().toString(),
        email,
        password,
      };

      setData([...data, newData]);
      console.log(newData);

      setEmail("");
      setPassword("");
    } else {
      alert("Please fill all the data!");
    }
  };

  return (
    <>
      <form action="" onSubmit={onFormSumit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={chaneEmailVal}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={changePassVal}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        {data.map((ele) => {
          const { id, email, password } = ele;
          return (
            <div key={id}>
              <p>email: {email}</p>
              <p>pass: {password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LoginForm;
