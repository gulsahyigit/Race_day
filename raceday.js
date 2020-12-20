let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true
let Age = 25

if(registeredEarly && Age>=18){
  raceNumber += 1000
}

if (Age >= 18 && registeredEarly){
  console.log(`Your race will start at 9:30 am. Your race number is ${raceNumber}`)
  
}
else if(Age >= 18 && registeredEarly === false ) {
  console.log(`Your race will start at 11:00 am. Your race number is ${raceNumber}`)
}
else if(Age < 18){
  console.log(`Your race will start at 12:30 am. Your race number is ${raceNumber}`)
}