import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   first: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Firstname must not be blank'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Lastname must not be blank'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 export const ValidationSchema = () => (
  
   <div>
     <h1>Formik-Validation</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
     >
       {({ errors, touched,setFieldValue }) => (
         <Form>
           <label htmlFor="firstname">Email</label>
           <Field name="first" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
      <div>
            <label htmlFor="lastname">Lastname</label>
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
      </div>
           <label htmlFor="email">Email</label>
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
         
           <button type="reset" onClick={() => setFieldValue('firstname', '')}>
              Reset 
           </button>
        </Form>
       )}
     </Formik>
   </div>
 );

  export default ValidationSchema;

