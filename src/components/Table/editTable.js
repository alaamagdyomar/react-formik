import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space, Input, Button, Modal } from "antd";
import InputField from "./inputField";
import { values } from "ramda";
// import { items } from "./data";

const EditTable = (props) => {
  const { field } = props;
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      id: "0",
      name: "Tea",
      location: {
        cairo: { price: 125 },
        alex: { price: 622 },
        sharm: { price: 514 },
        herghada: { price: 888 },
      },
    },
    {
      id: "1",
      name: "Nescafe",
      location: {
        cairo: { price: 225 },
        alex: { price: 541 },
        sharm: { price: 614 },
        herghada: { price: 888 },
      },
    },
    {
      id: "2",
      name: "Coffe",
      location: {
        cairo: { price: 215 },
        alex: { price: 684 },
        sharm: { price: 557 },
        herghada: { price: 872 },
      },
    },
    {
      id: "3",
      name: "HotChocolate",
      location: {
        cairo: { price: 214 },
        alex: { price: 862 },
        sharm: { price: 996 },
        herghada: { price: 856 },
      },
    },
    {
      id: "4",
      name: "Mango",
      location: {
        cairo: { price: 200 },
        alex: { price: 400 },
        sharm: { price: 600 },
        herghada: { price: 984 },
      },
    },
    {
      id: "5",
      name: "Lemon",
      location: {
        cairo: { price: 255 },
        alex: { price: 336 },
        sharm: { price: 554 },
        herghada: { price: 854 },
      },
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "items",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Cairo's price",
      dataIndex: "location",
      render: (d, row) => {
        const { location } = row;
        return location ? (
          <InputField value={field.value} placeholder={location.cairo.price} />
        ) : (
          <Input value={field.value} placeholder={"enter price"} />
        );
      },
    },
    {
      key: "3",
      title: "Alexandria's Price",
      dataIndex: "egyptPrice",
      render: (d, row) => {
        const { location } = row;
        return location ? (
          <InputField value={field.value} placeholder={location.alex.price} />
        ) : (
          <InputField value={field.value} placeholder={"enter price"} />
        );
      },
    },
    {
      key: "4",
      title: "Sharm 's Price",
      dataIndex: "ksaPrice",
      render: (d, row) => {
        const { location } = row;
        return location ? (
          <InputField value={field.value} placeholder={location.sharm.price} />
        ) : (
          <InputField value={field.value} placeholder={"enter price"} />
        );
      },
    },
    {
      key: "5",
      title: "Dubai 's Price",
      dataIndex: "dubaiPrice",
      render: (d, row) => {
        const { location } = row;
        return location ? (
          <InputField
            value={field.value}
            placeholder={location.herghada.price}
          />
        ) : (
          <InputField value={field.value} placeholder={"enter price"} />
        );
      },
    },
  ];

  // handle add
  const onAddNewRecord = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newRecord = {
      id: randomNumber,
      name: "Joe Black" + randomNumber,
      location: {} + randomNumber,
    };
    setDataSource((pre) => {
      let newData = [...pre, newRecord];
      return newData;
    });
    props.field.onChange({
      target: { name: field.name, value: dataSource },
    });
  };
  // handle delete
  const deleteRecord = (record) => {
    Modal.confirm({
      title: "sure to delete this record",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((pre) => pre.id !== record.id);
        });
      },
    });
  };

  // handle edit
  const onEditItem = (record) => {
    setIsEditing(true);
    setEditingItem({ ...record });
  };

  // handleReset
  const resetEditing = () => {
    setIsEditing(false);
    setEditingItem(null);
  };

  const formikSubmit = ({ dataSource }) => {
    console.log("dataSource =>", dataSource);
    console.log(
      field.onChange({
        target: { name: field.name, value: dataSource },
      })
    );
  };
  return (
    <>
      <Button onClick={onAddNewRecord}>Add new</Button>
      <Table columns={columns} dataSource={dataSource} />
      <Button onClick={formikSubmit}>Submit to formikkkk</Button>
    </>
  );
};

export default EditTable;
