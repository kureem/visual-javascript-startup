package com.archnet.ui.front.pages;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import jsweet.dom.Event;

public class ForgotPassword extends HTMLTemplateContainer{

	private JSInput<String> email = new JSInput<String>("email");
	private JSContainer change = new JSContainer("change", "a");
	
	public ForgotPassword(String name) {
		super(name, "<div class=\"pwd-page container\">\r\n"
				+ "            <div class=\"row\">\r\n"
				+ "                <div class=\"col-lg-6 m-auto\">\r\n"
				+ "                    <h2>Forget Your Password</h2>\r\n"
				+ "                    <form class=\"theme-form\">\r\n"
				+ "                        <div class=\"form-row row\">\r\n"
				+ "                            <div class=\"col-md-12\">\r\n"
				+ "                                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Enter Your Email\"\r\n"
				+ "                                    required=\"\">\r\n"
				+ "                            </div><a href=\"#\" class=\"btn btn-solid w-auto\" name=\"change\">Submit</a>\r\n"
				+ "                        </div>\r\n"
				+ "                    </form>\r\n"
				+ "                </div>\r\n"
				+ "            </div>\r\n"
				+ "        </div>");

	
		email.addClass("form-control");
		email.setPlaceHolder("Email");
		email.setRequired(true);
		
		change.addClass("btn btn-solid w-auto");
		change.setAttribute("href", "javascript:void(0);");
		change.setHtml("Submit");
		
		addChild(email).addChild(change);
		
		change.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				String semail = email.getValue();
				if(semail != null && semail != "") {
					evt.$set("email", semail);
					fireListener("OnChangePassword", evt);
				}
			}
		}, "click");
	}

}
