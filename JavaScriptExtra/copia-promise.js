

setTimeout(() => {
    console.log('Olá em 2 segundos.')
}, 2000)

let count = 0
let interval = setInterval(() => {
   console.log("Olá!")
   count++
   if(count > 5){
        clearInterval(interval)
   } 
}, 1000);

let interval2 = setInterval(() => {
    console.log("Olá 2!")
    count++
    if(count > 15){
         clearInterval(interval2)
    } 
 }, 500);