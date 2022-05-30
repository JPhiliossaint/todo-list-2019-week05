document.querySelector('.btn').addEventListener('click', toDos)
let numofToDos = document.querySelector('.toDos')

function toDos(){
    let input = document.querySelector('input').value
    const node = document.createElement('li')
    const textNode = document.createTextNode(input)
    node.appendChild(textNode)
    document.getElementById('toDoList').appendChild(node)
    document.querySelector('.input').value = ' '
    Number(numofToDos.innerText ++)
}

document.querySelector('ul').addEventListener('click', function(e){
    e.target.classList.toggle('strikeThrough')
    Number(numofToDos.innerText --)
})

document.querySelector('.clrList').addEventListener('click', clrList)
function clrList(){
    document.querySelectorAll('li').forEach(li => {
        li.remove()
    })
    numofToDos.innerText = 0
}
document.querySelector('.clrDone').addEventListener('click', clrComplete)
function clrComplete(){
    document.querySelectorAll('.strikeThrough').forEach(li => {
        li.remove()
    })
}