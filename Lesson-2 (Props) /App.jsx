import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Abhishek" age={22} isStudent={true}/>
      <Student name="Abhinav" age={25} isStudent={true}/>
      <Student name="Anshuman" age={30} isStudent={false}/>
      <Student name="Akash" age={21} isStudent={true}/>
      <Student name="Mayur"/>
      <Student/>
    </>
  );
}

export default App;
