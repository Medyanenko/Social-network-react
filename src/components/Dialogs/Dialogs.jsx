import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Formik, Form, Field} from "formik";

const Dialogs = (props) => {
  let state = props.dialogsPage;
 
  let dialogsElements = state.dialogs.map((d, id) => <DialogItem key={id} name={d.name} avatar={d.avatar} id={d.id} />);
  let messagesElements = state.messages.map((m, id) => <Message key={id} message={m.message} />);
  
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
           {messagesElements}
        </div>
        <div>
        <AddMessageForm addMessage={props.addMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  let addNewMessage = (values) => {    
     props.addMessage( values );    
  }

  return (
     <Formik
        initialValues={{
          newMessageText: ""
        }}
        onSubmit={(values, {resetForm}) => {
           addNewMessage( values.newMessageText );
           resetForm( {values: ''} );
        }
        }
     >
        {() => (
           <Form>
              <div>
                 <Field
                    name={'newMessageText'}
                    as={'textarea'}
                    placeholder={'enter text'}
                 />
              </div>

              <button type={'submit'}>Send2</button>
           </Form>
        )}
     </Formik>
  )
}
export default Dialogs;
