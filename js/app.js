function getInputValue(input){
  const allBlance =document.getElementById(input)
  const allBlanceNumber = parseInt(allBlance.value)
  return allBlanceNumber;
}


document.getElementById('calculate-button').addEventListener('click', function(){
  const incomeBlance =getInputValue('incoming-balance')
  const foodBalance =getInputValue('food-balance')
  const rentBalance =getInputValue('rent-balance')
  const clothesBalance = getInputValue('clothes-balance')
if (incomeBlance > 0 && foodBalance >= 0 && rentBalance >= 0 && clothesBalance >= 0 && incomeBlance > foodBalance + rentBalance + clothesBalance) {
    // totalExpence
    const totalExpence = document.getElementById('total-expence');
    totalExpence.innerText =foodBalance+rentBalance+clothesBalance;
    //newBalance
    const newBalance = document.getElementById('new-balance');
    newBalance.innerText = incomeBlance - parseFloat(totalExpence.innerText);
    // Type of error  number is Negative
    const errorMassage = document.getElementById('error');
    errorMassage.style.display='none'
}
else {
   const errorMassage = document.getElementById('error');
   errorMassage.style.display='block'
}
})

const savingsMoney = () => {

  const savingInput = getInputValue('saving-input')
  const incomeBlance = getInputValue('incoming-balance')
  console.log(incomeBlance,savingInput)
  // document.getElementById('saving-amount').innerHTML = ((incomeBlance*savingInput)/100)
  const newBalance = document.getElementById('new-balance').innerHTML
  const remainBalance = document.getElementById('remain')
  const error = document.getElementById('errorText')
  const percentageSaving = document.getElementById('saving-amount')
  percentageSaving.innerHTML = ((incomeBlance*savingInput)/100)
  
  if (((incomeBlance*savingInput)/100) > +newBalance) {
      error.innerHTML = 'Insufficant Balance';
      error.style.color = 'red';
      remainBalance.innerHTML =''
      percentageSaving.innerHTML =''
      console.log(5)
  } else {
      remainBalance.innerHTML = +newBalance -  ((incomeBlance*savingInput)/100)
  }


}