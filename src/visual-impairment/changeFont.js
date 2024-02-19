const changeFont = () => {
  
let isEnabledBraille = false;
const toggleBraille = document.getElementById("toggleBraille");
const toggleSerifOn = document.getElementById("toggleSerifOn");
const toggleSerifOff = document.getElementById("toggleSerifOff");
const elementsForChangeFontSize = document.body.getElementsByTagName("*");
const closeVisualBtn = document.getElementById("closeVisual");


toggleBraille.addEventListener("click", () => {
  if (isEnabledBraille) {
    for (var i = 0; i < elementsForChangeFontSize.length; i++) {
      if (elementsForChangeFontSize[i].getAttribute("data-marked") === "true") continue;
      elementsForChangeFontSize[i].style.fontFamily = "";
    }
    isEnabledBraille = false;
  } else {
    for (var i = 0; i < elementsForChangeFontSize.length; i++) {
      if (elementsForChangeFontSize[i].getAttribute("data-marked") === "true") continue;
      elementsForChangeFontSize[i].style.fontFamily = "Braille";
    }
    isEnabledBraille = true;
  }
});

toggleSerifOn.addEventListener("click", () => {
  for (var i = 0; i < elementsForChangeFontSize.length; i++) {
    if (elementsForChangeFontSize[i].getAttribute("data-marked") === "true"  || elementsForChangeFontSize[i].id === 'header') continue
    elementsForChangeFontSize[i].style.fontFamily = "FontAwesome";
  }
});

toggleSerifOff.addEventListener("click", () => {
  for (var i = 0; i < elementsForChangeFontSize.length; i++) {
    if (elementsForChangeFontSize[i].getAttribute("data-marked") === "true") continue;
    elementsForChangeFontSize[i].style.fontFamily = '';
  }
});

closeVisualBtn.addEventListener("click", () => {
  for (var i = 0; i < elementsForChangeFontSize.length; i++) {
    if (elementsForChangeFontSize[i].getAttribute("data-marked") === "true") continue;
      elementsForChangeFontSize[i].style.fontFamily = '';
  }
  isEnabledBraille = false;
});

}

export default changeFont