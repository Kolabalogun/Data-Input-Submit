import React from "react";
import "./Style.css";

const Home = () => {
  
  const [person, personF] = React.useState({name: '', email: ''});
  const [datas, datasF] = React.useState([]);

 
  function handleChange(e) {
    personF(prev => {
        return {...prev,
        [e.target.name] : e.target.value}
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    datasF((prevState) => {
      return [
        ...prevState,
        { id: new Date().getTime().toString(), person },
      ];
    });
  }

  function handleDelete(id) {
      let newA = datas.filter(data => data.id !== id)
      datasF(newA)
  }

  const DataElements = datas.map((data) => (
    <div className="list" key={data.id}>
      <p>{data.person.name}</p>
      <span onClick={() => handleDelete(data.id)}>remove</span>
      <p className="email">{data.person.email}</p>
    </div>
  ));

//   console.log(datas);

  return (
    <div className="container">
      <form className="main" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" 
          onChange={handleChange} value={person.name}
          name= 'name' />
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <input
            id="email"
            type="email"
            name = 'email'
            onChange={handleChange}
            value={person.email}
          />
        </div>

        <button onSubmit={handleSubmit}>Add Details</button>
      </form>

      <div className="lists">
        {DataElements}
      </div>
    </div>
  );
};

export default Home;
