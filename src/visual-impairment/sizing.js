const changeFontSize = () => {
  const elements = document.body.getElementsByTagName("*");
  let incrementFontSize = document.getElementById("incrementFontSize");
  let decrementFontSize = document.getElementById("decrementFontSize");

  incrementFontSize.addEventListener("click", () => {
    for (let i = elements.length - 1; i >= 0; i--) {
      if (elements[i].getAttribute("data-marked") === "true") continue;
      const fontSize = window.getComputedStyle(elements[i], null).getPropertyValue("font-size");
      let currentSize = parseFloat(fontSize);
      let newSize = currentSize + 1;
      if (newSize > parseFloat(elements[i].getAttribute("data-original-font-size")) * 2 || newSize > 42) {
        continue;
      }
      elements[i].style.fontSize = newSize + "px";
    }
  });

  decrementFontSize.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("data-marked") === "true") continue;
      const fontSize = window.getComputedStyle(elements[i], null).getPropertyValue("font-size");
      let currentSize = parseFloat(fontSize);
      let newSize = currentSize - 1;
      if (newSize < parseFloat(elements[i].getAttribute("data-original-font-size"))) continue;

      elements[i].style.fontSize = newSize + "px";
    }
  });
};
export default changeFontSize;
