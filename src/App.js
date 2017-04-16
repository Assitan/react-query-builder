import React, { Component } from 'react';
import { Container, Grid, Segment, Header } from 'semantic-ui-react';
import { QueryBuilderContainer, ResultContainer } from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid className="App">
        <br />
        <Header as="h2" icon>
          Query builder in ReactJS
        </Header>
        <p>Search <a href="https://fr.wikipedia.org/wiki/Liste_des_communes_de_la_Martinique" target="_blank">
          Main cities of Martinique</a>
        </p>
        <Grid columns="equal" divided>
         <Grid.Row>
           <Grid.Column width={8}>
             <Segment>
               <QueryBuilderContainer />
             </Segment>
           </Grid.Column>
           <Grid.Column width={8}>
             <Segment>
                <ResultContainer />
             </Segment>
           </Grid.Column>
         </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
