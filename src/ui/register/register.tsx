import React, { useState } from "react";
import { RegisterContainer } from "./register.styles";
import { Request } from "../../utils/Request";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

type RegistrationFields = {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string;
}


const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = (values: RegistrationFields) => {
    setIsLoading(true);
    Request.post("auth/register", values)
      .then((response) => {
        setIsLoading(false);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RegisterContainer>
      <div className="container">
        <h1>Register</h1>
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobileNumber: '',
        }} 
        onSubmit={(values) => register(values)}>
            <Form>
            <div className="input-container">
                <Field name="firstName"  placeholder="Firstname" />
            </div>
            <div className="input-container">
                <Field name="lastName"  placeholder="Lastname" />
            </div>
            <div className="input-container">
                <Field name="email" placeholder="Email" />
            </div>
            <div className="input-container">
                <Field name="password" placeholder="Password" />
            </div>
            <div className="input-container">
                <Field name="mobileNumber"  placeholder="Mobile number" />
            </div>
            <div>
                <button className="button" type="submit">
                Register
                </button>
            </div>
            </Form>
        </Formik>
      </div>
    </RegisterContainer>
  );
};

export default Register;
