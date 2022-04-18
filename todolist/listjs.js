document.querySelector(".btn").addEventListener('click', toDos)
document.querySelector("ul").addEventListener('click', function(e){
    e.target.classList.toggle('strikeThrough')
    let num = document.querySelectorAll('li').length
    let num2 = document.querySelectorAll('.strikethrough').length
    document.querySelector('.toDos').innerText = num - num2
})

document.querySelector('.clrList').addEventListener('click', clrTheList)
document.querySelector('clrComplete').addEventListener('click', clrComplete)

function toDos(){
    let input = document.querySelector('.input').value

    const node = document.createElement('li')
    const textNode = document.createTextNode(input)
    node.appendChild(textNode)
    document.getElementById('toDoList').appendChild(node)
    let num = document.querySelector('li').length
    document.querySelector('.toDos'.innerText) = num
}


function clrTheList(){
    document.querySelectorAll('li').forEach(li => {
        li.remove()
    })
}

function clrComplete(){
    document.querySelectorAll('strikeThrough').forEach(li => {
        li.remove()
    })
}