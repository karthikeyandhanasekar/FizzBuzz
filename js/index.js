function calculate()
{
var age= document.getElementById('age').value
var status = document.getElementById('status')

if (age%15 ===0)
status.innerHTML="FizzBuzz"
else if (age%3 === 0)
status.innerHTML="Fizz"
else if(age%5 ===0)
status.innerHTML = "Buzz"
else
status.innerHTML = age
return false
}
