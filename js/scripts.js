function Contact(size, crust) {
  this.sizeName = size;
  this.crustName = crust;
}

Contact.prototype.fullName = function() {
  return this.sizeName + " " + this.crustName;
}

  $(document).ready(function() {
   $("form#new-order").submit(function(event) {
     event.preventDefault();

     var inputtedSizeName = $("input#new-size-name").val();
     var inputtedCrustName = $("input#new-crust-name").val();

     var newContact = new Contact(inputtedSizeName, inputtedCrustName);
     $("ul#orders").text(newContact.fullName());

     $("input#new-size-name").val("");
     $("input#new-crust-name").val("");
     $(".order").last().click(function() {
       $("#show-order").show();
       $("#show-order h2").text(newContact.fullName());
       $(".size-name").text(newContact.sizeName);
       $(".crust-name").text(newContact.crustName);
      }); 
   });
  
 }); 