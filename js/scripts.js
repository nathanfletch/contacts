//ui logic
$(document).ready(function () {
  $('form#name-form').submit(function (e) {
    e.preventDefault();
    const name = $('input#name-input').val();
    const contactType = $('input:radio[name=category]:checked').val();
    // const options = $('input:checkbox[name=options]:checked').val();
    const email = $('input#email-input').val();
    const phone = $('input#phone-input').val();
    console.log(contactType);

  })
})