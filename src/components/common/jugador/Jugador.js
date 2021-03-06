import React from 'react';

// Material
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Estilos
import './Jugador.css';

class Jugador extends React.Component {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardMedia
                        className="media"
                        image={this.props.foto}
                        title="Felinos"
                    />
                    <CardContent>
                        <Typography variant="subheading" component="h2" align="center" color="primary">
                            {this.props.nombre}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Jugador;
