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
    refreshPage();
    
  }

  function caducar(idMedicamento, Stock, id){
    var value = document.getElementById(id).value
    const url = 'http://localhost:3000/medicamentos/' + idMedicamento + "&" + (Stock - value);
    console.log(url);
    fetch(url,
      {  method: "PATCH"});
    refreshPage();
    
  }

  function refreshPage(){
    window.location.reload();
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
            <td><input type="text" name="textbox1" id={item._id}/> <button type="button" onClick={() => caducar( item._id, item.stock, item._id)}> Caducar </button> </td>

        </tr>
        
        )}
    </table> 
   </div>
  )
}

export default App;