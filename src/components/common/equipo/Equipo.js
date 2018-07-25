import React, { Component } from 'react';

// Estilos
import './Equipo.css';
import Icon  from '@material-ui/core/Icon';

class Equipo extends Component {
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
