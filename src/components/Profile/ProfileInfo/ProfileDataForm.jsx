import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./ProfileInfo.module.css";
import { validationSchemaProfilForm } from "./../../../utils/validatorForms"

const ProfileDataForm = ({ profile, handleSubmit, goToEditMode }) => {
  return (
  
    <Formik
      initialValues={profile}
      validationSchema={validationSchemaProfilForm}
      onSubmit={(values) => {
           handleSubmit(values, goToEditMode);
      }}
    >
      {() => (
      
        <Form>             
           
            <div>
              <button type={"submit"}>save</button>
            </div>
          

          <div>
            <Field name={"fullName"} type={"text"} placeholder={"fullName"} />
          </div>
          <ErrorMessage name="fullName" component="div" className={s.errors} />
          <div>
            <Field
              name={"lookingForAJob"}
              type={"checkbox"}
              id="lookingForAJob"
            />
            <label htmlFor={"lookingForAJob"}>
              <b> Looking for a job</b>{" "}
            </label>
          </div>
          
          <div>
            <Field
              name={"lookingForAJobDescription"}
              as={"textarea"}
              placeholder={"My professional skills"}
            />
          </div>
          <ErrorMessage name="lookingForAJobDescription" component="div" className={s.errors} />
          <div>
            <Field name={"aboutMe"} as={"textarea"} placeholder={"About me"} />
          </div>
          <ErrorMessage name="aboutMe" component="div" className={s.errors} />
          <div className={s.contacts}>
            <b>Contacts: </b>
            {Object.keys(profile.contacts).map((key) => {
              return (
                <div key = {key} className={s.contact}>
                  <div>
                    <b>{key}:</b>
                  </div>
                  <div>
                    <Field
                      name={`contacts.${key}`}
                      type={"text"}
                      id={key}
                      placeholder={key}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
