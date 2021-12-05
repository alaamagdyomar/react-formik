import React from "react";
import { Input } from "antd";

const InputField = (props) => (
  <>
    <Input value={props.value} placeholder={props.placeholder} />
  </>
);

export default InputField;
