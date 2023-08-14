package com.archnet.ui.front.pages;

import com.archnet.ui.front.Page;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import jsweet.dom.Event;
import jsweet.dom.HTMLInputElement;
import jsweet.lang.Function;

public class Login extends HTMLTemplateContainer{
	
	private JSInput<String> email = new JSInput<String>("email");
	private JSInput<String> password = new JSInput<String>("password");
	private JSContainer login = new JSContainer("login", "a");
	private JSContainer register = new JSContainer("register", "a");
	private JSContainer forgot = new JSContainer("forgot", "a");

	public Login(String name) {
		super(name, ""
				+ "        <div class=\"container\">\r\n"
				+ "            <div class=\"row\">\r\n"
				+ "                <div class=\"col-lg-6\">\r\n"
				+ "                    <h3>Login</h3>\r\n"
				+ "                    <div class=\"theme-card\">\r\n"
				+ "                        <form class=\"theme-form\">\r\n"
				+ "                            <div class=\"form-group\">\r\n"
				+ "                                <label for=\"email\">Email</label>\r\n"
				+ "                                <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\r\n"
				+ "                            </div>\r\n"
				+ "                            <div class=\"form-group\">\r\n"
				+ "                                <label for=\"review\">Password</label>\r\n"
				+ "                                <input type=\"password\" name=\"password\" class=\"form-control\" id=\"review\"\r\n"
				+ "                                    placeholder=\"Enter your password\" required=\"\">\r\n"
				+ "                            </div><a href=\"#\" class=\"btn btn-solid\" name=\"login\">Login</a><a name=\"forgot\"></a>\r\n"
				+ "                        </form>\r\n"
				+ "                    </div>\r\n"
				+ "                </div>\r\n"
				+ "                <div class=\"col-lg-6 right-login\">\r\n"
				+ "                    <h3>New Customer</h3>\r\n"
				+ "                    <div class=\"theme-card authentication-right\">\r\n"
				+ "                        <h6 class=\"title-font\">Create A Account</h6>\r\n"
				+ "                        <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be\r\n"
				+ "                            able to order from our shop. To start shopping click register.</p><a href=\"#\"\r\n"
				+ "                            class=\"btn btn-solid\" name=\"register\">Create an Account</a>\r\n"
				+ "                    </div>\r\n"
				+ "                </div>\r\n"
				+ "            </div>\r\n"
				+ "        </div>\r\n"
				+ "    ");
		
		addClass("login-page");
		
		email.addClass("form-control");
		email.setPlaceHolder("Email");
		email.setRequired(true);
		password.addClass("form-control");
		password.setPlaceHolder("Enter your password");
		password.setAttribute("type", "password");
		password.setRequired(true);
		login.addClass("btn btn-solid");
		login.setAttribute("href", "javascript:void(0);");
		login.setHtml("Login");
		register.setAttribute("href", "javascript:void(0);");
		register.setHtml("Create an Account");
		register.setAttribute("href", "javascript:void(0);");
		register.addClass("btn btn-solid"); 
		
		forgot.addClass("btn").setHtml("Forgot Password?").setAttribute("href", "javascript:void(0);");
		
		addChild(email);
		addChild(password);
		addChild(login);
		addChild(forgot);
		addChild(register); 
		
		login.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				try {
				email.validate();
				password.validate();
				
				String semail = email.getValue();
				String spassword = password.getValue();
				
				HTMLInputElement nati = (HTMLInputElement)email.getNative();
		
				if(semail != null && semail != "" && spassword != null && spassword != "") {
					evt.$set("email", semail);
					evt.$set("password", spassword);
					fireListener("OnLogin", evt);
				}
				}catch(Exception e) {
					HTMLInputElement nat = (HTMLInputElement)email.getNative();
					Function fn = (Function)nat.$get("reportValidity");
					fn.call(nat); 
				}
			}
		}, "click");
		
		register.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "register");
				evt.$set("label", "Create an account");
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnChangePage", evt);
				}
			}
		}, "click");
		
		
		forgot.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "forgot");
				evt.$set("label", "Forgot Password");
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnChangePage", evt);
				}
				
			}
		}, "click");
		
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnLogin", evt);
				}

			}
		}, "OnLogin");
	
	}

}
