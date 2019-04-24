import React from "react"
import {Table} from "semantic-ui-react"
import PlanetName from "./PlanetName"


class PeopleRow extends React.Component{
state = {id: ""}

componentDidMount = () => {
let arr = this.props.person.homeworld.split("/")
arr.splice(-1)
let ID = arr.pop()
this.setState({id: ID})
}
  


  render() {
    const  {person} = this.props
    return (
      <Table.Row key={person.name}>
        <Table.Cell>
          
          {person.name}
      
        </Table.Cell>
        <Table.Cell>
          <PlanetName id={this.state.id} history={this.props.history} planet={person.homeworld}/>
        </Table.Cell>
      </Table.Row>
    )
  }
  }

  export default PeopleRow;
