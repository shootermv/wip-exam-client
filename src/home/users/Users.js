import React from 'react';

import Spinner from '../../shared/Spinner';

export default ({users, userSelected}) =>(
  
  <div className="col-md-4">
   {users.length === 0 && <Spinner/>}
   {users.length > 0 && 
   <div className="card">
     <ul className="list-group list-group-flush">
      {
        users.map((user) => (
        <li className="list-group-item" key={user.id} onClick={() => userSelected(user)}>
           <img className="user-img" src={user.profile_image_url}/> 
           <div className="user-details"> {user.screen_name} <br/> {user.name} 
              <p> <a href={user.url}>visit</a> </p>
           </div>      
        </li>))
      }
      </ul>
    </div>}
  </div>
)