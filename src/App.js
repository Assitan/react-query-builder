import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="query-builder">
          <form name="user-form" action="" onSubmit={(e) => this.props.submit(e)} noValidate>
            {/* Conditions */}
            <div className="cond">
              <button type="button" className="btn center-block btn-primary">AND</button>
              <button type="button" className="btn center-block btn-primary">OR</button>
            </div>

            {/* Add rules or group */}
            <div className="new">
              <button type="button" className="btn center-block btn-primary">+ Add rule</button>
              <button type="button" className="btn center-block btn-primary">+ Add group</button>
            </div>

            <div>
              {/* Fields */}
              <select className="form-control">
                <option>name</option>
                <option>age</option>
                <option>email</option>
              </select>

              {/* Operator */}
              <select className="form-control">
                <option>is</option>
                <option>equal</option>
                <option>not equal</option>
                <option>4</option>
                <option>5</option>
              </select>

              {/* Value */}
              <input className="form-control" type="text"></input>

              <button type="button" className="btn center-block text-danger">delete</button>

            </div>
            <button type="submit" className="btn center-block btn-submit">Apply</button>
          </form>
        </div>
        <div className="response">
          <pre></pre>
        </div>
      </div>
    );
  }
}

export default App;
