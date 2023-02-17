function productInputField(numberId){
    const inputfieldById = document.getElementById(numberId);
    const numberInputFieldString = inputfieldById.value;
    //  const numberInputField = parseInt(numberInputFieldString);
      
      if(numberInputFieldString <= 0){
        
        alert('invalid nummber');
      }else{
        const numberInputField = parseInt(numberInputFieldString);
        return numberInputField;
      }
    //   return numberInputField;
}
//  function getBalanceElementField(elementNumId){
//      const elementFieldById = document.getElementById(elementNumId);
//      const elementFieldString = elementFieldById.innerText;
//     const elementField = parseInt(elementFieldString);
//     return elementField;
//  }

document.getElementById('btn-calculate').addEventListener('click',function(){
    
// total income balance
       const totalIncomeBalance = productInputField('total-income');
    
    
// cost all goods
    const foodProductField = productInputField("food-field");
    const rentProductField = productInputField("rent-field");
    const clothesProductField = productInputField("clothes-field");

// total cost balance
    const totalCost = foodProductField + rentProductField + clothesProductField;

     const totalExpenses =document.getElementById('total-expenses');
     const totalExpensesBalanceString =totalExpenses.innerText;
     const totalExpensesBalance = parseInt(totalExpensesBalanceString);

     if(totalIncomeBalance < totalCost){
        alert('spend according to your income');
     }else{
        totalExpenses.innerText = totalCost;
     }
    //  totalExpenses.innerText = totalCost;
     

    const haveBalance =document.getElementById('have-balance');
    
    const haveBalanceElementByIdString = haveBalance.innerText;
    const haveBalanceElementById =parseInt(haveBalanceElementByIdString);

    
    const totalBalanceElement = totalIncomeBalance - totalCost;

    haveBalance.innerText = totalBalanceElement; 
})

// section save button
document.getElementById('btn-save').addEventListener('click',function(){
    // total balance
    const totalIncomeBalance = productInputField('total-income');

    
// save percent input field
    const percentInputField = productInputField('percent-input');

    const savingBalanceElementById = document.getElementById('saving-ammount');
    const savingBalanceElementString = savingBalanceElementById.innerText;
    const savingBalanceElement = parseInt(savingBalanceElementString);

    const devidedNumber = 100 / percentInputField;
    const totalPercentBalance =parseInt( totalIncomeBalance / devidedNumber);
     savingBalanceElementById.innerText = totalPercentBalance;
    
    
  const haveBalanceElementById = document.getElementById('have-balance');
  const haveBalanceElementString = haveBalanceElementById.innerText;
   const haveBalanceElement = parseInt(haveBalanceElementString);
   if(totalPercentBalance > haveBalanceElement){
    alert('No money your poket');
}else{
    
}
  const remainingBalanceElementById = document.getElementById('remaining-balance');
  const remainingBalanceElementString = remainingBalanceElementById.innerText;

  const totalRemainingBalance = haveBalanceElement - totalPercentBalance;
  if(totalRemainingBalance > 0){
    remainingBalanceElementById.innerText = totalRemainingBalance;
  }else{
    alert('ata kora jabe na');
  }
//   remainingBalanceElementById.innerText = totalRemainingBalance;
})