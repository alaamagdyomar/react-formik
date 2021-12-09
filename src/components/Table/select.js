import React from "react";
import { Select, Radio } from "antd";
import { Field } from "formik";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

// function handleChange(value) {
//   console.log(`Selected: ${value}`);
// }

const SelectSizesDemo = (props) => {
  const [size, setSize] = React.useState("default");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleChange = (e) => {
    props.field.onChange({
      target: { name: props.field.name, value: e },
    });
  };

  return (
    <Select
      onChange={handleChange}
      size={size}
      defaultValue="a1"
      style={{ width: 200 }}
    >
      {children}
    </Select>
  );
};

export default SelectSizesDemo;
