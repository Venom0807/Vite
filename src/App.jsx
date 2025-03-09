import { myUsers } from "./data";
console.log(myUsers);
export default function App() {
  return (
    <div className="main">
      <div className="title">
        <h1>Cards</h1>
      </div>
      <userInfo />
    </div>
  );
}
function userInfo() {
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_640.jpg"
        alt=""
      />
      <h1>Admin</h1>
    </>
  );
}
