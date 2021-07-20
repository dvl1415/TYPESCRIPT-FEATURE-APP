// function showToDo(todo: {title:string, text:string}){
//     console.log(todo.title + ':' + todo.text)
// }

//See the Commented thing
interface ToDo{
    title: string,
    text: string,
    getName: ()=>any
}

function showToDo(todo: ToDo){
    console.log(todo.title + ':' + todo.text)
}

let myToDo = {title: 'Angular', 
              text:'Javascript Framework',
                getName: ()=>{
                    return "Hello"
                }
}
showToDo(myToDo)
