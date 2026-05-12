function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

// Ensure the page doesn't shift down when translate bar loads
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.innerHTML = `
    body { top: 0 !important; }
    .skiptranslate iframe { display: none !important; }
  `;
  document.head.appendChild(style);
});
