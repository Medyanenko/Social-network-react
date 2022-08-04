import React from "react";
import * as Yup from "yup";

export const validationSchemaPostForm = Yup.object().shape( {
    newPostText: Yup.string()
       .min( 1, "Must be longer than 1 characters" )
       .max( 30, "Must be shorter than 30 characters" )
       .required( "add text, please" )
 } );

export const validationSchemaMessageForm = Yup.object().shape( {
    newMessageText: Yup.string()
       .min( 1, "Must be longer than 1 characters" )
       .max( 50, "Must be shorter than 50 characters" )
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
       .min( 2, "Must be longer than 2 characters" )
       .max( 5, "Must be shorter than 5 characters" )
       .required( "Required 2" )
 } );