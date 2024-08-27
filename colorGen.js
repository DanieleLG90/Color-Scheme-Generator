

const colorPicker = document.getElementById('color-picker')
const colorScheme = document.getElementById('colorScheme')
const btnGenerateColor = document.getElementById('btn-generate-color')
const colorDisplay = document.getElementById('color-display')
const backChangingColor = document.getElementById('backChangingColor')

function colorPicked(){
    let color = colorPicker.value
    const cleanColor= color.substring(1)
    return cleanColor
}

btnGenerateColor.addEventListener('click', function(){
    let api = `https://www.thecolorapi.com/scheme?hex=${colorPicked()}&mode=${colorScheme.value}&count=5`
    
    fetch(api)
    .then(res => res.json())
    .then(data =>{
        let colorArr = data.colors
        let colorVal = ''
        colorArr.forEach(function(color){
            colorVal += `
                <div onclick="copyColorHex('${color.hex.value}')" class="colorElm">
                    <div class="colorBack" style="background-color:${color.hex.value} ;"></div>
                    <h2 class="colorHex">${color.hex.value}</h2>
                </div>`
        })

        colorDisplay.innerHTML = colorVal
    })
    
    setTimeout(backChanging, 1500)
    changeColor(colorPicker.value)
    backChangingColor.classList.add('animation')
    createAlert("Click on the color to copy it!", 2000);
})

const colorElm = document.getElementsByClassName('colorElm')


function copyColorHex(colorValue){
    console.log (colorValue)
    backChangingColor.style.backgroundColor = colorValue
    createAlert("Color copied!", 1000);
}

function createAlert(message, duration = 3000) {

    const alertDiv = document.createElement('div');
    alertDiv.classList.add('custom-alert');
    alertDiv.textContent = message;
  
    // Append the alert div to the body
    document.body.appendChild(alertDiv);
  
    // Set a timeout to remove the alert after the specified duration
    setTimeout(() => {
      alertDiv.remove();
    }, duration);
}

function backChanging(){
    backChangingColor.style.backgroundColor = colorPicker.value
    backChangingColor.classList.remove('animation')
}

function changeColor(color) {
    const endColor = color;
    backChangingColor.style.setProperty('--end-color', endColor);
}