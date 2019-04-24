import React from 'react';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from "axios";

class Planet extends React.Component {
  state = {planet: {}}

componentDidMount() {
  const {id} = this.props.match.params
  axios.get(`https://swapi.co/api/planets/${id}/`).then(res => {
    this.setState({planet: res.data})
})
}

  render() {
    const {planet} = this.state
    return (
      <>
      <h1 style={{textAlign: "center"}}> {planet.name} </h1>
      <br />
      <div style={{textAlign: "center"}}>
<Table celled compact style={{ width:"50%", margin: "0 auto"}}>
  <Table.Row>
    <Table.Cell>
    Climate
    </Table.Cell>
    <Table.Cell>
      {planet.climate}
    </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Diameter</Table.Cell>
      <Table.Cell>{planet.diameter} </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Gravity</Table.Cell>
      <Table.Cell>{planet.gravity}</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Orbital Period</Table.Cell>
      <Table.Cell>{planet.orbital_period}</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Population</Table.Cell>
      <Table.Cell>{planet.population}</Table.Cell>
    </Table.Row>
    </Table>
    </div>
     
      <br />
<div style={{textAlign: "center"}} >
<Link to="/">
      <Button color="yellow">
        Home
      </Button>
      </Link>
      </div>
      </>
    )
  }
}

export default Planet 