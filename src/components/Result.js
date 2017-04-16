import React, { PureComponent } from 'react';
import { Icon, Header } from 'semantic-ui-react';

export default class Result extends PureComponent {
  render () {
    return (
      <Header as="h2" icon disabled>
        <Icon name="settings" />
        RESPONSE
      </Header>
    )
  }
}
