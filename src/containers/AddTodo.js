import React from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
	<div>
	  <Form
             onSubmit={e => {
		 e.preventDefault();
		 if (!input.value.trim()) {
		     return;
		 }
		 dispatch(addTodo(input.value));
		 input.value = '';
            }}
	    >
            <Form.Input ref={node => { input = node; }} />
              <Button type="submit">
		Add Todo
              </Button>
	  </Form>
	</div>
    );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
