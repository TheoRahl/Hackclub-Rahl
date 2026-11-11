//CALCULATOR PROGRAM

function appendToDisplay(input){
  Display.value += input;
}

function clearDisplay(){
  Display.value = "";
}

function calculate(){
  try{
    Display.value = eval(Display.value);
  }
  catch(error){
   Display.value = "Error"
  }
}
