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

function Pizza (name,size,delivery,price) {
  this.name=name;
  this.size=size;
  this.crust = crust;
  this.toppings = toppings;
  this.number = number;
  this.delivery = delivery;
  }
  
  var smallPizza1= new Pizza("small Pizza","small","no",50);
  var smallPizza2= new Pizza("small Pizza","small","yes",100);
  
  var mdPizza1 = new Pizza("Medium Pizza","medium","no",150);
  var mdPizza1 = new Pizza("Medium Pizza","medium","no",150);
  
  $do