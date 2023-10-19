const left = document.createElement("div")
const right = document.createElement("div")
const body = document.querySelector("body")

body.style.display = "flex"

body.style.margin = "0"

left.style.width = "49%"
right.style.width = "51%"

left.style.height = "1200px"
right.style.height = "1200px"

left.innerText = left.style.width
right.innerText = right.style.width

left.style.display = "flex"
left.style.alignItems = "center"
left.style.justifyContent = "center"

right.style.display = "flex"
right.style.alignItems = "center"
right.style.justifyContent = "center"

left.style.fontSize = "80px"
right.style.fontSize = "80px"

left.addEventListener("click", function click() {
    addwith(left, right)
})
right.addEventListener("click", function click() {
    addwith(left, right)
})

left.style.backgroundColor = "blue"
right.style.backgroundColor = "red"

body.appendChild(left)
body.appendChild(right)

function addwith(element1, element2) {
    count = parseInt(element1.style.width) + 1
    element1.style.width = `${count}%`
    element1.style.innerText = `${count}%`
    element1.style.width = `${count}%`
    element1.style.innerText = `${count}%`
    element2.style.addwith = `${parseInt(element2.style.width) - 1} %`
    element2.style.innerText = `${parseInt(element2.style.width) - 1} %`

     
}


