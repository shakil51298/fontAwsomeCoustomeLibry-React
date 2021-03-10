### Install these dependencies first
### `npm i --save @fortawesome/free-brands-svg-icons `
### `npm i --save @fortawesome/fontawesome-svg-core`
### `npm i --save @fortawesome/react-fontawesom`

# <ul><li>Create a custom library initFontAwesome.js and paste this code.</li></ul>

### `code: `
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {
  return (

   {/*---------Some code----------*/}

  );
}
export default App;

In Home.jsx include the following code

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

{/*-------some Code---------*/}

<FontAwesomeIcon icon={['fab', 'twitter']} />

<FontAwesomeIcon icon={['fab', 'facebook']} />

<FontAwesomeIcon icon={['fab', 'linkedin']} />

<FontAwesomeIcon icon={['fab', 'github']} />

{/*-------Some Code---------*/}