/* Function To Get Player Name Text */
function toGetPlayerName(textFieldId){
    const playerName = document.getElementById(textFieldId).innerText;
    return playerName;
}


/* Function To Set Selected Player Into The Order List */
function setOrderListAndDisabledBtn(playerName, buttonId, divId){
    const playerlist = document.createElement('li');
    playerlist.innerText = playerName;
    const listParent = document.getElementById('list-parent');
    if(listParent.childElementCount > 4){
        alert('You Can Not Select More Than Five Player');
        return;
    }

    const button = document.getElementById(buttonId);
    button.style.backgroundColor = '#004D98';
    button.style.color = '#EDBB00';
    button.innerText = 'Selected';
    
    const cardDiv = document.getElementById(divId);
    cardDiv.style.border = "4px solid #EDBB00";
    cardDiv.style.borderRadius = "3px";
    button.setAttribute('disabled', true);

    listParent.appendChild(playerlist);
}