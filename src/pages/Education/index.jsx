import React from "react";
import './Education.css';
import certificado from './assets/certificadoEjemplo.jpg'
import CustomModal from "../CustomModal";


const Education= ()=>{
    
    return(
        <>
            <section id="educacion">
                <h2 id="educacion-titulo">Educación</h2>
                <div className="externos primerExterno">
                    <div className="internos">
                        <h5>Programador Full-Stack</h5>
                        <h6 className="gris">2022</h6>
                    </div>
                    <button className="boton-dos-aparte">UTN.BA</button>
                    <div className="certificado-container">
                        <a href="https://github.com/lukutense?tab=repositories">Repositorio Github</a>
                        <CustomModal
                            showModalButtonText="Certificado"
                            modalHeader="Certificado"
                            modalBody={certificado}
                        />
                    </div>
                    <p>
                        Adquirir conocimientos y habilidades para realizar el diseño visual de su desarrollo web (Desarrollo Front End), así como también puedan programar en los lenguajes y frameworks más solicitados para estos desarrollos con el fin de interactuar con el servidor y las bases de datos del sitio web. (Desarrollo web Back End).
                    </p>
                </div>
                <div className="externos">
                    <div className="internos">
                        <h5>Visitador Médico</h5>
                        <h6 className="gris">2007 - 2009</h6>
                    </div>
                    <div className="certificado-container">
                    <button className="boton-dos">Inst. Ramon Carrillo</button>
                    <CustomModal
                        showModalButtonText="Certificado"
                        modalHeader="Certificado"
                        modalBody={certificado}
                    />
                    </div>
                    <p>Adquirir conocimientos teórico prácticos de marketing y medicina, para mantener un diálogo de ventas eficaz y contundente con profesionales del área de la salud</p>
                </div>
                <div className="externos">
                    <div className="internos">
                    <h5>Redactor publicitario</h5>
                    <h6 className="gris">2012 - 2014</h6>
                    </div>
                    <div className="certificado-container">
                        <button className="boton-dos">ISP</button>
                        <CustomModal
                            showModalButtonText="Certificado"
                            modalHeader="Certificado"
                            modalBody={certificado}
                        />
                    </div>
                    <p>Adquirir conocimientos para la generacion de conceptos, ideas y contenidos aplicados en distintos medios de comunicación con la informar y persuadir sobre un producto o servicio.
                    </p>
                </div>
            </section>
        </>
    )
}

export {Education}