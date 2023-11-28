//fnção de resposta para salvar a resposta da pessoa que aceita os cookies de site
if (!localStorage.getItem("cookiesAccepted")) { 
  var cookieMessage = document.getElementById('cookie-notification');  
  var closeCookie = document.getElementById('cookie-notification-close');
  
  cookieMessage.style.display = 'block';  
  closeCookie.addEventListener("click", function(e) {  
    e.preventDefault();
    localStorage.setItem("cookiesAccepted", true);
    
    cookieMessage.style.display = 'none';
  });
}

function bannerSwitcher() {
  next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
  if (next.length) next.prop('checked', true);
  else $('.sec-1-input').first().prop('checked', true);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function() {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(bannerSwitcher, 5000)
});

