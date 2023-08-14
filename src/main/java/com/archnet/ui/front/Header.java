package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Grid;
import com.archnet.ui.List;
import com.archnet.ui.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Header extends Grid{
	private Col col = new Col("col");
	
	private JSContainer mainMenu = new JSContainer("div");

	private JSContainer menuLeft = new JSContainer("menu-left", "div");
	
	private JSContainer menuRight = new JSContainer("menu-right", "div");
	
	private JSContainer logo = new JSContainer("logo", "img");
	
	private MainMenu menu = new MainMenu("mainMenu");
	
	private List iconMenu = new List("iconMenu", "ul");
	
	public final static String Event_OnChangePage = "OnChangePage";
	
	public Header(String name) {
		super(name);
		col.setWidth(Size.SMALL, 12);
		addCol(col);
		mainMenu.addClass("main-menu");
		col.addChild(mainMenu);
		
		mainMenu.addChild(menuLeft).addChild(menuRight);
		menuLeft.addClass("menu-left");
		menuRight.addClass("menu-right pull-right");
		
		JSContainer brandLogo = new JSContainer("div").addClass("brand-logo");
		
		JSContainer logoLink = new JSContainer("home", "a").setAttribute("href", "javascript:void(0);");
		menuLeft.addChild(brandLogo.addChild(logoLink));
		
		logo.addClass("img-fluid blur-up lazyloaded");
		logoLink.addChild(logo);
		
		logoLink.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				evt.$set("pageName", "home");
				evt.$set("label", "Home");
				fireListener("OnChangePage", evt);
			}
		},"click");
		
		
		menuRight.addChild(new JSContainer("div").addChild(new JSContainer("nav").addChild(menu)));
		menuRight.addChild(new JSContainer("div").addChild(new JSContainer("div").addClass("icon-nav").addChild(iconMenu)));
		
		String[] icons = new String[] {"search", "setting", "cart"};
		String[] names = new String[] {"Search", "Setting", "Cart"};
		int index = 0;
		
		for(String icon : icons) {
			JSContainer img = new JSContainer(icon, "img").setAttribute("src", "https://themes.pixelstrap.com/multikart/assets/images/icon/" + icon + ".png");
			iconMenu.addItem(img);
			img.getParent().addClass("onhover-div mobile-search");
			img.setAttribute("title", names[index]);
			img.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("pageName", source.getName());
					evt.$set("label", source.getAttribute("title"));
					fireListener("OnChangePage", evt);
				}
			}, "click");
			index++;
		}
		
		menu.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("OnChangePage", evt);
			}
		}, "OnChangePage");
		
	}
	
	public void setLogo(String logo) {
		this.logo.setAttribute("src", logo);
	}
	
	public Header addMenu(String name, String label, String tag) {
		menu.addItem(name, label, tag);
		return this;
	}
	
	public void setMenu(Array<Object> menu) {
		this.menu.clearChildren();
		this.menu.setRendered(false);
		for(Object o : menu) {
			String name = (String)o.$get("name");
			String label =(String)o.$get("label");
			String tag = null;
			if(o.hasOwnProperty("tag")) {
				tag = (String)o.$get("tag");
			}
			addMenu(name, label, tag);
		}
	}
	
	public Header addMenu(String name, String label) {
		menu.addItem(name, label, null);
		return this;
	}

}
