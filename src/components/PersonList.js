import React, { useState } from 'react';
import axios from 'axios';
import { Dropdown, Form } from 'react-bootstrap';
export default class PersonList extends React.Component {
  state = {
    word: '',
    relation:'Relation',
    isExact:true,
    relations:[]
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const relations = res.data;
        this.setState({ relations });
      })
  }
  handleChange = event => {
    this.setState({ word: event.target.value });
  }
  handleSelect = event => {
    const relation = event.target.innerHTML;
    this.setState({ relation })
  }


  handleSubmit = event => {
    event.preventDefault();

    const reqSearchArgrs = {
      word: this.state.word,
      relation: this.state.relation
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { reqSearchArgrs })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


   render() {
  
          
return (
        
<div className='container'>
<form className="form-inline my-2 my-lg-0 f1" onSubmit={this.handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Entrez le mot"
            onChange={this.handleChange}
          ></input>
          <Dropdown >
          <Dropdown.Toggle variant="primary" id="dropdown-basic" onSelect={this.handleSelect}>
              {this.state.relation}
            </Dropdown.Toggle>
            <Dropdown.Menu>
    {this.state.relations.map(relation => 
     <Dropdown.Item  onClick={this.handleSelect} >{relation.name}</Dropdown.Item>)
              }
           </Dropdown.Menu>
          </Dropdown>
          <button className="btn btn-dark my-2 my-sm-0" type="submit">
            Rechercher
          </button>
        </form>
    </div>  
    )
  }
}