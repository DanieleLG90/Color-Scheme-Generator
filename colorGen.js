

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
    const cleanColor= color.substring(1)
    
}

btnGenerateColor.addEventListener('click', function(){
    let api = `https://www.thecolorapi.com/scheme?hex=${colorPicked()}&mode=${colorScheme.value}&count=5`
    
    
    fetch(api)
    .then(res => res.json())
    .then(data =>{
        console.log(data.colors)
        let colorArr = data.colors
        let colorVal = ''
        colorArr.forEach(function(color){
            colorVal += `
                <div class="colorElm">
                    <div class="colorBack" style="background-color:${color.hex.value} ;"></div>
                    <h2 class="colorHex">${color.hex.value}</h2>
                </div>`
            
            console.log(color.hex.value)
            console.log(colorVal)
        })
        colorDisplay.innerHTML = colorVal
    })
    
})
