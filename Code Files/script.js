document.querySelector(".button-1").addEventListener("click", increse)
document.querySelector(".button-2").addEventListener("click", decrese)
document.querySelector(".button-3").addEventListener("click", reset)

let count = 0

function increse() {
    let x = document.getElementById("text")
        x.innerText = count + 1
        count++
}

function decrese() {
    let y = document.getElementById("text")
        y.innerText = count - 1
        count--
}

function reset() {
    let z = document.getElementById("text")
    if (count > 0 || count < 0)
    {
        count = 0
        z.innerText = count
    }
}
