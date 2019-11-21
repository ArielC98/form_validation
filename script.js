function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submit-button").click(function () {
  var errorMessage="";
  //Email field
  if($("#email").val()!==""){
    if(isEmail($("#email").val())==false){

      errorMessage+="<p>Your email address is not valid </p>";

    }
  }
  else{
    errorMessage+="<p>The email field is empty </p>";
  }

  //Phone field
  if($("#phone").val()!==""){
    if($.isNumeric($("#phone").val())==false){
      errorMessage+="<p>Your phone number is not numeric </p>";
    }
  }
  else{
    errorMessage+="<p>The phone field is empty </p>";
  }

  //Password field
  if($("#password").val()!==""){
    if($("#password").val()!=$("#confirm-password").val()){
      errorMessage+="<p>Your passwords don't match </p>";
    }
  }
  else{
    errorMessage+="<p>The password field is empty</p>";
  }

  //Error and success messages 
  if(errorMessage!=""){
    $("#successMessage").css("display","none");
    $("#errorMessage").html(errorMessage);
  }
  else{
    $("#successMessage").css("display","block");
    $("#errorMessage").css("display","none");
  }
});
