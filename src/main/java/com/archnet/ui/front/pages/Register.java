package com.archnet.ui.front.pages;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import jsweet.dom.Event;

public class Register extends HTMLTemplateContainer {
	
	private JSInput<String> firstName = new JSInput<String>("firstName");
	private JSInput<String> lastName = new JSInput<String>("lastName");
	private JSInput<String> email = new JSInput<String>("email");
	private JSInput<String> password = new JSInput<String>("password");
	private JSContainer register = new JSContainer("register", "a");

	public Register(String name) {
		super(name, "<div class=\"register-page container\">\r\n"
				+ "            <div class=\"row\">\r\n"
				+ "                <div class=\"col-lg-12\">\r\n"
				+ "                    <h3>create account</h3>\r\n"
				+ "                    <div class=\"theme-card\">\r\n"
				+ "                        <form class=\"theme-form\">\r\n"
				+ "                            <div class=\"form-row row\">\r\n"
				+ "                                <div class=\"col-md-6\">\r\n"
				+ "                                    <label for=\"email\">First Name</label>\r\n"
				+ "                                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\"\r\n"
				+ "                                        required=\"\">\r\n"
				+ "                                </div>\r\n"
				+ "                                <div class=\"col-md-6\">\r\n"
				+ "                                    <label for=\"review\">Last Name</label>\r\n"
				+ "                                    <input type=\"password\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\"\r\n"
				+ "                                        required=\"\">\r\n"
				+ "                                </div>\r\n"
				+ "                            </div>\r\n"
				+ "                            <div class=\"form-row row\">\r\n"
				+ "                                <div class=\"col-md-6\">\r\n"
				+ "                                    <label for=\"email\">email</label>\r\n"
				+ "                                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n"
				+ "                                </div>\r\n"
				+ "                                <div class=\"col-md-6\">\r\n"
				+ "                                    <label for=\"review\">Password</label>\r\n"
				+ "                                    <input type=\"password\" class=\"form-control\" name=\"password\"\r\n"
				+ "                                        placeholder=\"Enter your password\" required=\"\">\r\n"
				+ "                                </div><a href=\"#\" class=\"btn btn-solid w-auto\" name=\"register\">create Account</a>\r\n"
				+ "                            </div>\r\n"
				+ "                        </form>\r\n"
				+ "                    </div>\r\n"
				+ "                </div>\r\n"
				+ "            </div>\r\n"
				+ "        </div>");
		
		
		firstName.addClass("form-control");
		firstName.setPlaceHolder("First Name");
		firstName.setRequired(true);
		
		lastName.addClass("form-control");
		lastName.setPlaceHolder("Last Name");
		lastName.setRequired(true);
		
		
		email.addClass("form-control");
		email.setPlaceHolder("Email");
		email.setRequired(true);
		password.addClass("form-control");
		password.setPlaceHolder("Enter your password");
		password.setAttribute("type", "password");
		password.setRequired(true);
		
		
		register.setAttribute("href", "javascript:void(0);");
		register.setHtml("Create an Account");
		register.setAttribute("href", "javascript:void(0);");
		register.addClass("btn btn-solid w-auto"); 
		
		register.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				firstName.validate();
				lastName.validate();
				password.validate();
				email.validate();
				
				if(isOk(firstName.getValue()) && isOk(lastName.getValue()) && isOk(password.getValue()) && isOk(email.getValue())) {
					evt.$set("firstName", firstName);
					evt.$set("lastName", lastName);
					evt.$set("password", password);
					evt.$set("email", email);
					fireListener("OnRegister", evt);
				}
			}
		}, "click");
		
		addChild(firstName).addChild(lastName).addChild(email).addChild(password).addChild(register);
	}
	
	public  boolean isOk(String val) {
		if(val != null && val != "") {
			return true;
		}
		return false;
	}

}
