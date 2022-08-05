import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import { validateLoginForm, validationSchemaLoginForm } from "./../../utils/validatorForms"
import { connect } from 'react-redux/es/exports';
import {login} from './../../redux/auth-reducer';
import { Navigate } from 'react-router';


const Login = (props) => {
   if(props.isAuth){
      return <Navigate to={"/profile"}/>
   }
   return (
      <div>
         <h2> Login</h2>
         <Formik
            initialValues={{
               email: "",
               password: "",
               rememberMe: false
            }}
            validate={validateLoginForm}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values, {setStatus}) => {
               props.login(values.email, values.password, values.rememberMe, setStatus)
            }}
         >
            {({ status }) => (
               <Form>
                  <div>
                 {status}
                 </div>
                  <div>
                 
                     <Field
                        name={'email'}
                        type={'text'}
                        placeholder={'e-mail'} />
                  </div>
                  <ErrorMessage name="email" component="div" />

                  <div>
                     <Field
                        name={'password'}
                        type={'password'}
                        placeholder={'password'} />
                  </div>
                  <ErrorMessage name="password" component="div" />

                  <div>
                     <Field
                        type={'checkbox'}
                        name={'rememberMe'}
                        id='rememberMe' />
                     <label htmlFor={'rememberMe'}> remember me </label>
                  </div>

                  <button type={'submit'}>Login</button>
               </Form>
            )}
         </Formik>
      </div>
   )
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);