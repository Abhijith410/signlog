var email_error = document.getElementById('emailerror');
var pass_error = document.getElementById('passerror');

        val = 1;
        function log_validate(){
            var mail = document.getElementById('email').value;
            var pwd = document.getElementById('pwd').value;
    
            if(mail == ""){
                email_error.innerHTML = "Please enter email address";
                val = 0;
            }
            else{
                var regex = /^\S+@\S+\.\S+$/;
                if(regex.test(mail) === false) {
                    email_error.innerHTML = "Please enter correct Email";
                } 
                else {
                    val = 1;
                }
            }    
                      
            if(pwd == ""){
                pass_error.innerHTML = "Please enter Password";
                val = 0;
            }
            else{
                var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/;
                if(regex.test(pwd) === false) {
                    pass_error.innerHTML = "Please enter correct password";
                } 
                else {
                    val = 1;
                }
            }

            if(val == 1){
                return true;
            }
            else{
                return false;
            }
            document.getElementById("myform").submit();
        }
        