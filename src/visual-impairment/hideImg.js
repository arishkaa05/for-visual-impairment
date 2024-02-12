
const hideImg = () => {
  let closeVisual = document.getElementById("closeVisual");
  let images = document.getElementsByTagName("img");
 
  const imgOptions = document.querySelectorAll('input[name="imgOptions"]');
  Array.from(imgOptions).forEach((imgOption) => {
    imgOption.addEventListener("change", () => {
      console.log(imgOption.value);
      if (imgOption.checked) {
        Array.from(document.querySelectorAll("label.form-check-label")).forEach((label) => {
          label.classList.remove("active");
        });
        imgOption.nextElementSibling.classList.add("active");
        switch (imgOption.value) {
          case "img":
            for (let i = 0; i < images.length; i++) {
              let image = images[i];
              let container = image.previousSibling;
              if (container && container.style && container.style.backgroundColor === "white") container.parentNode.removeChild(container);
              image.style.display = "block";
            }
            break;
          case "no-img":
            for (let i = 0; i < images.length; i++) {
              let image = images[i];
              let container = image.previousSibling;
              if (container && container.style && container.style.backgroundColor === "white") container.parentNode.removeChild(container);
              image.style.display = "none";
            }
            break;
          case "border":
            for (let i = 0; i < images.length; i++) {
              let image = images[i];
              if (image.style.display === "none")  image.style.display = "block";
              let container = document.createElement("div");
              container.style.backgroundColor = "white";
              container.style.width = image.offsetWidth + "px";
              container.style.height = image.offsetHeight + "px";
              container.style.border = "2px dashed #ddd";

              let altText = document.createElement("span");
              altText.innerHTML = image.alt;
              altText.style.display = "flex";
              altText.style.justifyContent = "center";
              altText.style.alignItems = "center";
              altText.style.height = "100%";
              altText.style.fontSize = "20px";
              altText.style.backgroundColor = "transparent";
              container.appendChild(altText);

              image.style.display = "none";
              image.parentNode.insertBefore(container, image);
            }
            break;
          default:
        }
      }
    });
  }); 
  closeVisual.addEventListener("click", () => {
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      let container = image.previousSibling;
      if (container && container.style && container.style.backgroundColor === "white") container.parentNode.removeChild(container);
      image.style.display = "block";
    }
  });
};

export default hideImg;
