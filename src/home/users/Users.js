import React from 'react';

import Spinner from '../../shared/Spinner';

export default ({users, userSelected}) =>(
  
  <div className="col-md-4">
   {users.length === 0 && <Spinner/>}
   {users.length > 0 && <div className="card"><ul className="list-group list-group-flush">
      {users.map((user) => (<li className="list-group-item" key={user.id} onClick={()=>userSelected(user)}>{user.screen_name}</li>))}
    </ul></div>}
  </div>
)