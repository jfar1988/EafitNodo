fetch("imagesData.json")
  .then((response) => response.json())
  .then((data) => {
    data.images.forEach((imageData, index) => {
      const imageElement = document.getElementById(`image${index + 1}`);
      if (imageElement) {
        imageElement.src = imageData.src;
      }
    });
  })
  .catch((error) => {
    console.log("Error al cargar el JSON", error);
  });
