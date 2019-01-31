import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navBar.js';
import './navBar.js';
import {todos} from './todos.json';
import TodosForm from './TodosForm.js';
import './TodosForm.js';

class App extends Component {

       constructor(){
         super();
         this.state = {
            todos
         }
         this.handleAddToDo = this.handleAddToDo.bind(this);
       }


        handleAddToDo(todo){

           this.setState({

              todos: [...this.state.todos, todo]

           })

        }
  render() {

    const todos =    this.state.todos.map((todo, i)=>{

              return (



               <div className="col-md-4">
                 <div className ="card mt-4">
                   <div className ="card-header">

                     <h3>{todo.title}</h3>
                     <span className="badge badge-pill badge-danger ml-2"> Priority :   {todo.priority}</span>
                   </div>
                   <div className="card-body">
                     <p>{todo.description}</p>
                     <p> <mark>{todo.responsible}</mark></p>
                   </div>

                 </div>

               </div>


              )

         });
    return (
      <div className="App">

        <NavBar  titulo="Tasks" tareas = {todos.length} />

        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">

          <div className="container">
            <div className="row mt-4 ml-1">
              <TodosForm onAddToDO ={this.handleAddToDo} />
            </div>
          </div>
          <div className="container">
            <div className="row mt-4 mb-4">

              {todos}

            </div>


          </div>

        </div>






      </div>
    );
  }
}

export default App;
