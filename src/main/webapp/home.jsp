<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*" %>>
<html>
    <head>
    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <title>Add to Cart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <%
	    Class.forName("com.mysql.cj.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/billblitz","root", "kk123");
		Statement stmt = conn.createStatement();
		String username = request.getParameter("username");
		ResultSet rs = stmt.executeQuery("Select * from bills where user='"+username+"';");
    
    %>
        <div class="container left">
            <div class="inner-container">
                <h1>Bill Blitz</h1>
                <img src="bill.png">
                <p>Welcome <%=username%></p>
                <input type="text" id="bill" placeholder="Bill">
                <input type="datetime-local" id="deadline" placeholder="Deadline"><br>
                <button id="add-button">Add Bill</button>
            </div>
        </div>
        <div class="container right">
            <div class="bill-container">
                <ul id="billsList">
                <% while(rs.next()){
                	out.println("<li>"+rs.getString(2)+"</li>");	
                }
                %>
                </ul>
            </div>
        </div>
        <script src="index.js" type="module"></script>
    </body>
</html>