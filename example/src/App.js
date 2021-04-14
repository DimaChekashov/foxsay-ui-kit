import React from 'react';

import { Example, Button } from 'foxstrap';
import 'foxstrap/dist/index.css';

const App = () => {
  return (
    <React.Fragment>
      <Example text='Create React Library Example 😄' />
      <Button color='blue' className='hello-btn'>
        Hello world!
      </Button>
    </React.Fragment>
  );
};

export default App;
