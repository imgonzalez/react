import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Material
import CssBaseline from '@material-ui/core/CssBaseline';

// Estilos
import './index.css';

// React.Componentes
import Header from './components/common/header/Header';
import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario';


// The CODE!
const Root = () => {
    return (
        <div>
            <CssBaseline />
            <Header />
            <div className="contenedor">
                <Liga />
                <Calendario />
            </div>
        </div>
    )
}



render(<Root />, document.querySelector('#root'));

registerServiceWorker();