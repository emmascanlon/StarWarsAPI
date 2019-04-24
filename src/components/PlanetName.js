import React from "react"
import {Table} from "semantic-ui-react"
import axios from "axios"
import {Link} from "react-router-dom"



class PlanetName extends React.Component {
state = {planet: {}}

componentDidMount() {
  const {planet} = this.props
  axios.get(planet).then(res => {
    this.setState({planet: res.data})
  })}
  render() {
    const {id} = this.props
    return (
      <>
      <div onClick={() => this.props.history.push(`/planets/${id}`)}>
      <div style={{color: "blue", cursor: "pointer"}}>
      {this.state.planet.name} 
      </div>
      </div>
      
      </>
    )}
}

export default PlanetName