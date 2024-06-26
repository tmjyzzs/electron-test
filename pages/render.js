const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const input = document.getElementById('input')

btn1.onclick = () => {
    alert(myApi.version)
}
btn2.onclick = () => {
    alert(input.value)
}
