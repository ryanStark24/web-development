$(document).ready(function() {

    // $('div.form').hide();
   
    $('a#SignUp').on('click',function() {
    	
    	 
    	 $.get("http://localhost/community/html/signup.html", function (data) {
                    $("div.form").append(data);
                });
    	
    });

    $('a#SignIn').on('click',function() {
    	
    	 $.get("http://localhost/community/html/signin.html", function (data) {
                    $("li.dropdown").append(data);
                });
    });
  


    $('.carousel').carousel();
   
})