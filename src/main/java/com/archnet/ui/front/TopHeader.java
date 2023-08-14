package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Grid;
import com.archnet.ui.List;
import com.archnet.ui.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Object; 

public class TopHeader extends JSContainer{
	
	private Col left = new Col("left");
	
	private Col right = new Col("right");
	
	private JSContainer storeName = new JSContainer("storeName", "span");
	
	private JSContainer phoneNumber = new JSContainer("phoneNumber", "span");
	
	private List headerDropdown = new List("headerDropdown", "ul");
	
	private JSContainer wishList = new JSContainer("wishlist", "a");
	
	private List accountMenu = new List("accountMenu", "ul");

	public TopHeader(String name) {
		super(name, "div");
		addClass("top-header");
		
		Grid grid = new Grid("grid");
		addChild(grid);
		grid.addCol(left).addCol(right);
		left.setWidth(Size.LARGE, 6);
		right.setWidth(Size.LARGE, 6);
		
		JSContainer headerContact = new JSContainer("header-contact", "div");
		headerContact.addClass("header-contact");
		left.addChild(headerContact);
		
		List list = new List("contact", "ul");
		headerContact.addChild(list);
		list.addItem(storeName);
		
		JSContainer phone = new JSContainer("i").addClass("fa fa-phone").setAttribute("aria-hidden", "true");
		list.addItem(phone);
		phone.getParent().addChild(phoneNumber);
		
		right.addClass("text-end");
		
		headerDropdown.addClass("header-dropdown");
		right.addChild(headerDropdown);
		
		wishList.setAttribute("href", "javascript:void(0);").setHtml("<i class=\"fa fa-heart\" aria-hidden=\"true\"></i>");
		
		headerDropdown.addItem(wishList);
		wishList.getParent().addClass("mobile-wishlist");
		wishList.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "wishlist");
				evt.$set("label", "Wish List");
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		
		JSContainer iconUser = new JSContainer("i").addClass("fa fa-user").setAttribute("aria-hidden", "true");
		headerDropdown.addItem(iconUser);
		
		JSContainer li = iconUser.getParent();
		li.addClass("onhover-dropdown mobile-account");
		li.addChild(new JSContainer("span").setHtml("My Account").addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "profile");
				evt.$set("label", "Profile");
				fireListener("OnChangePage", evt);
			}
		}, "click"));
		li.addChild(accountMenu);
		
		accountMenu.addClass("onhover-show-div");
		
		JSContainer login = new JSContainer("login", "a").setAttribute("href", "javascript:void(0);").setHtml("Login");
		JSContainer register = new JSContainer("register", "a").setAttribute("href", "javascript:void(0);").setHtml("Register");
		
		accountMenu.addItem(login);
		accountMenu.addItem(register);
		
		login.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "login");
				evt.$set("label", "Login");
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		register.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName","register");
				evt.$set("label", "Register");
				fireListener("OnChangePage", evt);
			}
		}, "click");
	}
	
	public void setLoggedUser(Object o) {
		if(o != null) {
			accountMenu.setStyle("display", "none");
		}else {
			accountMenu.setStyle("display", null);
		}
	}
	
	public void setStoreName(String name) {
		storeName.setHtml("Welcome to Our store " + name);
	}
	
	public void setPhoneNumber(String phone) {
		this.phoneNumber.setHtml("Call Us: " + phone);
	}

}
