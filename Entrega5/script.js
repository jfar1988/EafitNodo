const calculateArea = () => {
  let base = document.getElementById("base").value;
  let height = document.getElementById("height").value;

  let area = base * height;

  let perimeter = base * 2 + height * 2;

  let diagonal = Math.sqrt(base ** 2 + height ** 2).toFixed(2);

  let resultArea = (document.getElementById(
    "result--area"
  ).textContent = `El área es: ${area} cm²`);

  let resultPerimeter = (document.getElementById(
    "result--perimeter"
  ).textContent = `El perímetro es: ${perimeter} cm`);

  let resultDiagonal = (document.getElementById(
    "result--diagonal"
  ).textContent = `La diagonal es: ${diagonal} cm`);

  return resultArea, resultPerimeter, resultDiagonal;
};
