import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  // TextField,
  // Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form } from "formik";
import { Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import {
  //AntDatePicker,
  AntInput,
  //AntSelect,
} from "../createAntd/createAntd.js";
import { validateEmail, isRequired } from "../validateFields/validateFields";

const Login = ({ handleChange, ...props }) => {
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#3f51b5" };
  const btnstyle = { margin: "8px 0", backgroundColor: "blue", color: "white" };
  const initialValues = {
    auth: {
      email: "",
      password: "",
    },
  };
  // handle onSubmit
  const onSubmit = (values, props) => {
    console.log("values =", values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1500);
  };

  // const handleSubmit = (values,this.props.) => {
  //   // console.log("values =", values);
  //   console.log({ });
  // };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({
            handleSubmit,
            // onChange,
            // submitCount,
            isSubmitting,
            values,
            // handleChange,
          }) => (
            <Form onSubmit={handleSubmit}>
              <label>E-mail</label>
              <Field
                component={AntInput}
                name="auth.email"
                // label="Email"
                validate={validateEmail}
                // submitCount={submitCount}
                // value={values.name}
                hasFeedback
              />
              <label>Password</label>
              <Field
                component={AntInput.password}
                name="auth.password"
                label="Password"
                type="password"
                validate={isRequired}
                // value={values.name}
                hasFeedback
              />
              <label>Remember me</label>
              <Field as={Checkbox} onSubmit={handleSubmit} name="remember" />
              <br />
              <Button
                type="submit"
                style={btnstyle}
                onClick={handleSubmit}
                disabled={isSubmitting}
                color="primary"
              >
                {isSubmitting ? "Loading" : "Sign In "}
              </Button>
            </Form>
          )}
        </Formik>

        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
