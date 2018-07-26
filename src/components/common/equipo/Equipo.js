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

    //1. Respaldo del estado
    const fav = { ...this.state.fav };

    //2. Modificamos el valor en respaldo
    fav.value = fav.value === 'star' ? 'star_selected' : 'star';

    //3. Recargamos estado
    this.setState({ fav });

  }

  render() {
    return (
      <div>
        <img className="team-logo" src={this.props.logo} alt={this.props.nombre} />
        <Icon onClick={ this.setFav.bind( this ) } className={this.state.fav.value}>star_rate</Icon> 
      </div>
    );
  }
}

export default Equipo;
