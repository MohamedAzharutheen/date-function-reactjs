import React from 'react'

function CurrentDate() {

    let dateObj = new Date();
    let days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let months =["Janu","Feb","March","April","May","June","July","August","September","October","Novomber","December"];
    let date =dateObj.getDate();
    let hours =dateObj.getHours()
    let min = dateObj.getMinutes()
    let sec = dateObj.getSeconds()
    let day =days[dateObj.getDay()];
    let month =months[dateObj.getMonth()];
  return (
    <>
    <div className='justify-center w-full p-5 bg-gray-500 sm:flex'>

        <p className='p-2 text-2xl font-bold'><span className='p-2 '>Today :</span><span className='text-white'>{day}</span></p> 
        <p className='p-2 text-2xl font-bold'><span className='p-2'>Date -</span><span className='text-white'>{date}</span></p>
        <p className='p-2 text-2xl font-bold'><span className='p-2'>Month -</span><span className='text-white'>{month}</span></p>
        <p className='p-2 text-2xl font-bold'><span className='p-2'>Time -</span><span className='text-white'>{hours}</span></p>
        <p className='mt-2 text-2xl font-bold '><span className=''>:</span><span className='p-2 text-white'>{min}</span></p>
        <p className='mt-2 text-2xl font-bold '><span className=''>:</span><span className='p-2 text-white'>{sec}</span></p>

    </div>
    
    
    
    
    
    </>
  )
}

export default CurrentDate
