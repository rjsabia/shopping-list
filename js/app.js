$(document).ready(function() {
// add item to ships Manifest
  $('#js-shopping-list-form').submit(function(event) {
    // stops default browser behavior for form submission,
    // since we don't actually want to submit to server
    event.preventDefault();

    // adds new "li" to the Manifest
    $('.shopping-list').append(
      '<li>' +
        '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    );
    // remove the submitted item from the form input
    $(this)[0].reset(); 
  });

  // Delets item from list when delete button clicked
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    // `this` refers to the `.shopping-item-delete` element that was clicked.
    // we travel up the document tree to get the nearest parent element
    // that"s an `li`
    $(this).closest('li').remove();
  });

  // This is where we check items so that they get the strike through
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){

    // tis allows to toggle through the added items in the input bar
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

})
