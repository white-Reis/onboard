var $= document.querySelector.bind(document)
var screen_one =$('#page_one')
var screen_two =$('#page_two')
var screen_three =$('#page_three')
var input_one=$('#nav-one')
var input_two=$('#nav-two')
var input_three=$('#nav-three')

function confirmScreen(){
  console.log('oi')
input_one.checked == true ? screen_one.classList.remove('invisible'):screen_one.classList.add('invisible')
input_two.checked == true ? screen_two.classList.remove('invisible'):screen_two.classList.add('invisible')
input_three.checked == true ? $('.continue_button').classList.add('invisible'):$('.continue_button').classList.remove('invisible')
input_three.checked == true ? $('.getOut_button').classList.remove('invisible'):$('.getOut_button').classList.add('invisible')
input_three.checked == true ? $('.skip_button').classList.add('invisible'):$('.skip_button').classList.remove('invisible')
input_three.checked == true ? screen_three.classList.remove('invisible'):screen_three.classList.add('invisible')
}
function buttonMove() {
  if (input_three.checked==true){
    input_one.checked=true;
    return
  }
  if (input_two.checked== true){
    input_three.checked=true;
    return
  }
  if (input_one.checked== true){
    input_two.checked=true;

    return
  }
  
}
function skip(){
  input_three.checked = true;
  confirmScreen()
}
