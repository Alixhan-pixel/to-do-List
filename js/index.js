let addTodo = document.getElementById('btn-add');
let inner = document.getElementById('input-todo');
let defaultError = document.getElementById('error');
let backGround = document.getElementById('error-background');
let startupBox = document.querySelector('.startup-elements');
let todoArary= [];
addTodo.addEventListener('click', function(){
    if(inner.value == ''){
        backGround.classList.add('error');
        defaultError.textContent = "Enter Some Value";
        setTimeout(function(){
            backGround.classList.remove('error');
            defaultError.textContent = "";
        }, 2000);

    }else{
        backGround.classList.add('success');
        defaultError.textContent = "Value Added Successfuly";
        setTimeout(function(){
            backGround.classList.remove('success');
            defaultError.textContent = "";
        },2000);
        // let li = document.createElement('li');
        // li.textContent = inner.value + del  ;
        // inner.value = "";
        // let position = startupBox.firstChild;
        // startupBox.insertBefore(li,position);
        // console.log(todoArary)
        todoArary.push(inner.value);

        //Showing to do list
        let todo_list = document.createElement('div');
        for(let i = 0; i < todoArary.length; i++){
            todo_list.className = 'list-items';
            todo_list.setAttribute("draggable", "true");
            todo_list.textContent = inner.value;
            startupBox.appendChild(todo_list); 
        }

        inner.value = "";

        //it'll show Delet btn div
        if(todoArary.length > 0){
            let item = document.querySelectorAll('.list-items')
            for(let j= 0; j < item.length; j++){
                let del = document.createElement('div')
                del.className = 'del';
                del.textContent = 'X';
               item[j].appendChild(del) 
               console.log(item)

               // Deleting A list
               del.addEventListener('click', function(){
                startupBox.removeChild(item[j]);
               })
            }
        }
    }
})

