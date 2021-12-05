import React from "react";
import { Formik, Field, Form } from "formik";
import EditTable from "./editTable";
import { Button } from "antd";

const RenderTable = () => {
  const initialValues = {
    table: {},
  };
  const btnstyle = { margin: "8px 0", backgroundColor: "blue", color: "white" };

  const onSubmit = (values, props) => {
    console.log("table =,", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit, isSubmitting }) => (
        <Form>
          <Field
            component={EditTable}
            name="table.item"
            onSubmit={handleSubmit}
            hasFeedback
          />
          <br />
          <Button
            type="submit"
            style={btnstyle}
            onClick={handleSubmit}
            disabled={isSubmitting}
            color="primary"
          >
            {isSubmitting ? "Loading" : "submit to formik "}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RenderTable;
