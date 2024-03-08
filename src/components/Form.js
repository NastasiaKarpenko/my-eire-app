import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    journey: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phone: Yup.number("Must be a number")
      .positive("Can't contain -")
      .required("Required"),
    email: Yup.string("Must be a string").required("Required"),
    journey: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => setIsSubmitted(true)
  });

  const getFormikValidationErrorHandler = (formik) => (name) =>
    formik.touched[name] && formik.errors[name] ? (
      <div className="formError">
        <span className="">{formik.errors[name]}</span>
      </div>
    ) : null;

  const handleValidationError = getFormikValidationErrorHandler(formik);

  return (
    <div className="formWrapper">
      <h3 className="formNotice">
        {isSubmitted
          ? "Thank you for your request! We will contact you during next 24 hours"
          : "Fill the form down bellow"}
      </h3>
      <form onSubmit={formik.handleSubmit} className="formContainer">
        <label htmlFor="firstName" className="formLabel">First Name</label>
        <input
          name="firstName"
          placeholder="Jane"
        className="formInput"   
          {...formik.getFieldProps("firstName")}
        />
        {handleValidationError("firstName")}

        <label htmlFor="lastName" className="formLabel">Last Name</label>
        <input
          name="lastName"
          placeholder="Bradbery"
          className="formInput"
          {...formik.getFieldProps("lastName")}
        />
        {handleValidationError("lastName")}

        <label htmlFor="phone" className="formLabel">Phone Number</label>
        <input
          name="phone"
          placeholder="087*****09"
          className="formInput"
          {...formik.getFieldProps("phone")}
        />
        {handleValidationError("phone")}

        <label htmlFor="email" className="formLabel">Enter your email</label>
        <input
          name="email"
          placeholder="example@gmail.com"
          className="formInput"
          {...formik.getFieldProps("email")}
        />
        {handleValidationError("email")}

        <label htmlFor="journey" className="formLabel">What adventure you prefear to be first</label>
        <select
          name="journey"
          placeholder="Galway"
          className="formInput"
          {...formik.getFieldProps("journey")}
        >
          <option selected value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        {handleValidationError("journey")}

        <button type="submit" className="formBtn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
