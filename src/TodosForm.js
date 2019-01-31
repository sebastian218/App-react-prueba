import React, { Component } from 'react';

class TodosForm extends Component {

             constructor(){
                super();
                this.state = {

                    title : '',
                    responsible :'',
                    description :'',
                    priority : 'low',


                };
                this.handleInput = this.handleInput.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
             }


            handleInput(e){
                const {value, name } = e.target;
              this.setState({

                 [name]: value

              })

                console.log(this.state);

             }

             handleSubmit(e){
                 e.preventDefault();
                 this.props.onAddToDO(this.state);
             }

    render(){
       return(




               <div className="card">
                 <form className="card-body" onSubmit={this.handleSubmit}>

                   <div className="form-group">
                     <input

                       type="text"
                       name="title"
                       onChange = {this.handleInput}
                       className="form-control"
                       placeholder="Title"


                     />
                   </div>
                   <div className="form-group">
                     <input

                       type="text"
                       name="responsible"
                       className="form-control"
                       placeholder="Responsible"
                       onChange = {this.handleInput}

                     />
                   </div>
                   <div className="form-group">
                     <input

                       type="text"
                       name="description"
                       className="form-control"
                       placeholder="Description"
                       onChange = {this.handleInput}

                     />
                   </div>
                   <div className="form-group">

                     <select name="priority" className="form-control" onChange = {this.handleInput}>
                       <option value= "">hight</option>
                       <option value="">mediun</option>
                       <option value="" selected >low</option>

                     </select>

                   </div>
                   <div >

                     <button className ="badge badge-pill " type ="submit">

                       Save
                     </button>

                   </div>


                 </form>

               </div>










       );

    }

}

export default TodosForm  ;
