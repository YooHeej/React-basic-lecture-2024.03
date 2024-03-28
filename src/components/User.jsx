import { useState } from 'react';
import '../apps/App.css';

export default function User() {
  const initUsers = [
    {id:1, name:'admin', email:'admin@h.com'},
    {id:2, name:'james', email:'james@n.com'}
  ];
  const [users, setUsers] = useState(initUsers);
  // const handleSubmit = (event) => {
  //   event.preventDefault();         // submit button을 누르면 페이지가 자동적으로 바뀌는 것을 방지
  //   console.log(form);
  // }
  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setForm({ ...form, [name]: value});
  // }
  return (
    <div className="card">
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>name</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />
      <button onClick={() => {
        const id = prompt('ID값을 입력');
        const name = prompt('이름을 입력');
        const email = prompt('E-mail을 입력');
        setUsers([...users, {id, name, email}]);
      }}>추가</button>
      <button onClick={() => {
        const id = prompt("ID 값 입력");
        const newUsers = users.filter(user => user.id != id);
        // const newUsers = [];
        // for (let user of users)
        //   if (user.id != id)
        //     newUsers.push(user);
        setUsers(newUsers);
      }}>삭제</button>
    </div>
  );
}