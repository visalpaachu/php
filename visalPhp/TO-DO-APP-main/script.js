const inputBox =document.querySelector('.input-box');
const addButton=document.querySelector('.add-button');
const todoList=document.querySelector('.todo-list');

let editingMode=false;   //setting the editing mode -initially false ;
let editedTask=null;     //setting the edited  text null or empty initially ;

// function to Add ToDo
addButton.addEventListener('click',()=>{
    //when there is no input ...
    if(inputBox.value===""){
        alert(`You need to write something..`)
        return false;
    }

    // when editing mode is true 
    if(editingMode==true){
        editedTask.innerHTML=inputBox.value;
        editingMode=false;
        inputBox.value=""
        addButton.value='Add';
        editedTask=null;
        
    }else{
        // when editing mode is off 
     let li=document.createElement('li');    //creating li 
     const p=document.createElement('p');   //todo text
     p.innerHTML=inputBox.value;
     li.appendChild(p)
    todoList.appendChild(li)
    inputBox.focus();
    inputBox.value="";

    // marking the task as completed
    p.addEventListener('click',()=>{
        p.style.textDecoration="line-through";
        //  p.style.textDecorationColor="green";
         p.style.color="black";
         editButton.style.display="none";
        //  li.style.backgroundColor="#7CFC00";

         li.style.color="#fff";
        
    })
    

    // Delete Button
    const deleteButton=document.createElement('button');
    deleteButton.innerHTML='Delete';
    deleteButton.classList.add('delete-button')
    li.appendChild(deleteButton);


    // Edit button
    const editButton=document.createElement('button');
    editButton.innerHTML="Edit";
    editButton.classList.add('edit-button')
    li.appendChild(editButton);

    // edit functionality
    editButton.addEventListener('click',()=>{
   inputBox.value=p.innerHTML;
   addButton.value="update";
   editingMode=true;
   editedTask=p;
   inputBox.focus();
    });


    // Delete functionality
    deleteButton.addEventListener('click',()=>{
        li.classList.add('deleting-task');  //Adding the delteing animation from css
        setTimeout(() => li.remove(), 400); //after 4s of animation ,the task will delete 
        
    })
    }
    
})