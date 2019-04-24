import React from "react"
import {Table} from "semantic-ui-react"
import axios from "axios"
import PeopleRow from "./PeopleRow"

class People extends React.Component {
  state = {people: []}

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      debugger
      this.setState({people: res.data.results})
  })
  }


  render () {
  return (
    <>
    <Table>
    <Table.Header>
    <Table.HeaderCell>Name</Table.HeaderCell>
    <Table.HeaderCell>Mass</Table.HeaderCell>
    <Table.HeaderCell>Homeworld</Table.HeaderCell>
    </Table.Header>
    <Table.Body>
    {this.state.people.map( person =>
    <PeopleRow history={this.props.history} person={person} /> )}
    </Table.Body>
    </Table>
    </>
  )

  }
}

export default People