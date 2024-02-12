
const openVisual = () => {
  const elements = document.body.getElementsByTagName("*");
  const visualImpairment = document.getElementById("visualImpairment"); 
  const tags = visualImpairment.querySelectorAll("*");
  let openVisual = document.getElementById("openVisual");
  let closeVisual = document.getElementById("closeVisual");
  const impairments = document.querySelector(".visual-impairment");
  let images = document.getElementsByTagName('img');
  

  openVisual.addEventListener("click", () => {
    localStorage.setItem('visual', 'visual-inpairment');
    openVisual.style.display = "none";
    document.body.style.filter = "grayscale(100%)";
    impairments.style.display = "block";
    tags.forEach(tag => {
      tag.setAttribute("data-marked", "true");
    });
    for (var i = 0; i < images.length; i++) {
      if (!images[i].alt) {
        images[i].alt = 'Изображение';
      }
    }
  });

  closeVisual.addEventListener("click", () => {
    localStorage.removeItem('visual');
    openVisual.style.display = "block";
    document.body.style.filter = "grayscale(0%)";
    impairments.style.display = "none";
    for (let i = 0; i < elements.length; i++) {
      const originalSize = elements[i].getAttribute("data-original-font-size");
      if (originalSize) {
        elements[i].style.fontSize = "";
        elements[i].removeAttribute("data-original-font-size");
      }
    } 
  });
};

export default openVisual;
