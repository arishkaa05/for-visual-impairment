const openVisual = () => {
  const elements = document.body.getElementsByTagName("*");
  const visualImpairment = document.getElementById("visualImpairment");
  const tags = visualImpairment.querySelectorAll("*");
  const closeVisual = document.getElementById("closeVisual");
  const impairments = document.querySelector(".visual-impairment");
  const images = document.getElementsByTagName("img");
  const openVisualButtons = document.querySelectorAll(".openVisual");


  const increseFontSise = () => {
    for (let i = elements.length - 1; i >= 0; i--) {
      if (elements[i].getAttribute("data-marked") === "true") continue;
      const fontSize = window.getComputedStyle(elements[i], null).getPropertyValue("font-size");
      let currentSize = parseFloat(fontSize);
      if (!elements[i].hasAttribute("data-original-font-size")) {
        elements[i].setAttribute("data-original-font-size", currentSize);
      }
      elements[i].style.fontSize = currentSize * 1.2 + "px";
    }
  } 

  const openVisual = () => {
    localStorage.setItem("visual", "visual-inpairment");
    if (openVisualButtons)
      openVisualButtons.forEach((button) => {
        button.style.display = "none";
      });
    document.body.style.filter = "grayscale(100%)";
    impairments.style.display = "block";
    document.body.setAttribute('data-style', 'eye');  
    tags.forEach((tag) => {
      tag.setAttribute("data-marked", "true");
    });
    increseFontSise();
    for (var i = 0; i < images.length; i++) {
      if (!images[i].alt) {
        images[i].alt = "Изображение";
      }
    }
  };

  closeVisual.addEventListener("click", () => {
    localStorage.removeItem("visual");
    if (openVisualButtons)
      openVisualButtons.forEach((button) => {
        button.style.display = "block";
      });
    document.body.style.filter = "grayscale(0%)";
    document.body.setAttribute('data-style', 'default');  
    impairments.style.display = "none";
    for (let i = 0; i < elements.length; i++) {
      const originalSize = elements[i].getAttribute("data-original-font-size");
      if (originalSize) {
        elements[i].style.fontSize = "";
        elements[i].removeAttribute("data-original-font-size");
      }
    }
  });

  if (openVisualButtons) {
    openVisualButtons.forEach((button) => {
      button.addEventListener("click", openVisual);
    });
  }

  let store = localStorage.getItem("visual");
  if (store) {
    openVisual();
  }
};

export default openVisual;
