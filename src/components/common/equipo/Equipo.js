import React from 'react';

// Estilos
import './Equipo.css';

import Icon from '@material-ui/core/Icon'; 

class Equipo extends React.Component {

  state = {
    fav: { value: 'star' }
  }

  setFav() {
    console.log('Favorito :D');
  }

  render() {
    return (
      <div>
        <img className="team-logo" src={this.props.logo} alt={this.props.nombre} />
        <Icon onClick={ this.setFav } className={this.state.fav.value}>star_rate</Icon> 
      </div>
    );
  }
}

export default Equipo;
