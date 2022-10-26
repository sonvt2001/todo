import React from 'react';
import FormInput from './components/FormInput';
import Listtodo from './components/Listtodo';
import Footer from './components/Footer';
import {Data} from './components/Data'

function App() {

  // const[openModal, setOpenModal] = useState(false)
  return (
    <Data>
    <div className="App">
      <h1>To Do List</h1>
      <FormInput/>
      <Listtodo/>
      <Footer/>
    </div>
    </Data>
  );
}

export default App;
