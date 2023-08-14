package com.archnet.ui.front.pages;

import com.archnet.ui.front.FormPanel;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import framework.components.input.JSTextArea;
import jsweet.dom.Event;
import jsweet.lang.Object;

public class Profile extends JSContainer {

	private FormPanel personal = new FormPanel("personal");

	private FormPanel shipping = new FormPanel("shipping");

	public Profile(String name) {
		super(name, "div");

		JSContainer top = new JSContainer("div").addClass("contact-page register-page");
		addChild(top.addChild(personal));

		JSContainer bottom = new JSContainer("section").addClass("contact-page register-page section-b-space");
		addChild(bottom.addChild(shipping));

		personal.setLegend("Personal Detail");
		JSInput<String> firstName = new JSInput<String>("firstName");
		firstName.addClass("form-control");
		firstName.setPlaceHolder("Enter Your first name");

		JSInput<String> lastName = new JSInput<String>("lastName");
		lastName.addClass("form-control");
		lastName.setPlaceHolder("Enter Your last name");

		JSInput<String> phone = new JSInput<String>("phone");
		phone.addClass("form-control");
		phone.setPlaceHolder("Enter Your phone number");

		JSInput<String> email = new JSInput<String>("email");
		email.addClass("form-control");
		email.setPlaceHolder("Enter Your phone email");

		JSTextArea message = new JSTextArea("message");
		message.addClass("form-control mb-0");
		message.setAttribute("placeholder", "Write Your Message");

		personal.getForm().addField("First Name", firstName);
		personal.getForm().addField("Last Name", lastName);
		personal.getForm().addField("Phone", phone);
		personal.getForm().addField("Email", email);
		personal.getForm().addField("Write your message", message, true);

		JSContainer saveBilling = new JSContainer("save", "button").addClass("btn btn-sm btn-solid");
		saveBilling.setHtml("Save setting");
		
		JSContainer btnRowBilling = new JSContainer("div").addClass("col-md-12");
		btnRowBilling.addChild(saveBilling);
		personal.getForm().addChild(btnRowBilling);
		
		
		
		shipping.setLegend("Shipping Details");

		JSInput<String> flat = new JSInput<String>("flat");
		flat.addClass("form-control");
		flat.setPlaceHolder("Flat/Plot");

		JSInput<String> addressLine1 = new JSInput<String>("addressLine1");
		addressLine1.addClass("form-control");
		addressLine1.setPlaceHolder("Address Line 1");

		JSInput<String> addressLine2 = new JSInput<String>("addressLine2");
		addressLine2.addClass("form-control");
		addressLine2.setPlaceHolder("Address Line 2");

		JSInput<String> zipCode = new JSInput<String>("zipcode");
		zipCode.addClass("form-control");
		zipCode.setPlaceHolder("Zip Code");

		JSInput<String> country = new JSInput<String>("country");
		country.addClass("form-control");
		country.setPlaceHolder("Country");

		JSInput<String> city = new JSInput<String>("city");
		city.addClass("form-control");
		city.setPlaceHolder("City");

		JSInput<String> state = new JSInput<String>("state");
		state.addClass("form-control");
		state.setPlaceHolder("State");

		shipping.getForm().addField("Flat/Plot", flat);
		shipping.getForm().addField("Address Line 1*", addressLine1);
		shipping.getForm().addField("Address Line 2", addressLine2);
		shipping.getForm().addField("Zip Code*", zipCode);
		shipping.getForm().addField("Country*", country);
		shipping.getForm().addField("City*", city);
		shipping.getForm().addField("Region/State*", state);
		
		
		JSContainer saveShipping = new JSContainer("save", "button").addClass("btn btn-sm btn-solid");
		saveShipping.setHtml("Save setting");
		
		JSContainer btnRowShipping = new JSContainer("div").addClass("col-md-12");
		btnRowShipping.addChild(saveShipping);
		shipping.getForm().addChild(btnRowShipping);
		
		saveShipping.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				shipping.getForm().validate();
				Object shipp = shipping.getForm().getValue();
				evt.$set("value", shipp);
				evt.$set("data-type", "shipping");
				fireListener("OnSave", evt);
			}
		}, "click");
		
		saveBilling.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				personal.getForm().validate();
				Object shipp = personal.getForm().getValue();
				evt.$set("value", shipp);
				evt.$set("data-type", "billing");
				fireListener("OnSave", evt);
			}
		}, "click");
		

	}

}
