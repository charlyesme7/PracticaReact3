import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import {LibraryContext} from '../Components/LibraryContext'
import {useContext} from 'react';


const List = () => {
  const {wishlist, erase} = useContext(LibraryContext);
    return ( 
        <div className="List">
                <h4 style={{marginBottom:'5vmin' }}>Mi Wish List</h4>
                  {
                    wishlist.length===0   
                    ? 
                    <p>No hay libros agregados</p>
                    :
                      <Table>
                      <thead>
                        <tr>
                          <th>Codigo</th>
                          <th>Titulo</th>
                          <th>Idioma</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
  
                        {
                          wishlist.map((l,i)=>{
                          
                          return(<tr key={i}>
                            
                            <td>{l.code}</td>
                            <td>{l.title}</td>
                            <td>{l.lenguage}</td>
                            <td>{<Button variant="dark"  onClick={()=>erase(l)}>Eliminar</Button>}</td>
                            </tr>)
  
  
                          })
                        }
                        
  
                      </tbody>
                      </Table>}      
        </div>
     );
}
 
export default List;