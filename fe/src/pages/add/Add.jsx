import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
  return (
    <div>
      <Formik
       initialValues={{ name: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           price: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
 
       })}
       onSubmit={(values) => {
        fetch("http://localhost:3000", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
       }}
     >
       <Form>
         <label htmlFor="name">name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
        
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add
