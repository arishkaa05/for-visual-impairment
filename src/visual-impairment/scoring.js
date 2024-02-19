const scoring = () => {
  const toggleVoiceOn = document.getElementById("toggleVoiceOn");
  const toggleVoiceOff = document.getElementById("toggleVoiceOff");

  const closeVisual = document.getElementById("closeVisual");
  const voiceDescription = document.getElementById("voiceDescription");
  const elements = document.body.getElementsByTagName("*");
  let lastSpokenElement = null;
  let utterance = null; 

  const handleMouseOver = (event) => {
    const target = event.target;
    if ((target.childNodes.length === 1 && target.childNodes[0].nodeType === Node.TEXT_NODE) || target.nodeName === "IMG") {
      let content;
      if (target.nodeName === "IMG") {
        content = target.alt || "Изображение";
      } else {
        content = target.childNodes[0].nodeValue.trim();
      }
      if (target !== lastSpokenElement) {
        if (utterance) {
          speechSynthesis.cancel();
        }
        utterance = new SpeechSynthesisUtterance(content);
        utterance.lang = "ru-RU"; 
        if (!lastSpokenElement) {
          speechSynthesis.speak(utterance);
        }
        lastSpokenElement = target;
      }
    }
  };

  const handleMouseOut = (event) => {
    const target = event.target;
    if (target === lastSpokenElement) {
      speechSynthesis.cancel();
      lastSpokenElement = null;
    }
  };

  toggleVoiceOff.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener("mouseover", handleMouseOver);
      elements[i].removeEventListener("mouseout", handleMouseOut);
    }
    voiceDescription.style.display = "none";
    let utterance = new SpeechSynthesisUtterance("Синтез речи отключен");
    utterance.lang = "ru-RU"; 
    if (!lastSpokenElement) {
      speechSynthesis.speak(utterance);
    }
    speechSynthesis.speak(utterance);
  });

  toggleVoiceOn.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mouseover", handleMouseOver);
      elements[i].addEventListener("mouseout", handleMouseOut);
    }
    let utterance = new SpeechSynthesisUtterance("Синтез речи включен");
    utterance.lang = "ru-RU"; 
    speechSynthesis.speak(utterance);
    voiceDescription.style.display = "block";
  });

  closeVisual.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener("mouseover", handleMouseOver);
      elements[i].removeEventListener("mouseout", handleMouseOut);
    }
  });
};

export default scoring;
