let isLoggingEnabled = false;
const scoring = () => {
  let closeVisual = document.getElementById("closeVisual");
  let voiceDescription = document.getElementById("voiceDescription");
  const elements = document.body.getElementsByTagName("*");
  let lastSpokenElement = null;
  let utterance = null;

  const handleMouseOver = (event) => {
    const target = event.target;
    if (target.childNodes.length === 1 && target.childNodes[0].nodeType === Node.TEXT_NODE || target.nodeName === 'IMG') {
      let content;
      if (target.nodeName === 'IMG') {
        content = target.alt || 'Изображение';
      } else {
        content = target.childNodes[0].nodeValue.trim();
      }
      if (target !== lastSpokenElement) {
        if (utterance) {
          speechSynthesis.cancel();
        }
        utterance = new SpeechSynthesisUtterance(content);
        if (!lastSpokenElement) {
          speechSynthesis.speak(utterance);
        }
        lastSpokenElement = target;
      }
    }
  }

  const handleMouseOut = (event) => {
    const target = event.target;
    if (target === lastSpokenElement) {
      speechSynthesis.cancel();
      lastSpokenElement = null;
    }
  }

  const toggleButton = document.getElementById("toggleVoice");
  const volumeIcon = toggleButton.querySelector("i");
  toggleButton.addEventListener("click", () => {
    if (isLoggingEnabled) {
      // если озвучивание уже включено, отключаем его
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("mouseover", handleMouseOver);
        elements[i].removeEventListener("mouseout", handleMouseOut);
      }
      volumeIcon.classList.remove("fa-volume-up");
      volumeIcon.classList.add("fa-volume-off");
      voiceDescription.style.display = 'none'
      let utterance = new SpeechSynthesisUtterance('Синтез речи отключен');
      speechSynthesis.speak(utterance);
      isLoggingEnabled = false;
    } else {
      // если озвучивание выключено, включаем его
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", handleMouseOver);
        elements[i].addEventListener("mouseout", handleMouseOut);
      }
      let utterance = new SpeechSynthesisUtterance('Синтез речи включен');
      speechSynthesis.speak(utterance);
      volumeIcon.classList.remove("fa-volume-off");
      volumeIcon.classList.add("fa-volume-up");
      voiceDescription.style.display = 'block'
      isLoggingEnabled = true;
    }
  });

  closeVisual.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener("mouseover", handleMouseOver);
      elements[i].removeEventListener("mouseout", handleMouseOut);
    }
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-off");
    isLoggingEnabled = false;
  });
};

export default scoring;
