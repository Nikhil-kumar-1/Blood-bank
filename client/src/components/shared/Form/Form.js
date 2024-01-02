import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({submitBtn, formTitle}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <InputType
          labelText={"email"}
          labelFor={"forEmail"}
          inputType={"email"}
          name={"email"}
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />

        <InputType
          labelText={"Password"}
          labelFor={"forEPassword"}
          inputType={"password"}
          name={"password"}
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex">
            <button className="btn btn-primary" type="submit">
                {submitBtn}
            </button>
        </div>
      </form>
    </>
  );
};

export default Form;
