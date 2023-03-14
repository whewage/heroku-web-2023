//$ sign indicate that this is a jQuery object
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });

    $("#show").click(function(){
      $("p").show();
    });

    //Fadeout options
    $("#button1").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });

    //Panel slidedown
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });

    //Animate
      $("#buttonAnimate").click(function(){
        $("div").animate({left: '250px'});
      });
   

    //Validation
    $("#form1").validate({
        rules: {  //Defining validation rules for each field
            name : {
              required: true,
              minlength: 3
            },
            age: {
              required: true,
              number: true,
              min: 18
            },
            email: {
              required: true,
              email: true
            },
            weight: {
              required: true,
              number: true,
              min: 0
            }
        },
        messages : { //Defining custom error messeges
          name: {
            minlength: "Name should be at least 3 characters"
          },
          age: {
            required: "Please enter your age",
            number: "Please enter your age as a numerical value",
            min: "You must be at least 18 years old"
          },
          email: {
            email: "The email should be in the format: abc@domain.tld"
          },
          weight: {
            number: "Please enter your weight as a numerical value"
          }
        }
    });
});



