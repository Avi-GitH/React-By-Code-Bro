import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting userName="Abhishek" isLoggedIn = {false}  />
      <UserGreeting userName="Priyanka" isLoggedIn = {true}  />
      <UserGreeting userName="Ayushman"/>
      <UserGreeting isLoggedIn = {true}/>
      <UserGreeting userName="Zakir" isLoggedIn = {false}  />
    </>
  );
}

export default App;
