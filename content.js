// Listen for any changes to the DOM
document.addEventListener('DOMContentLoaded', function() {
  // Query all the input elements
  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    // Set the autocomplete attribute to 'off'
    inputs[i].setAttribute('autocomplete', 'off');
  }
});
