import React from 'react';


function App() {
  return(            
      <div className="container mt-4">
        <div className="row">
            <div className="card col-sm-12 mx-auto bg-dark text-light">
                <div className="card-header text-center">
                  <h5>Grupo Empresarial JL</h5>
                  <h6>Propuesta de Requerimientos</h6>
                </div>
                <div className="card-body" style={{"overflow-y":"scroll"}}>
                  <div className="row">
                    <table className="table col-sm-12 mx-auto">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Caracteristicas</th>
                          <th scope="col">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Definición de reglas de Negocio</td>
                          <td>
                            <ul className="list-group">
                              <li className="list-item">-Definición de Reglas para el diagrama de flujo</li>
                              <li className="list-item">-Definición de Reglas para usuarios y empresas subscritas</li>
                              <li className="list-item">-Definición de elementos de la aplicación e interacción de estos con los usuarios del sistema</li>
                              <li className="list-item">-Definición de alcance para cada elemento de la aplicación</li>
                              <li className="list-item">-Definición de alcance de los reportes (descargas de pdf, recibos, correos...)</li>
                              <li className="list-item">-Definición de fechas para presentación de trabajo/modificaciones</li>
                            </ul>
                          </td>
                          <td>$XXX</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Diagrama de flujo de interacción Usuario-Aplicación</td>
                          <td>
                            <ul className="list-group">
                              <li className="list-item">-Validación</li>
                              <li className="list-item">-Observaciones y Posibles Correcciones</li>
                              <li className="list-item">-Definición de fechas para presentación de trabajo/modificaciones</li>
                              <li className="list-item">*Despues de la planeación inicial, toda caracteristica adicional y no visualizada en el presupuesto tendrá un costo adicional</li>
                            </ul>
                          </td>
                          <td>$XXX</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Maquetado/Presentación de Diseño</td>
                          <td>
                            <ul className="list-group">
                              <li className="list-item">-Validación</li>
                              <li className="list-item">-Observaciones y Posibles Correcciones</li>
                              <li className="list-item">-Definición de costo por caracteristicas no visualizadas en el alcance o modificaciones</li>
                              <li className="list-item">-Definición de fechas para presentación de trabajo/modificaciones</li>
                            </ul>
                          </td>
                          <td>$XXX</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Desarrollo y Presentaciones</td>
                          <td>
                            <ul className="list-group">
                              <li className="list-item">-Validación</li>
                              <li className="list-item">-Observaciones y Posibles Correcciones</li>
                              <li className="list-item">-Definición costo por modificaciones o caracteristicas no requeridas o visualizadas</li>
                              <li className="list-item">-Definición de fechas para presentación de trabajo/modificaciones</li>
                            </ul>
                          </td>
                          <td>$XXX</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Entrega Final de Proyecto</td>
                          <td>
                            <ul className="list-group">
                              <li className="list-item">-Validación</li>
                              <li className="list-item">-Observaciones y Posibles Correcciones</li>
                              <li className="list-item">-Definición de fechas para presentación de trabajo/modificaciones</li>
                            </ul>
                          </td>
                          <td>$XXX</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <blockquote><em>*Presupuesto Valido al 30 de Marzo 2021 <br/>
                    *Despues de la fecha la cantidad podría variar</em>
                  </blockquote>
                </div>
            </div>
        </div>
      </div>            
    );
}

export default App;
