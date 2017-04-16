import React, { PureComponent } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';

const fields = [
  { key: '1', text: 'name', value: 'name' },
  { key: '2', text: 'population', value: 'population' },
  { key: '3', text: 'website', value: 'website' },
  { key: '4', text: 'postcode', value: 'cp' },
  { key: '5', text: 'beaches', value: 'beaches' }
]

// $gt, $gte, $lt, $lte, $in, $nin, $all, $ne, $exists, $mod, $inc, $regex
// $or, $and

// const operator = [
//   {'$gt': 'greater'},
//   {'$gte': 'greater or equal'},
//   {'$lt': 'less'},
//   {'$lte': 'less or equal'},
//   {'$eq': 'equal'},
//   {'$ne': 'not equal'},
//   {'$in': 'in '},
//   {'$nin': 'not in'},
//   {'$regex': 'regex'}
// ]

const operators = [
  { key: '1', text: 'greater', value: '$gt' },
  { key: '2', text: 'greater or equal', value: '$gte'},
  { key: '3', text: 'less', value: '$lt' },
  { key: '4', text: 'less or equal', value: '$lte' },
  { key: '5', text: 'equal', value: '$eq' },
  { key: '6', text: 'not equal', value: '$ne' },
  { key: '7', text: 'in', value: '$in' },
  { key: '8', text: 'not in', value: '$nin' },
  { key: '9', text: 'regex', value: '$regex' }
]

export default class QueryBuilder extends PureComponent {
  render () {
    return (
      <Form size="tiny" key="tiny" onSubmit={(e) => this.props.submit(e)} noValidate>
        {/* Conditions */}
        <Button.Group className="mini left floated" color="blue">
          <Button>AND</Button>
          <Button>OR</Button>
        </Button.Group>

        {/* Add rules or group */}
        <Button.Group className="mini right floated" color="green">
          <Button><Icon name="plus" /> Add rule</Button>
          <Button><Icon name="plus circle" /> Add group</Button>
        </Button.Group>
         <br />
         <br />
         <br />
        <Form.Group widths="two">
          <Form.Select id="field" options={fields} placeholder="Field" />
          <Form.Select id="operator" options={operators} placeholder="Operator" />
          <Form.Input id="value" placeholder="Value" />
          <Icon name="delete" color="red" size="big" />
        </Form.Group>

        <Button className="mini" color="black" type="submit">Apply</Button>
      </Form>
    )
  }
}
