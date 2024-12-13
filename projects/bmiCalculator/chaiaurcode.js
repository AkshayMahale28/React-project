// let form =document.querySelector('form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     const height=parseInt(document.getElementById("height").value)
//     const weight=parseInt(document.getElementById("weight").value)
//     const results=document.getElementById("results")

//     if (height==='' || height<0 || isNaN(height)) {
//         results.innerHTML=`Plz enter the valid height" ${height}`;

//     }
//     else if (weight==='' || weight<0 || isNaN(weight)) {
//         results.innerHTML=`Plz enter the valid weight" ${weight}`;
//     }
//     else{
//         const bmi=(weight / ((height*height)/10000)).toFixed(2)

//         // show results
//         results.innerHTML=`<span>${bmi}</span`
//     }
// })

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const results = document.getElementById("results");

  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height`;
    heightInput.focus();
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight`;
    weightInput.focus();
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    results.innerHTML = `<span>BMI: ${bmi} (${category})</span>`;
  }
});
