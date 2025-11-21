let todos = ['ela', 'math', 'sci'];

function markAsDone (todos) {
  todos[0] = 'done-ela';
  todos[1] = 'done-math';
  todos[2] = 'done-sci';
}

while(todos == ['ela', 'math', 'sci']){
  return 'not done';
}


document.getElementById("result").innerHTML = "done";


