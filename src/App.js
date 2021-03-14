import React from 'react';


function App() {
  return(            
      <div className="container mt-4">
        <div className="row">
        <div className="card mx-auto-0 mt-4 bg-dark text-light">
              <div className="card-header text-center">
                <h5>Presupuesto Grupo Empresarial JL</h5>
              </div>
              <div className="card-body">
                <div className="row">
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
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
