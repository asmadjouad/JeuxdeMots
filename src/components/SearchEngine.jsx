import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    word: '',
    relation:'Relation',
   // isExact:true,
    value: "exact",
    relations:[]
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const relations = res.data;
        this.setState({ relations });
      })
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
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
     relation: this.state.relation,
    value: this.state.value
      
     };
    // fetch('./jsonData/response.json')
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log('data:', data);
    // })
     axios.post(`https://jsonplaceholder.typicode.com/users`, { reqSearchArgrs })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
  }

  render() {
    const { value } = this.state;
    return (
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          left: 400,
          top: 10,
        }}
      >
        <form className="form-inline my-2 my-lg-0 f1"  onSubmit={this.handleSubmit}>
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
                    <Dropdown.Item  onClick={this.handleSelect} >{relation.name}
                    </Dropdown.Item>) }
                </Dropdown.Menu>
             </Dropdown>

          <div
            style={{
              position: "relative",
              left: 4,
            }}
          >
            <button className="btn btn-dark my-2 my-sm-0" type="submit">
              Rechercher
            </button>
          </div>
        </form>
        <div
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            left: 100,
            top: 10,
          }}
        >
          <label>
            Exact
            <input
              type="radio"
              value="exact"
              onChange={this.onChange}
              checked={value === "exact"}
              style={{
                position: "relative",
                margin: 10,
              }}
            ></input>
          </label>
          <label>
            Approximative
            <input
              type="radio"
              value="approximative"
              onChange={this.onChange}
              checked={value === "approximative"}
              style={{
                position: "relative",
                margin: 10,
              }}
            ></input>
          </label>
        </div>
      </div>
    );
  }
}
