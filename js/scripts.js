//ui logic
$(document).ready(function () {
  const contacts = [];

  $("form#name-form").submit(function (e) {
    e.preventDefault();
    const name = $("input#name-input").val();
    const type = $("input:radio[name=category]:checked").val();
    // const options = $('input:checkbox[name=options]:checked').val();
    const email = $("input#email-input").val();
    const phone = $("input#phone-input").val();

    $("#name-display").text(name);
    $("#type-display").text(type);
    $("#email-display").text(email);
    $("#phone-display").text(phone);

    $("#confirmation").show();
    $("#table").hide();
    contacts.push({ name, type, email, phone });
  });

  $("button#yes-button").click(function () {
    $("#confirmation").hide();
    $("#name-form").trigger("reset");

    const timeStamp = Date.now();
    const newContact = contacts[contacts.length - 1];
    const contactRow = `<tr>
        <th>${newContact.name}</th>
        <th>${newContact.type}</th>
        <th>${newContact.email}</th>
        <th>${newContact.phone}</th>
        <th>
          <button class="btn btn-danger" id=${timeStamp}>Remove Contact</button>
        </th>
      </tr>`;
    $("#table").append(contactRow);
    $("#table").show();

    $(`#${timeStamp}`).click(function () {
      $(this).parent().parent().remove();
    });
  });

  $("button#no-button").click(function () {
    $("#confirmation").hide();
  });
});
