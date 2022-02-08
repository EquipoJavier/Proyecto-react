// import { useState, useContext } from "react";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

// const UserProvider = (props) => {
// const MyContext = useContext(null);
//   const [user, setUser] = useState(cookies.get("username")||null);

//   return (
//     <MyContext.Provider value={{user}}>
//       {props.children}
//     </MyContext.Provider>
//   );
// };

// export default UserProvider;

// const MyView = () => (
//   <UserProvider>
//     <TodoList />
//   </UserProvider>
// );

// export const TodoList = () => {
//   const context = useContext(MyContext);
//   return (
//     <div>
//       {context.store.todos.map((task, i) => (
//         <li>{task}</li>
//       ))}
//       <button
//         onClick={() =>
//           context.actions.addTask("I am the task " + context.store.todos.length)
//         }
//       >
//         {" "}
//         + add{" "}
//       </button>
//     </div>
//   );
// };

