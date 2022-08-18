import * as Yup from "yup";

export const validationSchemaPostForm = Yup.object().shape( {
    newPostText: Yup.string()
       .min( 2, "Must be longer than ${min} characters" )
       .max( 10, "Must be shorter than ${max} characters" )
       .required( "add text, please" )
 } );

export const validationSchemaMessageForm = Yup.object().shape( {
    newMessageText: Yup.string()
       .min( 1, "Must be longer than ${min} characters" )
       .max( 50, "Must be shorter than ${max} characters" )
       .required( "add message, please" )
 } );


export const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
       errors.email = 'Required 1';
    } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
 };
 
export const validationSchemaLoginForm = Yup.object().shape( {
 
    password: Yup.string()
       .min( 2, "Must be longer than ${min} characters" )
       .max( 15, "Must be shorter than ${max} characters" )
       .required( "Required 2" )
 } );

 export const validationSchemaProfilForm = Yup.object().shape({

   fullName: Yup.string()
      .min(2, 'Must be longer than 2 characters !')
      .max(25, 'Must be shorter than 25 characters !')
      .required('Required !'),

   lookingForAJobDescription: Yup.string()
      .min(2, 'Must be longer than 2 characters !')
      .max(50, 'Must be shorter than 50 characters !')
      .required('Required !'),

   aboutMe: Yup.string()
      .min(2, 'Must be longer than 2 characters !')
      .max(50, 'Must be shorter than 50 characters !')
      .required('Required !')

})