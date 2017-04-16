import React, { Component } from 'react';
import { QueryBuilder } from '../components';

export default class QueryBuilderContainer extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = {
        rules: [],
        rule: {},
        result: {}
    };

    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
  }

  submit (event) {
    // const rule = Object.assign({}, {
    //   'rule': this.state.rule
    // });
    //
    // console.log(rule);

    const rule = {
      "name": {
        "$eq": "La Trinité"
      }
    }

    event.preventDefault();
    // We create the newQuiz object to be posted to the server
    fetch('http://localhost:8080/simple-query', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(rule)
    })
    .then(response => {
      return response.json();
    }).then(result => {
      console.log(result);
      this.setState({ result: result });
    });
  }

  // removeTodo = (list, id) => {
  //   const removeIndex = list.findIndex(item => item.id === id)
  //   return [
  //     ...list.slice(0, removeIndex), //remove from the start
  //     ...list.slice(removeIndex+1)
  //   ]
  // }

  getQuery (event) {
    event.preventDefault();
// db.links.find({name: {$eq: 'La Trinité'}})
    // const rule = {
    //   document.getElementById('name').value: {
    //     document.getElementById('email').value: document.getElementById('email').value
    //   }
    // }

    const rule = {
      "name": {
        "$eq": "La Trinité"
      }
    }

    this.setState({ rule });
  }

  deleteRule (event, id) {
    event.preventDefault();
    // const updatedRules = removeTodo(this.state.rules, id)
    // this.setState({
    //   rules: updatedRules
    // })
  }

  render () {
    return <QueryBuilder submit={this.submit} deleteRule={this.deleteRule} getQuery={this.getQuery} />
  }
}
