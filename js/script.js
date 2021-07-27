const addIncome  = document.querySelector('.income-add-btn')
const addExpense  = document.querySelector('.expense-add-btn')
const incomeRow = document.querySelector('#income-tbody')
const expenseRow = document.querySelector('#expense-tbody')




let totalIncome=0;
let totalExpense=0;
let totalSavings=0;
snoIncome=0;
snoExpense=0;


// $(document).ready(function() {
//     $('#example').DataTable( {
//         responsive: true,
//         "pageLength": 10
//     } );
// } );

document.getElementById('container-income-button-max').addEventListener('click',function(){
    document.querySelector(".input-income").style.display="block";
    document.querySelector(".input-expense").style.display="none";
    document.querySelector("#container-income-button-max").style.display="none";
    document.querySelector("#container-income-button-min").style.display="block";
    document.querySelector("#container-expense-button-max").style.display="block";
    document.querySelector("#container-expense-button-min").style.display="none";


})
document.getElementById('container-income-button-min').addEventListener('click',function(){
    document.querySelector(".input-income").style.display="none";
    document.querySelector(".input-expense").style.display="none";
    document.querySelector("#container-income-button-max").style.display="block";
    document.querySelector("#container-income-button-min").style.display="none";
    document.querySelector("#container-expense-button-max").style.display="block";
    document.querySelector("#container-expese-button-min").style.display="none";


})
document.getElementById('edit-container-income-button').addEventListener('click',function(){
    document.querySelector(".input-income").style.display="none";
    document.querySelector(".input-expense").style.display="none";
    document.querySelector(".edit-input-income").style.display="block";
    document.querySelector(".edit-input-expense").style.display="none";
    // document.querySelector("#container-income-button-max").style.display="block";
    // document.querySelector("#container-income-button-min").style.display="none";
    // document.querySelector("#container-expense-button-max").style.display="block";
    // document.querySelector("#container-expese-button-min").style.display="none";


})

document.getElementById('container-expense-button-max').addEventListener('click',function(){
    document.querySelector(".input-income").style.display="none";
    document.querySelector(".input-expense").style.display="block";
    document.querySelector("#container-expense-button-max").style.display="none";
    document.querySelector("#container-expense-button-min").style.display="block";
    document.querySelector("#container-income-button-max").style.display="block";
    document.querySelector("#container-income-button-min").style.display="none";
})

document.getElementById('container-expense-button-min').addEventListener('click',function(){
    document.querySelector(".input-income").style.display="none";
    document.querySelector(".input-expense").style.display="none";
    document.querySelector("#container-expense-button-max").style.display="block";
    document.querySelector("#container-expense-button-min").style.display="none";
    document.querySelector("#container-income-button-max").style.display="block";
    document.querySelector("#container-income-button-min").style.display="none";
    
})


document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
        document.querySelector(".input-expense").style.display="none";
        document.querySelector(".input-income").style.display = "none";
        document.querySelector(".edit-input-expense").style.display="none";
        document.querySelector(".edit-input-income").style.display="none";
        document.querySelector("#container-income-button-max").style.display="block";
        document.querySelector("#container-income-button-min").style.display="none";
        document.querySelector("#container-expense-button-max").style.display="block";
        document.querySelector("#container-expense-button-min").style.display="none";




    }
})

addIncome.addEventListener('click',(event) =>{
    snoIncome +=1;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const dateTime = date+ '<br> '+time;
    const incomeTitle = document.getElementById('income-item-input').value;
    const incomeAmount = Number(document.getElementById('income-amount-input').value);
    if(incomeTitle != '' && incomeAmount >0){

        totalIncome += incomeAmount;
        totalSavings = totalIncome - totalExpense;
        let newlineIncome =incomeRow.innerHTML;
        newlineIncome += '<tr><td>' + snoIncome + '</td><td>' + date + '<br>' + time + '</td><td>' + incomeTitle + '</td><td>' + incomeAmount + '</td><td><div><button id="edit-container-income-button"><i class="fas fa-pen" ></i></button></div></td><td><i class="far fa-trash-alt"></i></td></tr>';
        incomeRow.innerHTML=newlineIncome;
        document.getElementById("details-income-amount").innerHTML=totalIncome;
        if(totalSavings<0){
            document.querySelector(".header-savings-details").style.color="red";
            
        }
        else if(totalSavings>0){
            document.querySelector(".header-savings-details").style.color="green";
        }
        else{
            document.querySelector(".header-savings-details").style.color="yellow";
            
        }
        document.getElementById("details-savings-amount").innerHTML=totalSavings;
        document.querySelector(".input-expense").style.display="none";
        document.querySelector(".input-income").style.display = "none";
        document.querySelector(".edit-input-expense").style.display="none";
        document.querySelector(".edit-input-income").style.display="none";
        document.querySelector("#container-income-button-max").style.display="block";
    document.querySelector("#container-income-button-min").style.display="none";
    document.querySelector("#container-expense-button-max").style.display="block";
    document.querySelector("#container-expese-button-min").style.display="none";
    }
    else{
        alert("enter correct details...")

    }
})
addExpense.addEventListener('click',(event) =>{
    snoExpense +=1;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const dateTime = date+ '<br> '+time;
    const expenseTitle = document.getElementById('expense-item-input').value;
    const expenseAmount = Number(document.getElementById('expense-amount-input').value);
    if(expenseTitle != '' && expenseAmount > 0)
    {

        totalExpense += expenseAmount;
        totalSavings = totalIncome - totalExpense;
        let newlineExpense =expenseRow.innerHTML;
        newlineExpense += '<tr><td>' + snoExpense + '</td><td>' + date + '<br>' + time + '</td><td>' + expenseTitle + '</td><td>' + expenseAmount + '</td><td ><button id="edit-container-expense-button"><i class="fas fa-pen" ></i></button></td><td><i class="far fa-trash-alt"></i></td></tr>';
        expenseRow.innerHTML=newlineExpense;
        document.getElementById("details-expense-amount").innerHTML=totalExpense;
        if(totalSavings<0){
            document.querySelector(".header-savings-details").style.color="red";
            
        }
        else if(totalSavings>0){
            document.querySelector(".header-savings-details").style.color="green";
        }
        else{
            document.querySelector(".header-savings-details").style.color="yellow";
            
        }
        document.getElementById("details-savings-amount").innerHTML=totalSavings;
        document.querySelector(".input-expense").style.display="none";
        document.querySelector(".input-income").style.display = "none";
        document.querySelector(".edit-input-expense").style.display="none";
        document.querySelector(".edit-input-income").style.display="none";
        document.querySelector("#container-income-button-max").style.display="block";
        document.querySelector("#container-income-button-min").style.display="none";
        document.querySelector("#container-expense-button-max").style.display="block";
        document.querySelector("#container-expense-button-min").style.display="none";

    }
    else{
        alert("Please enter correct details...")
    }
})

