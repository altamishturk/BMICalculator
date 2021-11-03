const BMIBtnElem = document.querySelector('#btn');
const weightElem = document.querySelector('#weight');
const heightElem = document.querySelector('#height');
const resultElem = document.querySelector('#results');

BMIBtnElem.addEventListener('click', BMICalculate);

function BMICalculate(e) {
    e.preventDefault();
    const weightElemIntVal = parseInt(weightElem.value);
    const heightElemIntVal = parseInt(heightElem.value);


    const BMI = weightElemIntVal / (heightElemIntVal * heightElemIntVal / 10000);

    resultElem.innerHTML = BMI.toFixed(2);


}




// let n = 16;
// let root = Math.sqrt(n);

// console.log(root);


































// const form = document.querySelector('form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if((height === '') || (height < 0) || (isNaN(height))){
//         //NaN !== NaN
//         results.innerHTML = "Please provide a valid height";

//     } else if (weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = "Please provide a valid weight";
//     } else {
//     //calculate BMI
//     const bmi = (weight / ((height*height)/10000)).toFixed(2);
//     //display the results
//     results.innerHTML = `<span>${bmi}</span>`
//     }


// });

// //notes
// //NaN !== NaN, use the isNaN() function
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

