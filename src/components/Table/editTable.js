import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space, Input, Button, Modal } from "antd";
import { Field } from "formik";
import SelectSizesDemo from "./select";
// import { items } from "./data";

const EditTable = (props) => {
  useEffect(() => {
    const newData = [...tableData];
    setTableData(newData);
  }, []);

  const locations = [];

  const { field } = props;
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      id: "1",
      name: "Tea",
    },
    {
      id: "2",
      name: "Nescafe",
    },
    {
      id: "3",
      name: "Coffe",
    },
    {
      id: "4",
      name: "HotChocolate",
    },
    {
      id: "5",
      name: "Mango",
    },
    {
      id: "6",
      name: "Lemon",
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
      // dataIndex: "tea.location.cairo.price",
      render: (row) => {
        return <Field name={`items.${row.name}.location.cairo.price`} />;
      },
    },
    {
      key: "3",
      title: "Alexandria's Price",
      // dataIndex: "egyptPrice",
      render: (row) => {
        return <Field name={`items.${row.name}.location.alex.price`} />;
      },
    },
    {
      key: "4",
      title: "Sharm 's Price",
      // dataIndex: "ksaPrice",
      render: (row) => {
        return <Field name={`items.${row.name}.location.sharm.price`} />;
      },
    },
    {
      key: "5",
      title: "Herghada 's Price",
      // dataIndex: "herghada",
      render: (row) => {
        return <Field name={`items.${row.name}.location.herghada.price`} />;
      },
    },
    {
      key: "6",
      title: "Select",
      render: (row) => {
        const { handleSubmit } = props;
        return (
          <>
            <Field
              component={SelectSizesDemo}
              onSubmit={handleSubmit}
              name={`items.${row.name}.options`}
            />
            <br />
            <Field name={`items.${row.name}.active`} type="checkbox" />
          </>
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

  // handle input change
  const [tableData, setTableData] = useState(dataSource);
  // const inputChange = (key, index) => (e) => {
  //   console.log("key =", key);
  //   console.log("index =", index);
  //   const newData = [...tableData];
  //   console.log("newData =>", newData);

  //   newData[index.id][key] = e.target.value;
  //   setTableData(newData);
  // };

  const formikSubmit = ({ tableData }) => {
    field.onChange({
      target: { name: field.name, value: tableData },
    });
  };
  return (
    <>
      <Button onClick={onAddNewRecord}>Add new</Button>
      <Table columns={columns} dataSource={dataSource} />
      {/* <Button onClick={formikSubmit}>From Table to Formikkkk</Button> */}
    </>
  );
};

export default EditTable;
