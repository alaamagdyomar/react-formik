import React from "react";
import styled from "styled-components";

const Light = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid grey;
  display: inline-block;
  margin: 5px;
`;
const LightGroup = styled.div`
  width: ${(props) => props.size};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: #efefef;
`;
const TrafficLight = ({ name, value, setFieldValue }) => {
  const colors = ["red", "orange", "green"];
  const [current, setCurrent] = React.useState(0);
  const colorFor = (index) =>
    current === index ? colors[index] : "transparent";

  return (
    <LightGroup size="50px">
      <Light size="40px" color={colorFor(0)} onClick={() => setCurrent(0)} />
      <Light size="40px" color={colorFor(1)} onClick={() => setCurrent(1)} />
      <Light size="40px" color={colorFor(2)} onClick={() => setCurrent(2)} />
    </LightGroup>
  );
};

export default TrafficLight;
