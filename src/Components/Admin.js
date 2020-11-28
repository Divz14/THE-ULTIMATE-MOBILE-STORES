import React from 'react';
import {Link} from 'react-router-dom';
class Admin extends React.Component {

  
  
  render(){
    return (
      <div>
           <Link to="/adminlogin" className="nav-link">
               To view the number of users
               </Link> 
        <h1>Today's Sales</h1>
        
        <div className="chart">
            
        
        <table className="table table-striped" id="data-table">
        <tr>
          
          <td><th>Sno</th></td>
          <td><th>Date</th></td>
          <td><th>Brand Name</th></td>
          <td><th>Model</th></td>
          <td><th>Color</th></td>
          <td><th>Price</th></td>
        </tr>
        <tbody>
        <tr>
          <td>1</td>
          <td>28/11/2020</td>
          <td>Samsung</td>
          <td>M31</td>
          <td>Space Black</td>
          <td> 16,499</td>
        </tr>
        <tr>
          <td>2</td>
          <td>28/11/2020</td>
          <td>Redmi</td>
          <td>Note 9</td>
          <td>Aqua Green</td>
          <td> 13,499</td>
        </tr>
        <tr>
          <td>3</td>
          <td>28/11/2020</td>
          <td>Oneplus</td>
          <td>Nord</td>
          <td>Gray</td>
          <td> 27,999</td>
        </tr>
        <tr>
        <td>4</td>
          <td>28/11/2020</td>
          <td>Vivo</td>
          <td>Y50</td>
          <td>Pearl White</td>
          <td> 16,490</td>
        </tr>
        </tbody>
      </table>      
</div>
        <h1> Previous Sales</h1>
      
      <table className="table table-striped">
        <tr>
          
          <td><th>Sno</th></td>
          <td><th>Date</th></td>
          <td><th>Brand Name</th></td>
          <td><th>Model</th></td>
          <td><th>Color</th></td>
          <td><th>Price</th></td>
        </tr>
        <tbody>
        <tr>
          <td>1</td>
          <td>26/11/2020</td>
          <td>Samsung</td>
          <td>M31</td>
          <td>Space Black</td>
          <td> 16,499</td>
        </tr>
        <tr>
          <td>2</td>
          <td>20/11/2020</td>
          <td>Redmi</td>
          <td>Note 9</td>
          <td>Aqua Green</td>
          <td> 13,499</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2/11/2020</td>
          <td>Oneplus</td>
          <td>Nord</td>
          <td>Gray</td>
          <td> 27,999</td>
        </tr>
        <tr>
        <td>4</td>
          <td>8/10/2020</td>
          <td>Vivo</td>
          <td>Y50</td>
          <td>Pearl White</td>
          <td> 16,490</td>
        </tr>
        </tbody>
      </table>      
    </div>
      
    )
  }
}
  export default Admin;