import React from 'react';
import {Table} from 'semantic-ui-react';
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

      Climate: {planet.climate}

      </>
    )
  }
}

export default Planet 