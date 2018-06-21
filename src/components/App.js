import React from 'react';
import { Container } from 'semantic-ui-react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Login from '../containers/Login';
import Logout from '../containers/Logout';


const App = () => (
    <Container>
      <Login>
	<AddTodo />
      </Login>
      <VisibleTodoList />
      <Footer />
      <Logout />
    </Container>
);

export default App;
