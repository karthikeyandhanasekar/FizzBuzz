function changemetrics()
{
    var option = document.getElementById('option').value

if (option === "kg-m" )
{
     document.getElementById('height').placeholder="m"
    document.getElementById('weight').placeholder="kg"
    document.getElementById('weight').value=null
    document.getElementById('height').value=null

}
else
{
    document.getElementById('height').placeholder="in"
    document.getElementById('weight').placeholder="lbs"
    document.getElementById('height').step="any"
    document.getElementById('height').value=null
    document.getElementById('weight').value=null


}

    return false
}

function calculate()
{
var age= document.getElementById('age').value
var status = document.getElementById('status')

if (age%15 ===0)
status.innerHTML="FizzBuzz"
else if (age%3 === 0)
status.innerHTML="Fizz"
else
status.innerHTML = "Buzz"
return false
}