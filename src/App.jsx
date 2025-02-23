

// one time perform 3 setCount in one click -------------->>>>>>>

// import React, { useState } from 'react'

// export const App = () => {
// const [count, setCount]= useState(0)


// let num = 1

// const add = () => {
// setCount (count + num)
// setCount (count + num)
// setCount (count + num)
// }



//   return (
//     <div>App{count}
//     <button onClick={add}>click{count}  </button>
//     </div>
//   )
// }


// export default App;


// secrete behaviour in react useState call back function use it ------------>>>>>>>>


// import React, { useState } from 'react'

// export const App = () => {
// const [count, setCount]= useState(0)


// let num = 1

// const add = () => {
// setCount ((prev) => prev + num)
// setCount ((prev) => prev + num)
// setCount ((prev) => prev + num)
// }



//   return (
//     <div>App{count}
//     <button onClick={add}>click{count}  </button>
//     </div>
//   )
// }


// export default App;



// one time perform 3 setCount in one click ? what num show in  console.log line by line-------------->>>>>>>


import React, { useState } from 'react'

export const App = () => {
const [count, setCount]= useState(0)


let num = 1

const add = () => {
setCount ((prev) => prev + num)
console.log('num',num);
setCount ((prev) => prev + num)
console.log('num',num);
setCount ((prev) => prev + num)
console.log('num',num);
}



  return (
    <div>App{count}
    <button onClick={add}>click{count}  </button>
    </div>
  )
}


export default App;



