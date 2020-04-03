import React, {useState} from 'react';

const App = () => {

  const [form, setForm] = useState({
    input: '',
    select:''
  })

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value} )
  }

  console.log(form)

  return (
    <div className="app">
      <form>
        <input type="text" onChange={handleChange} name="input" value={form.input}></input>
        <select onChange={handleChange} name="select" value={form.select}>
          <option value="mendoza">Mendoza</option>
          <option value="caba">CABA</option>
          <option value="tucuman">Tucuman</option>
        </select>
      </form>
    </div>
  );
}

export default App;
