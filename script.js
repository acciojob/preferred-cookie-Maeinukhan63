//your JS code here. If required.
// Function to get a cookie by name
function getCookie(name) {
  let cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    let [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days = 365) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Function to apply saved preferences
function applyPreferences() {
  let fontSize = getCookie('fontsize') || '16px';
  let fontColor = getCookie('fontcolor') || '#000000';

  document.documentElement.style.setProperty('--fontsize', fontSize);
  document.documentElement.style.setProperty('--fontcolor', fontColor);

  // Update form values to reflect the saved preferences
  document.getElementById('fontsize').value = parseInt(fontSize);
  document.getElementById('fontcolor').value = fontColor;
}

// Function to save preferences
function savePreferences(event) {
  event.preventDefault(); // Prevent form submission

  let fontSize = document.getElementById('fontsize').value + 'px';
  let fontColor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSize);
  setCookie('fontcolor', fontColor);

  applyPreferences(); // Apply preferences immediately
}

// Attach event listener to the form
document.querySelector('form').addEventListener('submit', savePreferences);

// Apply preferences on page load
applyPreferences();
