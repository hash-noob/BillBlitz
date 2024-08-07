<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Login </title>
         <!-- Cool Google Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap" rel="stylesheet">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="login.css">
    </head>
    <body>
        
        <div class="container">
            <div class="frame">
                <div class="nav">
                    <ul class="links">
                        <li class="signin-active"><a class="btn">Sign in</a></li>
                        <li class="signup-inactive"><a class="btn">Sign up </a></li>
                    </ul>
                </div>
                <div>
                    <form class="form-signin" action="Validator" method="post" name="form">
                        <label for="username">Username</label>
                        <input class="form-styling" type="text" name="username" placeholder=""/>
                        <label for="password">Password</label>
                        <input class="form-styling" type="text" name="password" placeholder=""/>
                        <input type="checkbox" id="checkbox"/>
                        <label for="checkbox" ><span class="ui"></span>Keep me signed in</label>
                        <input type="submit" class="btn-signin">
                       <% if(request.getAttribute("error")!=null){
                    	   out.println("<p class=\"error\">Invalid credentials</p>");
                       }%>
                    </form>
                
                    <form class="form-signup" action="CreateUser" method="post" name="form">
                        <label for="fullname">Full name</label>
                        <input class="form-styling" type="text" name="fullname" id="name" placeholder=""/>
                        <label for="email">Email</label>
                        <input class="form-styling" type="text" name="email" id="email" placeholder=""/>
                        <label for="password">Password</label>
                        <input class="form-styling" type="text" name="password" id="pass" placeholder=""/>
                        <label for="confirmpassword">Confirm password</label>
                        <input class="form-styling" type="text" name="confirmpassword" id="cpass" placeholder=""/>
                        <input type="submit" class="btn-signup"/>
                    </form>
            
               </div>
           </div>
        </div>
    </body>


 
    
    <script src="/src/main/webapp/test/index.js"></script>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="login.js" type="module"></script>

</html>