import './App.css';
import { useState } from 'react';
import Design from './components/Design';
import SubDesign from './components/SubDesign';
import {emailValidation} from './helper/Validations';
function App() {
const [component, setComponent] = useState(false);
const [error, setError] = useState(false);
const [email, setEmail] = useState('');
const errorValidator = () =>{
const errorValidated =  emailValidation();
if(errorValidated !== true) {
  if(typeof errorValidated === 'string'){  
  setComponent(true);
  setEmail(errorValidated);
  }
}else{
  setError(true);
}
return errorValidated;
};

const comeBack = () => {
  setComponent(!component);
  setError(false);
}



if(component) return <SubDesign email={email} comeBack={comeBack} />;
  
return <Design errorValidator={errorValidator} error={error} />;
    
}

export default App;
