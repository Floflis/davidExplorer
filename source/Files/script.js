var input = document.getElementById('addressbar');
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('enterbtn').click();
  }
});

function resetitemSelectedEffect() {
   //document.querySelector('.exploreritem').classList.remove('selected');
       var buttons = document.getElementsByClassName('exploreritem'),
        len = buttons !== null ? buttons.length : 0,
        i = 0;
    for(i; i < len; i++) {
        //buttons[i].className -= 'selected'; 
        buttons[i].classList.remove('selected');
    }
    //- credits: https://stackoverflow.com/a/18294771/5623661
   //var element = document.getElementById(myname);
   //element.classList.remove('selected');
   //document.querySelector('.exploreritem').classList.set('exploreritem');
}
function itemSelectedEffect() {
   //var element = document.getElementById('Item name');
   var element = document.getElementById(myname);
   element.classList.add('selected');
   //document.querySelector('.exploreritem').classList.add('selected');
   //document.querySelector('#' + myname).classList.add('selected');
   //document.getElementById(myname).classList.add('selected');
}
