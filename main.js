var $= document.querySelector.bind(document)
var screen_one =$('#page_one')
var screen_two =$('#page_two')
var screen_three =$('#page_three')
var input_one=$('#nav-one')
var input_two=$('#nav-two')
var input_three=$('#nav-three')
var flag= 

function confirmScreen (){
input_one.checked == true ? screen_one.classList.remove('invisible'):screen_one.classList.add('invisible')
input_two.checked == true ? screen_two.classList.remove('invisible'):screen_two.classList.add('invisible')
input_three.checked == true ? screen_three.classList.remove('invisible'):screen_three.classList.add('invisible')
}
function buttonMove(tela) {
  input_one.checked == true && {input_two.checked = true}
  
}