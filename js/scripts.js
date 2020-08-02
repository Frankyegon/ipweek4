function Pizza (name,size,crust,toppings,number,delivery) {
  this.pname = name;
  this.psize = size;
  this.pcrust = crust;
  this.ptoppings = toppings;
  this.pnumber = number;
  this.pdelivery = delivery;
  }
  Pizza.protoype.orderDetails= function(){
    return this.pname;
  };
  
  
  
  $(document).ready(function(){
    $("form#new-order").submit(function(event) {
      event.preventDefault();

      var namePizza= $("input#first-name").val();
      var sizePizza= $("input#first-size").val();
      var crustPizza= $("input#first-crust").val();
      var toppingsPizza= $("input#first-toppings").val();
      var numberPizza= $("input#first-number").val();
      var deliveryPizza= $("input#first-delivery").val();

      var newPizza = new Pizza(namePizza,sizePizza,crustPizza,toppingsPizza,numberPizza,deliveryPizza);
    
      alert("huraaa");
      //$("ul#orders").text(newPizza.orderDetails());

      //$("input#name").val("");
     // $("input#size").val("");
      //$("input#crust").val("");
      //$("input#toppings").val("");
      //$("input#number").val("");
     // $("input#delivery").val("");

      //$(".order").last().click(function() {
       // $("#show-order").show();
        //$("#show-order h2").text(newPizza.name());
       // $(".name").text(newPizza.name);
        //$(".size").text(newPizza.size);
       // $(".crust").text(newPizza.crust);
       // $(".toppings").text(newPizza.toppings);
       // $(".number").text(newPizza.number);
       // $(".delivery").text(newPizza.delivery);
      //});
     
  })
});
