function calculateTriangleArea(){
    // get Triangle base value#
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base)

     // get Triangle hight value#
    const hightField = document.getElementById('triangle-hight');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText)
    console.log(hight)
    
    // calculate Area
    const area = 0.5 * base * hight
    console.log(area)

    // show area 
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area
}

function calculateRectangleArea(){
     // get Rectangle base value#
     const widthField  = document.getElementById('rectangle-width')
     const widthValueText = widthField.value;
     const width  = parseFloat(widthValueText)
     console.log(width)

    //  get Rectangle length
    const rectangleField  = document.getElementById('rectangle-length')
    const lengthValueText = rectangleField.value;
    const length = parseFloat(lengthValueText);
    console.log(length)

     // calculate Area
    const area = width * length
    

    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area

}
// reusable function >> reduce duplicate code
function calculateParallelogramArea(){
    
    const base = getInputValue('parallelogram-base')
    console.log(base)

    const hight  = getInputValue('parallelogram-hight')
    console.log(hight)

    const area = base * hight;
    setElementInnerText('parallelogram-area', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius')
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area)
}
// reusable get inout value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText =  inputField.value;
    const value = parseFloat(inputValueText)
    return value 
}

// reusable set span, p , div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area
}
