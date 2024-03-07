import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'
import schema from "./schema";
// import { useRouter } from 'next/navigation ';
import UsersError from './UsersError';

interface User {
  id: number,
  name: string,
  age: number,
  active: boolean,
  last_login: string
}

interface Props {
  sort: string;
  order:string;
  name:string;
  age:number;
  activeStatus:number;
}

let currentOrder ={
  id:'asc',
  name:'asc',
  age:'asc',
  active:'asc',
  last_login:'asc'
}

const UserTable = async (props: Props) => {

  // const router = useRouter();
  // router.push('/error');
  const queryString = `?name=${props.name}&age=${props.age}&activeStatus=${props.activeStatus}`;

  const validation = schema.safeParse(props);
  if(!validation.success) return (<UsersError error='Invalid Filter Parameters' />);

  const res = await fetch(
    process.env.BASE_URL + '/api/users' + queryString
    ,{cache:'no-store'}
  );
  // let users: User[] = await res.json();
  let obj = await res.json();
  let users: User[] = obj.users;
  const agg = obj.agg;
  if(!users || !agg) return (<UsersError error='Invalid Users File'/>);

  const key = props.sort;
  const order = props.order;

  switch (key) {
    case "id":
      if(order =='asc') {
        users = sort(users).asc(u => u.id);
        currentOrder.id = 'desc';
      }
      else{
        users = sort(users).desc(u => u.id);
        currentOrder.id = 'asc';
      }
      break;

    case "name":
      if(order =='asc') {
        users = sort(users).asc(u => u.name);
        currentOrder.name = 'desc';
        
      }
      else{
        users = sort(users).desc(u => u.name);
        currentOrder.name = 'asc';

      }
      break;

    case "age":
      if(order =='asc') {
        users = sort(users).asc(u => u.age);
        currentOrder.age = 'desc';

      }
      else{
        users = sort(users).desc(u => u.age);
        currentOrder.age = 'asc';

      }
      break;

    case "active":
      if(order =='asc') {
        users = sort(users).asc(u => u.active);
        currentOrder.active = 'desc';

      }
      else{
        users = sort(users).desc(u => u.active);
        currentOrder.active = 'asc';

      }
      break;

    case "last_login":
      if(order =='asc') {
        users = sort(users).asc(u => u.last_login);
        currentOrder.last_login = 'desc';

      }
      else{
        users = sort(users).desc(u => u.last_login);
        currentOrder.last_login = 'asc';
      }
      break;
    default:
      break;
  }

  return (
    <div>
      <table className='table table-auto w-full'>
        <thead>
          <tr>
            <th className="text-start"><Link title={`Sort ${currentOrder.id}`} href={`/users${queryString}&sort=id&order=${currentOrder.id}`}>ID <i className="fa-solid fa-sort"></i></Link></th>
            <th className="text-start"><Link title={`Sort ${currentOrder.name}`} href={`/users${queryString}&sort=name&order=${currentOrder.name}`}>Name <i className="fa-solid fa-sort"></i></Link></th>
            <th className="text-start"><Link title={`Sort ${currentOrder.age}`} href={`/users${queryString}&sort=age&order=${currentOrder.age}`}>Age <i className="fa-solid fa-sort"></i></Link></th>
            <th className="text-start"><Link title={`Sort ${currentOrder.active}`} href={`/users${queryString}&sort=active&order=${currentOrder.active}`}>Active <i className="fa-solid fa-sort"></i></Link></th>
            <th className="text-start"><Link title={`Sort ${currentOrder.last_login}`} href={`/users${queryString}&sort=last_login&order=${currentOrder.last_login}`}>Last Login <i className="fa-solid fa-sort"></i></Link></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr className="text-start" key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.active ? 'Yes' : 'No'}</td>
            <td>{user.last_login}</td>

          </tr>)}
        </tbody>
      </table>
      <div className='mt-5 font-bold'>
        <p>Average Age: {agg.avg_age}</p>
        <p>Active Users: {agg.active_count}</p>
        <p>Inactive Users: {agg.inactive_count}</p>
      </div>
    </div>
  )
}

export default UserTable