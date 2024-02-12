const changeFont = () => {
  let isEnabledBraille = false;
  let isEnabledSerif = false;
  let toggleBraille = document.getElementById("toggleBraille"); 
  let toggleSerif = document.getElementById("toggleSerif"); 
  const elements = document.body.getElementsByTagName("*");
  let closeVisual = document.getElementById("closeVisual");


  toggleBraille.addEventListener("click", () => {
    if (isEnabledBraille) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("data-marked") === "true") continue;
        elements[i].style.fontFamily = "";
      }
      isEnabledBraille = false;
    } else {
      for (var i = 0; i < elements.length; i++) {      
        if (elements[i].getAttribute("data-marked") === "true") continue;
        elements[i].style.fontFamily = "Braille";
      }
      isEnabledBraille = true;
    }
  });

  toggleSerif.addEventListener("click", () => {
    if (isEnabledSerif) {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("data-marked") === "true") continue;
        elements[i].style.fontFamily = "";
      }
      toggleSerif.textContent = "Без засечек";
      isEnabledSerif = false;
    } else {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("data-marked") === "true") continue;
        elements[i].style.fontFamily = 'FontAwesome';
      }
      toggleSerif.textContent = "С засечками";
      isEnabledSerif = true;
    }
  });

  closeVisual.addEventListener("click", () => {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("data-marked") === "true") continue;
        elements[i].style.fontFamily = '';
    }
    toggleSerif.textContent = "Без засечек";
    isEnabledBraille = false;
    isEnabledSerif = false;
  });
}

export default changeFont