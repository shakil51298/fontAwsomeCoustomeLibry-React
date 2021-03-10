import React from 'react';
import liberies from "../src/components/liberies"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
liberies()


function App() {
  return (
    <div className="App">

      {/*-------some Code---------*/}
      <div className="icon">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={['fab', 'facebook']} />
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </div>
      <div className="icon">
      <FontAwesomeIcon icon={['fab', 'github']} />
      </div>

     

      

      

      

      {/*-------Some Code---------*/}

This worked for me. I hope this helps!

    </div>
  );
}

export default App;
