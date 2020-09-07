sign_in_button.onclick = function (event) {
  sign_in_form.style.zIndex = '50'
  sign_in_form.style.display = 'block'
}

login_submit[0].onclick = function closeLoginForm (event) {
  sign_in_form.style.display = 'none'
   sign_in_form.style.zIndex = '-50'
}

register_now_button.onclick = function (event) {
	sign_in_form.style.display = 'none'
	this_register_form.style.display = 'block'
}


  var specifiedElement = document.getElementById('register_form');
   this_register_form.onclick = function(event) {
    var isClickInside = specifiedElement.contains(event.target);
    if (!isClickInside) {
        this_register_form.style.display = 'none'
}};

avatar.onchange = (event) => {
  user_picture.src = `${URL.createObjectURL(event.target.files[0])}`}
 