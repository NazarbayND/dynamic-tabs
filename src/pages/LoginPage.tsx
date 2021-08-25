import React from "react";
import { LogoIcon } from "../assets/icons";
import Form from "../components/Forms/Form";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().email(),
  password: yup.string().required(),
});
const Languages = [
  "English",
  "Spanish",
  "French",
  "Chinese",
  "Hindi",
  "Korean",
];
const Locations = [
  "Singapore",
  "United States",
  "Malaysia",
  "China",
  "Korea",
  "India",
];
const LoginPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login">
      <LogoIcon />

      <Form
        name="Login"
        schema={schema}
        onSubmit={handleSubmit}
        inputs={[
          {
            name: "username",
            placeholder: "Email",
          },
          {
            name: "password",
            placeholder: "Password",
            type: "password",
          },
        ]}
        checkbox={["Remember me"]}
        selects={[
          {
            name: "languages",
            options: Languages,
          },
          {
            name: "locations",
            options: Locations,
          },
        ]}
        mode="onSubmit"
      />
    </div>
  );
};

export default LoginPage;
