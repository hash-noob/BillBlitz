

import java.io.*;
import java.sql.*;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.util.regex.*;


/**
 * Servlet implementation class CreateUser
 */
@WebServlet("/CreateUser")
public class CreateUser extends HttpServlet {
	private static final long serialVersionUID = 1L;

    
    public CreateUser() {
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
//		String cpassword = request.getParameter("confirmpassword");
		String email = request.getParameter("email");
		
		PrintWriter out = response.getWriter();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/billblitz","root", "root123");
			
			Statement stmt = conn.createStatement();
			
			ResultSet rs = stmt.executeQuery("Select * from testlogin where username='" + username + "';");
			
			if(!rs.next()) {
			
				PreparedStatement p = conn.prepareStatement("Insert into testlogin values(?,?,?,?);");
				
				p.setString(1, username);
				p.setString(2, password);
				p.setString(3, "user");
				p.setString(4, email);
				
				p.execute();
				
				ResultSet rs1 = stmt.executeQuery("Select * from testlogin where username='" + username + "';");
				
				if(!rs1.next()) {
					out.println("<script>alert(\"Internal server error, try again later..!\");</script>");
				}
				else {
					out.println("<script>alert(\"User Created...!Refresh and Login...\")");
				}
			}
			else {
				out.println("<script>alert(\"username already exist..!\");</script>");
			}
		}
		catch(Exception e) {
			
			e.printStackTrace();
		}
			
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	

}
