

const colorPicker = document.getElementById('color-picker')
const colorScheme = document.getElementById('colorScheme')
const btnGenerateColor = document.getElementById('btn-generate-color')
const colorDisplay = document.getElementById('color-display')
/*
let api = "https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5"

fetch(api)
.then(res => res.json())
.then(data => console.log(data.colors))
*/

function colorPicked(){
    let color = colorPicker.value
    return color
    //console.log(color)
}

function modePicked(){
    let mode = colorScheme.value
    return mode
}

btnGenerateColor.addEventListener('click', function(){
    colorPicked()
    colorDisplay.style.backgroundColor = colorPicked()
    console.log(modePicked())
})
