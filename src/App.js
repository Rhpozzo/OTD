import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment-timezone';

const App = () => {
    let time = new Date
    let hours = time.getHours();
    let minutes = setInteval(() => {
        time.getMinutes()
    },1000);
    let seconds = time.getSeconds();
    return(
    <div className='row'>
        <h1 className='dateBox'>Station Time: {minutes}</h1>
    </div>

  )
}

export default App;
