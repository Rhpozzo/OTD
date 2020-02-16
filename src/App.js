import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const App = () => {
  return(
    <div>
      <Moment format="DD/MM/YYYY"></Moment>
    </div>
  )
}

export default App;
