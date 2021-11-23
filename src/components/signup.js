import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  // TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import { Formik, Field, Form } from "formik";
import { validateEmail, isRequired } from "../validateFields/validateFields";
import { Checkbox, Radio } from "antd";
import { AntInput } from "../createAntd/createAntd.js";
import "antd/dist/antd.css";

// import * as Yup from "yup";
const Signup = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
    height: "auto",
  };
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const btnstyle = { margin: "8px 0", backgroundColor: "blue", color: "white" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#3f51b5" };
  // const marginTop = { marginTop: 5 };
  const initialValues = {
    profiles: {
      name: "",
      phoneNumber: "",
      email: "",
      gender: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: "",
    },
  };
  // const validationSchema = Yup.object().shape({
  //   name: Yup.string().min(3, "It's too short").required("Required"),
  //   email: Yup.string().email("Enter valid email").required("Required"),
  //   gender: Yup.string()
  //     .oneOf(["male", "female"], "Required")
  //     .required("Required"),
  //   phoneNumber: Yup.number()
  //     .typeError("Enter valid Phone Number")
  //     .required("Required"),
  //   password: Yup.string()
  //     .min(8, "Password minimum length should be 8")
  //     .required("Required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password")], "Password not matched")
  //     .required("Required"),
  //   termsAndConditions: Yup.string().oneOf(
  //     ["true"],
  //     "Accept terms & conditions"
  //   ),
  // });

  const onSubmit = (values, props) => {
    console.log("profiles =,", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({
            handleSubmit,
            // onChange,
            // submitCount,
            isSubmitting,
            // values,
            // handleChange,
          }) => (
            <Form onSubmit={handleSubmit}>
              <label>Name</label>
              <Field
                component={AntInput}
                name="profiles.name"
                validate={isRequired}
                onSubmit={handleSubmit}
                hasFeedback
              />
              <label>PhoneNumber</label>
              <Field
                component={AntInput}
                name="profiles.phoneNumber"
                validate={isRequired}
                onSubmit={handleSubmit}
                hasFeedback
              />
              <label>E-mail</label>
              <Field
                component={AntInput}
                name="profiles.email"
                validate={validateEmail}
                onSubmit={handleSubmit}
                hasFeedback
              />
              <label>Gender</label>
              <br />
              <Field
                as={Radio.Group}
                name="profiles.gender"
                options={options}
                onSubmit={handleSubmit}
              />
              <br />
              <label> Password</label>
              <Field
                component={AntInput.password}
                name="profiles.password"
                type="password"
                onSubmit={handleSubmit}
                validate={isRequired}
                // value={values.name}
                hasFeedback
              />
              <br />
              <label>Confirm Password</label>
              <Field
                component={AntInput.password}
                name="profiles.confirmPassword"
                onSubmit={handleSubmit}
                type="password"
                validate={isRequired}
                hasFeedback
              />
              <br />
              <Field
                as={Checkbox}
                onSubmit={handleSubmit}
                name="profiles.termsAndConditions"
              />
              TermsAndConditions
              <br />
              <Button
                type="submit"
                style={btnstyle}
                onClick={handleSubmit}
                disabled={isSubmitting}
                color="primary"
              >
                {isSubmitting ? "Loading" : "Sign Up "}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
