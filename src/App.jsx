 
import './App.css'

function App() {
  const handelSubmit = (e)=>{
     e.preventDefault(); // stop page refresh

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;

      const user = { name, email };
      console.log(user);
      fetch('http://localhost:5000/users',{
         method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.insertedId){
               alert('user add')
          }

      })
  }

  return (
    <>
       <h1>Simple Curd</h1>
        <form onSubmit={handelSubmit}>
          <input type="text" name="name" id="name" /> <br /> <br />
          <input type="email" name="email" id="email" /> <br /> <br />
          <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default App

