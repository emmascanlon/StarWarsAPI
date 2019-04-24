import React from "react"
import {Table, Header} from "semantic-ui-react"
import axios from "axios"
import PeopleRow from "./PeopleRow"

class People extends React.Component {
  state = {people: []}

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      this.setState({people: res.data.results})
  })
  }


  render () {
  return (
    <>

    <Header style={{textAlign: "center"}}> Star Wars </Header>


    <Table style={{width: "50%", margin: "0 auto"}}>
    <Table.Header>
    <Table.HeaderCell>Name</Table.HeaderCell>
    <Table.HeaderCell>Planet</Table.HeaderCell>
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