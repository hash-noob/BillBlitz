

import java.io.*;
import java.sql.*;

import jakarta.servlet.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.*;




/**
 * Servlet implementation class Validator
 */
@WebServlet("/Validator")
public class Validator extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public PrintWriter out;
    
    public Validator() {
    	
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		out = response.getWriter();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/billblitz","root", "kk123");
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("Select * from users where username='"+username+"' and password='"+password + "';");
			if(rs != null){
				rs.next();
				if(rs.getString(3).equals("Admin")) {
					out.println("<h1>Welcome, admin</h1>");
				}
				else {
					out.println("<h1>Welcome, user</h1>");
				}
			}
		} catch (SQLException | ClassNotFoundException e) {
			out.println("<h1>Welcome, incorrect password</h1>");
			request.setAttribute("error","true");
			RequestDispatcher dispatch = request.getRequestDispatcher("/login.jsp");
			dispatch.forward(request, response);
			e.printStackTrace();
		}
    }
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}