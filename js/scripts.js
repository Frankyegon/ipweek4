function Pizza (name,size,crust,toppings,number,delivery) {
  this.pname = name;
  this.psize = size;
  this.pcrust = crust;
  this.ptoppings = toppings;
  this.pnumber = number;
  this.pdelivery = delivery;
}
Pizza.prototype.orderDetails= function(){
  return this.pname + " , " + this.psize + " , "+ this.pcrust + " , " + this.ptoppings + " , " +  
  this.pnumber + " , " +  this.pdelivery;
}
  
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var namePizza= $("input#first-name").val();
      var sizePizza= $("input#first-size").val();
      var crustPizza= $("input#first-crust").val();
      var toppingsPizza= $("input#first-toppings").val();
      var numberPizza= $("input#first-number").val();
      var deliveryPizza= $("input#first-delivery").val();

      var newPizza = new Pizza(namePizza,sizePizza,crustPizza,toppingsPizza,numberPizza,deliveryPizza);
    
      //alert(newPizza.orderDetails());
      $("ul#orders").append("<li><span class= 'order'>" + newPizza.orderDetails() + "</span></li>");

      $("input#first-name").val("");
      $("input#first-size").val("");
      $("input#first-crust").val("");
      $("input#first-toppings").val("");
      $("input#first-number").val("");
      $("input#first-delivery").val("");

      $(".order").last().click(function() {
       $("#show-order").show();
       $("#show-order h2").text(newPizza.orderDetails());
      $(".name-name").text(newPizza.pname);
      $(".size-name").text(newPizza.psize);
      $(".crust-name").text(newPizza.pcrust);
      $(".toppings-name").text(newPizza.ptoppings);
      $(".number-name").text(newPizza.pnumber);
      $(".delivery-name").text(newPizza.pdelivery);
      });
     
  })
});
