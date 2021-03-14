import React from 'react';


function App() {
  return(            
        <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="tm-block-title mb-4">Presupuesto Grupo Empresarial JL</h2>
                </div>
              </div>
              <hr/>
              <div className="row mt-2">
                <div className="col-12">
                <div class="card">
                  <div class="card-header">
                    <h6>Desglose de datos</h6>
                  </div>
                  <div class="card-body">
                    <table class="table table-striped table-dark">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Descripción de Requerimiento</th>
                          <th scope="col">Carateristicas</th>
                          <th scope="col">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Diagrama de flujo de interacción Usuario/Aplicación</td>
                          <td>
                            <ul class="list-group">
                              <li class="list-item">Definición de Reglas de negocio para la interacción</li>
                              <li class="list-item">Definición de alcance para cada elemento</li>
                              <li class="list-item">Definición de </li>
                              <li class="list-item"></li>
                              <li class="list-item"></li>
                            </ul>
                          </td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Maquetado/Presentación de Diseño</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Definición de Alcance</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer">
                    <blockquote>
                      Presupuesto Valido al 30 de Marzo 2021 <br/>
                      <em>*Despues de la fecha la cantidad podría variar</em>
                    </blockquote>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>            
    );
}

export default App;
