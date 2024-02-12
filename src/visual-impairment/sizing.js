const changeFontSize = () => { 
  const elements = document.body.getElementsByTagName("*");
  let incrementFontSize = document.getElementById("incrementFontSize");
  let decrementFontSize = document.getElementById("decrementFontSize");



  incrementFontSize.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("data-marked") === "true") continue;
      const fontSize = window.getComputedStyle(elements[i], null).getPropertyValue("font-size");
      let currentSize = parseFloat(fontSize);
      if (!elements[i].hasAttribute("data-original-font-size")) {
        elements[i].setAttribute("data-original-font-size", currentSize);
      }
      elements[i].style.fontSize = currentSize + 1 + "px";
    }
  });

  decrementFontSize.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("data-marked") === "true") continue;
      const fontSize = window.getComputedStyle(elements[i], null).getPropertyValue("font-size");
      let currentSize = parseFloat(fontSize);
      elements[i].style.fontSize = currentSize - 1 + "px";
    }
  });
};
export default changeFontSize;
