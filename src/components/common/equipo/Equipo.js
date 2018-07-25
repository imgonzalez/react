import React, { Component } from 'react';

// Estilos
import './Equipo.css';
import Icon  from '@material-ui/core/Icon';

class Equipo extends Component {

  state = {
    fav: { value: 'star'}
  }


  render() {
    return (
      <div>
        <img className={"team-logo"} src={this.props.logo} alt={this.props.nombre} />
        <Icon>star_rate</Icon>
      </div>
    );
  }
}

export default Equipo;
