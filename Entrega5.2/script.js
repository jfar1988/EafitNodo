const calculateArea = () => {
  let radio = document.getElementById("radio").value;

  let area = (Math.PI * radio ** 2).toFixed(2);

  let perimeter = (2 * radio * Math.PI).toFixed(2);

  let resultArea = (document.getElementById(
    "result--area"
  ).textContent = `El área es: ${area} cm²`);

  let resultPerimeter = (document.getElementById(
    "result--perimeter"
  ).textContent = `El perímetro es: ${perimeter} cm`);

  return resultArea, resultPerimeter;
};
