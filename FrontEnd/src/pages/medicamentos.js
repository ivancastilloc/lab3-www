import React, { useEffect, useState } from 'react';
import { getMedicamentos } from '../services/medicamentos';
import './medicamentos.css'

function App() {
  const [list, setList] = useState([]);
  const [itemInput, setItemInput] = useState(0);

  useEffect(() => {
    let mounted = true;
    getMedicamentos()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  function updateStock(idMedicamento, nuevoStock) {
    const url = 'http://localhost:3000/medicamentos/' + idMedicamento + "&" + nuevoStock;
    console.log(url);
    fetch(url,
      {  method: "PATCH"});
    
  }

  return(
    <div className="wrapper">
     <h1>Lista Medicamentos</h1>
     <table>
        <tr>
            <th>Nombre del medicamento</th>
            <th> Valor $$ </th>
            <th> Stock</th>
        </tr>
        {list.map(item => 
        <tr>
            <td>{item.nombre}</td>
            <td>{item.valor}</td>
            <td class="stock">  <button type="button" onClick={() => updateStock( item._id, item.stock - 1 )}> - </button>  {item.stock} <button type="button" onClick={() => updateStock( item._id, item.stock + 1 )}> + </button> </td>

        </tr>
        
        )}
    </table> 
   </div>
  )
}

export default App;