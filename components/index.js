import Moment from 'moment';

const Time = Moment().format('HH:MM:SS');

console.log(Time)

// document.getElementById('stationTime').innterHtml = setInterval(() => Time, 1000)




// const doHour = () => {
//     let str = ""
//     const time = new Date()
//     let hour = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds()
    
//     document.getElementById("stationTime").innerHTML = str;
// }

// setInterval(()=>{doHour(), 1000});



