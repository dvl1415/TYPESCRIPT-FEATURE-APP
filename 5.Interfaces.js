// function showToDo(todo: {title:string, text:string}){
//     console.log(todo.title + ':' + todo.text)
// }
function showToDo(todo) {
    console.log(todo.title + ':' + todo.text);
}
var myToDo = { title: 'Angular',
    text: 'Javascript Framework',
    getName: function () {
        return "Hello";
    }
};
showToDo(myToDo);
