let body_color = document.querySelector("body")
let red = blue = green = 0
let copy_rgb_button = document.querySelector(".copyrgb")
let copy_hex_button = document.querySelector(".copyhex")
let generate_button = document.querySelector(".generate")
let rgb = document.querySelector(".rgb")
let hex = document.querySelector(".hex")

generate_button.addEventListener('click', () => {
    red = Math.floor(Math.random()*255)+1
    blue = Math.floor(Math.random()*255)+1
    green = Math.floor(Math.random()*255)+1
    body_color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    rgb.innerHTML = `${red},${green},${blue}`
    hex.innerHTML = rgbToHex(red, green, blue)
})

function rgbToHex(red, green, blue) {
    var code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    var hexcode = `#${code[Math.floor(red/16)]}${code[red%16]}${code[Math.floor(green/16)]}${code[green%16]}${code[Math.floor(blue/16)]}${code[blue%16]}`
    return hexcode
}

copy_rgb_button.addEventListener('click', () => {
    rgb.value = `${red},${green},${blue}`
    navigator.clipboard.writeText(rgb.value)
    alert("Copying RGB code :" + rgb.value)
})
copy_hex_button.addEventListener('click', () => {
    hex.value = rgbToHex(red, green, blue)
    navigator.clipboard.writeText(hex.value)
    alert("Copying HEX code : " + hex.value)
})
