/* Add Event Listener In Every Select Button */
document.getElementById('select-btn1').addEventListener('click', function(){
    const playerName = toGetPlayerName('dembele');
    setOrderListAndDisabledBtn(playerName, 'select-btn1', 'card-div1');
})
document.getElementById('select-btn2').addEventListener('click', function(){
    const playerName = toGetPlayerName('lewandoski');
    setOrderListAndDisabledBtn(playerName, 'select-btn2', 'card-div2');
})
document.getElementById('select-btn3').addEventListener('click', function(){
    const playerName = toGetPlayerName('rapinha');
    setOrderListAndDisabledBtn(playerName, 'select-btn3', 'card-div3');
})
document.getElementById('select-btn4').addEventListener('click', function(){
    const playerName = toGetPlayerName('pedri');
    setOrderListAndDisabledBtn(playerName, 'select-btn4', 'card-div4');
})
document.getElementById('select-btn5').addEventListener('click', function(){
    const playerName = toGetPlayerName('busi');
    setOrderListAndDisabledBtn(playerName, 'select-btn5', 'card-div5');
})
document.getElementById('select-btn6').addEventListener('click', function(){
    const playerName = toGetPlayerName('de-jong');
    setOrderListAndDisabledBtn(playerName, 'select-btn6', 'card-div6');
})
document.getElementById('select-btn7').addEventListener('click', function(){
    const playerName = toGetPlayerName('pique');
    setOrderListAndDisabledBtn(playerName, 'select-btn7', 'card-div7');
})
document.getElementById('select-btn8').addEventListener('click', function(){
    const playerName = toGetPlayerName('kounde');
    setOrderListAndDisabledBtn(playerName, 'select-btn8', 'card-div8');
})
document.getElementById('select-btn9').addEventListener('click', function(){
    const playerName = toGetPlayerName('araujo');
    setOrderListAndDisabledBtn(playerName, 'select-btn9', 'card-div9');
})
document.getElementById('select-btn10').addEventListener('click', function(){
    const playerName = toGetPlayerName('jordi-alba');
    setOrderListAndDisabledBtn(playerName, 'select-btn10', 'card-div10');
})
document.getElementById('select-btn11').addEventListener('click', function(){
    const playerName = toGetPlayerName('stegan');
    setOrderListAndDisabledBtn(playerName, 'select-btn11', 'card-div11');
})
document.getElementById('select-btn12').addEventListener('click', function(){
    const playerName = toGetPlayerName('ansu-fati');
    setOrderListAndDisabledBtn(playerName, 'select-btn12', 'card-div12');
})

/* Calculation Section */

/* Add An Event Listener To Calculate Button & Set The New Amount Of Player Expenses */
document.getElementById('calc-btn').addEventListener('click', function(){
    const addedPlayer = orderListCounter('list-parent');
    const inputFieldNum = inputFieldValue('player-market-value');
    if(addedPlayer < 1){
        alert('You Can Not Play The eFOOTBALL2022 Without Player...');
        return;
    }
    else if(Number.isNaN(inputFieldNum) || inputFieldNum <= 0){
        alert('Player Market Value Can Not Be' + ' ' + inputFieldNum);
        return;
    }
    const totalPlayerExpenses = inputFieldNum * addedPlayer ;
    setTextFiledInnerText('player-expenses', totalPlayerExpenses);
})

/* Add An Event Listener To Calculate Total Button  & Set The New Amount Of Total Expense*/
document.getElementById('calc-total-btn').addEventListener('click', function(){
    const playerExpenses = toGetTextFieldValue('player-expenses');
    const directorExpenses = inputFieldValue('director-expense');
    if(Number.isNaN(directorExpenses) || directorExpenses <= 0){
        alert('Team Director Expense Value Can Not Be' + ' ' + directorExpenses);
        return;
    }
    const headCoachExpenses = inputFieldValue('head-coach-expense');
    if(Number.isNaN(headCoachExpenses) || headCoachExpenses <= 0){
        alert('Head Coach Expense Value Can Not Be' + ' ' + headCoachExpenses);
        return;
    }
    if(playerExpenses <= 0){
        alert('Please Select Player & Input Their Market Value')
    }
    const overallExpenses = playerExpenses + directorExpenses + headCoachExpenses;
    setTextFiledInnerText('total-expense', overallExpenses);
})