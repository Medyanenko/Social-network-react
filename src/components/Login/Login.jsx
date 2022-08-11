import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import { validateLoginForm, validationSchemaLoginForm } from "./../../utils/validatorForms"
import { connect } from 'react-redux/es/exports';
import {login} from './../../redux/auth-reducer';
import { Navigate } from 'react-router';
import s from './Login.module.css'


const Login = ({isAuth, login}) => {
   if(isAuth){
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
            onSubmit={(values, {setFieldValue}) => {
               login(values.email, values.password, values.rememberMe, setFieldValue)
            }}
         >
            {({ values }) => (
               <Form>
                  <div >
                     {values.general ? <span className={s.errors}>{values.general}</span>: null}
                  </div>
                  <div>
                     <Field
                        name={'email'}
                        type={'text'}
                        placeholder={'e-mail'} />
                  </div>
                  <ErrorMessage name="email" component="div" className={s.errors} />

                  <div>
                     <Field
                        name={'password'}
                        type={'password'}
                        placeholder={'password'} />
                  </div>
                  <ErrorMessage name="password" component="div" className={s.errors}/>

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