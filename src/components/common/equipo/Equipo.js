import React from 'react';

// Estilos
import './Equipo.css';

class Equipo extends React.Component {
  render() {
    return (
      <div>
        <img className="team-logo" src={this.props.logo} alt={this.props.nombre} />
      </div>
    );
  }
}

export default Equipo;
