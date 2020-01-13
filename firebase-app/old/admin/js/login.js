

firebase.auth().onAuthStateChanged( (user) => {
    if(user){
        window.location.replace("./portal.html")
    }
})

$("#submitlogin").click(function(e){
    e.preventDefault();
    var email = $("#emailInput").val();
    var password = $("#passwordInput").val();

    var valid = true;
    if(!email){
        $("#emailError").addClass(`invalid-feedback`);
        $("#emailError").text("Please enter a valid email");
        valid = false;
    }
    if(!password){
        $("#passwordError").addClass(`invalid-feedback`);
        $("#passwordError").text("Please enter a password");
        valid = false;
    }
    $("#loginform").addClass(`was-validated`)

    if(valid){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( (result) => {
            console.log(result.user);
            window.location.replace("./portal.html")
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
            var message = error.message;
            switch(error.code){
                case "auth/user-not-found":
                case "auth/wrong-password":
                    message = "Password is incorrect, or account does not exist. Contact MBC if this should not be the case"
                    break;
                default:
                    message = "There was an issue signing in"
            }
            $("#loginError").text(message)
          });
    }
   
  });


  reset = function(){
    $("#emailInput").val("")
    $("#passwordInput").val("")
  }

