import React from 'react';

class AdminDLogin extends React.Component {

render(){
    return (
      <div>
        <h1>User Logins</h1>
        
        <div className="chart">
        
        <table className="table table-striped" id="data-table">
        <tr>
          
          <td><th>Sno</th></td>
          <td><th>Username</th></td>
          <td><th>Mail id</th></td>
          <td><th>Time</th></td>
          <td><th>Date</th></td>
          
        </tr>
        <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>john123@gmail.com</td>
          <td>03:00 PM</td>
          <td>28/11/2020</td> 
        </tr>
        
        <tr>
          <td>2</td>
          <td>Garry</td>
          <td>garry_23@gmail.com</td>
          <td>01:20 PM</td>
          <td>28/11/2020</td> 
        </tr>

        <tr>
          <td>3</td>
          <td>Rosy</td>
          <td>rosymarkel@gmail.com</td>
          <td>12:43 PM</td>
          <td>28/11/2020</td> 
        </tr>

        <tr>
          <td>4</td>
          <td>Lucifer</td>
          <td>LuciMrngstar@gmail.com</td>
          <td>11:33 AM</td>
          <td>28/11/2020</td> 
        </tr>
        </tbody>
      </table>      
    </div>
    </div>
      
    )
  }
}
  export default AdminDLogin;