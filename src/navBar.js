import React, { Component } from 'react';






class NavBar extends Component{

       render(){
         return(


           <nav className="navbar navbar-dark bg-dark">

           <a href="" className = "text-white " >

         {this.props.titulo} <span className ="badge badge-pill badge-light ml-2">   {this.props.tareas}  </span>

           </a>

           </nav>








         );


       }

}

export default NavBar;
