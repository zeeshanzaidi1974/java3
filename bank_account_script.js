

const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 25;
const userDeposit = document.getElementById("userDeposit");

const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

btnDeposit.addEventListener('click', () => {
 
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {
 
  deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        totalBalance += (Number(userDeposit.value));

         let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

  console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
);

btnWithdraw.addEventListener('click', () => {


// checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

// checks if withdrawal meets parameters
        if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        } else {
 // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));

  // calculate Total Balance
        totalBalance -= (Number(userWithdraw.value));

 // format TotalBalance to show $ XX.XX (2 decimal places)
 
 
let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;


// print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});

// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;




