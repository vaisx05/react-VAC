import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';


const Forms = () => (
  <div id='formbox'>
    <h1>Register Form</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
//       await new Promise((r) => setTimeout(r, 500));
//      alert(JSON.stringify(values, null, 2));
        alert('Form Submitted');
      }}
    >
      <Form>
        <label htmlFor="firstName">Enter your First Name </label>
        <Field id="firstName" name="firstName" placeholder="First Name" /><br /><br />

        <label htmlFor="lastName">Enter your Last Name </label>
        <Field id="lastName" name="lastName" placeholder="Last Name" /><br /><br />

        <label htmlFor="email">Enter your Email </label>
        <Field
          id="email"
          name="email"
          placeholder="vaishak@118.com"
          type="email"
        /><br /><br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Forms;