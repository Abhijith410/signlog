var name_error = document.getElementById('namerror');
var email_error = document.getElementById('emailerror');
var phone_error = document.getElementById('phonerror');
var pass_error = document.getElementById('passerror');
var conf_error = document.getElementById('conferror');

        val = 1;
        function reg_validate(){
            var name = document.getElementById('fname').value;
            var mail = document.getElementById('email').value;
            var cnum = document.getElementById('mob').value;
            var pwd = document.getElementById('pwd').value;
            var conf = document.getElementById('cnfpwd').value;
  
            if(name == ""){
                name_error.innerHTML = "Please enter first name";
                val = 0;
            }
            else{
                var regex = /^[a-zA-Z\s]+$/;
                if(regex.test(name) === false) {
                    name_error.innerHTML = "Please enter a valid name";
                } 
                else {
                    val = 1;
                }
            }    

            if(mail == ""){
                email_error.innerHTML = "Please enter email address";
                val = 0;
            }
            else{
                var regex = /^\S+@\S+\.\S+$/;
                if(regex.test(mail) === false) {
                    email_error.innerHTML = "Please enter a valid Email address";
                } 
                else {
                    val = 1;
                }
            }    
            
            if(cnum == ""){
                phone_error.innerHTML = "Please enter mobile number";
                val = 0;
            }
            else{
                var regex = /^[1-9]\d{9}$/;
                if(regex.test(cnum) === false){
                    phone_error.innerHTML = "Please enter a valid 10 digit number";
                }
                else{
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
                    pass_error.innerHTML = "Please enter a valid password";
                } 
                else {
                    val = 1;
                }
            }
            
            if(conf == ""){
                conf_error.innerHTML = "Please re-enter your password";
                val = 0;
            }
            else{
                if(conf !== pwd ){
                    conf_error.innerHTML = "Passwords do not match";
                    val = 0;
                }
                else{
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

       

        
        
        