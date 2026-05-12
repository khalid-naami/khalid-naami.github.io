function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
    multilanguagePage: true
  }, 'google_translate_element');
}

// Function to clean up Google Translate UI after loading
function cleanupTranslate() {
  const checkExist = setInterval(function() {
    const translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo) {
      translateCombo.classList.add('custom-translate-select');
      
      // Add a placeholder or label if needed
      if (!document.querySelector('.translate-label')) {
        const label = document.createElement('span');
        label.className = 'translate-label';
        label.innerHTML = '🌐 ';
        translateCombo.parentNode.insertBefore(label, translateCombo);
      }
      
      clearInterval(checkExist);
    }
  }, 100);
}

document.addEventListener('DOMContentLoaded', cleanupTranslate);
