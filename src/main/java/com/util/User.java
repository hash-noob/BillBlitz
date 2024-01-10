package com.util;

import jakarta.servlet.http.HttpSession;

public class User {
	private String name;
	private String role;
	
	public boolean isLoggedIn(HttpSession session) {
		if(session.getAttribute("role") != null)
			return true;
		return false;
	}
	
	public boolean logout(HttpSession session) {
		session.removeAttribute("role");
		session.invalidate();
		return true;
	}
}
