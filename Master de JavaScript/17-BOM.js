'use strict'

// Browser Object Model
// Este nos sirve para nosotros poder obtener toda la informacion desde el equipo del usuario que esta viendo nuestra paginaá puede estar en su computador,telefono,tablet,television y etc.
// Ejempló podemos tener cuanto de anchó y largó tiene la pantallá de la cual están viendó nuestrá paginá web.
// Podemos manipular acciones a tomar si queremos que se abra alguna pagina,ventana,un recuadro,obtener la url en la que esta ubicado.
// Practicamenté tenemós un acceso a toda la información del usuario si esta usandó algún navegador para ingresar a nuestra paginá.

const GET_BOM = () => {
    console.log(screen.width,screen.height,window.location);
};

const REDIRECT = (url) => window.location.href = url;

const ABRIR_VENTANA = (url) => window.open(`https://${url}`,"","width=400","height=300");

GET_BOM();
