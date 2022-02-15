import React, { useEffect } from 'react';
import adminPhoto from '../../assets/admin.jpg'
import { Table } from 'react-bootstrap';

import './Admin.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getListUsers} from '../../redux/Actions/admin';

const Admin = () => {
    const dispatch=useDispatch()
    const listUsers=useSelector(state => state.UsersReducer.listUsers)
    

   


    useEffect(()=>{
        dispatch(getListUsers())
      },[dispatch])

  return <div className='pageAdmin'> 
         <div className='photoadmin'>
           <img src={adminPhoto} alt='background admin'></img>
         </div>
         <div className='dashBoard'>
              <h2>Liste des Users</h2>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First and Last Name</th>
      <th>Email</th>
      <th>Delete User</th>
      {/* <th>Show Recette Of User</th> */}
    </tr>
  </thead>
  <tbody>
   
    {listUsers.map(Users=>
         <tr>
         <td>{Users._id}</td>
         <td>{Users.name} </td>
         <td>{Users.email}</td>
         <td><i class="fas fa-user-minus delete" onClick={()=> dispatch(deleteUser(Users._id))}></i></td>
       
       </tr>)}
  </tbody>
</Table>

         </div>
  </div>;
};

export default Admin;
