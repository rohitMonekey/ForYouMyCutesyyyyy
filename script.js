document.addEventListener('DOMContentLoaded', () => {
    const popupBtns = document.querySelectorAll('.popup-btn');
    const smallPopup = document.getElementById('small-popup');
    const bigPopup = document.getElementById('big-popup');
    const popupMessage = document.getElementById('popup-message');
    const bigPopupBtn = document.querySelector('.big-popup-btn');
  
    // Small Popup Logic
    popupBtns.forEach(button => {
      button.addEventListener('click', () => {
        popupMessage.textContent = button.getAttribute('data-message');
        smallPopup.style.display = 'flex';
      });
    });
  
    document.querySelectorAll('.close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        smallPopup.style.display = 'none';
        bigPopup.style.display = 'none';
      });
    });
  
    // Big Popup Logic
    bigPopupBtn.addEventListener('click', () => {
      bigPopup.style.display = 'flex';
    });
  
    // Close Popups on Outside Click
    [smallPopup, bigPopup].forEach(popup => {
      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          popup.style.display = 'none';
        }
      });
    });
  });
  