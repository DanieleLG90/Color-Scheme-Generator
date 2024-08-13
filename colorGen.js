

const colorPicker = document.getElementById('color-picker')
const btnGenerateColor = document.getElementById('btn-generate-color')
const colorDisplay = document.getElementById('color-display')
/*
fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5")
.then(res => res.json())
.then(data => console.log(data))
*/

function colorPicked(){
    let color = colorPicker.value
    return color
    //console.log(color)
}

btnGenerateColor.addEventListener('click', function(){
    colorPicked()
    colorDisplay.style.backgroundColor = colorPicked()
})
