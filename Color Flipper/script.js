let body_color = document.querySelector("body")
let red = blue = green = 0
let copy_button = document.querySelector(".copy")
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
copy_button.addEventListener('click', () => {
    console.log(red, blue, green)
})

function rgbToHex(red, green, blue) {
    var code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    var hexcode = `#${code[Math.floor(red/16)]}${code[red%16]}${code[Math.floor(green/16)]}${code[green%16]}${code[Math.floor(blue/16)]}${code[blue%16]}`
    return hexcode
}

function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
  }

copy_button.addEventListener('click', () => {
    if (copy_button.innerHTML == "Copy RGB") {
        setClipboard(`${red},${green},${blue}`)
    }
    else if (copy_button.innerHTML == "Copy Hex") {
        setClipboard(rgbToHex(red, green, blue))
    }
})