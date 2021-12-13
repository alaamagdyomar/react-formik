import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Button, Modal } from "antd";
import { Field } from "formik";
import SelectSizesDemo from "./select";

const EditTable = (props) => {
  useEffect(() => {
    const newData = [...tableData];
    setTableData(newData);
  }, []);

  const { field } = props;
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [locate, setLocate] = useState([
    {
      id: "1",
      location: "Cairo's Price",
      type: "input",
    },
    {
      id: "2",
      location: "Alex's Price",
      type: "input",
    },
    {
      id: "3",
      location: "sharm's Price",
      type: "input",
    },
    {
      id: "4",
      location: "Herghada's Price",
      type: "input",
    },
    {
      id: "5",
      location: "Options",
      type: "select",
    },
  ]);
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
    ...locate.map((loc) => ({
      key: loc.id,
      title: loc.location,
      render: (row) => {
        if (loc.type === "input") {
          return <Field name={`items.${row.name}.${loc.location}`} />;
        }
        if (loc.type === "select") {
          return (
            <>
              <Field
                component={SelectSizesDemo}
                name={`items.${row.name}.${loc.location}.options`}
              />
              <br />
              <Field
                name={`items.${row.name}.${loc.location}.active`}
                type="checkbox"
              />
            </>
          );
        }
      },
    })),
  ];

  // handle add
  const onAddNewRecord = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newRecord = {
      id: randomNumber,
      name: "Joe Black" + randomNumber,
    };
    console.log("newRecord =", newRecord);
    setDataSource((pre) => {
      let newData = [...pre, newRecord];
      return newData;
    });
    // props.field.onChange({
    //   target: { name: field.name, value: dataSource },
    // });
    return dataSource;
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

  const formikSubmit = ({ tableData }) => {
    field.onChange({
      target: { name: field.name, value: tableData },
    });
  };

  return (
    <>
      <Button onClick={onAddNewRecord}>Add new</Button>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default EditTable;
