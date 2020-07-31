function Contact(size, crust) {
  this.sizeName = size;
  this.crustName = crust;
}

Contact.prototype.fullName = function() {
  return this.sizeName + " " + this.crustName;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedsizeO = $("input#new-size").val();
    var inputtedcrustO = $("input#new-crust").val();

    var newContact = new Contact(inputtedsizeName, inputtedcrustName);
    $("ul#orders").append("<li><span class='order'>" + newContact.sizeName() + "</span></li>");

    $("input#new-size").val("");
    $("input#new-crust").val("");
     $(".order").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newContact.fullName());
      $(".size-name").text(newContact.sizeO);
      $(".crust-name").text(newContact.crustO);
     }); 
  });
  
}); 