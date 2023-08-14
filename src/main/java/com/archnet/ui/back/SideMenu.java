package com.archnet.ui.back;

import com.archnet.ui.List;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class SideMenu extends JSContainer{
	
	private JSContainer logoLink = new JSContainer("logo-link", "a");
	private JSContainer logo = new JSContainer("logo", "img");
	private JSContainer user = new JSContainer("user", "img");
	
	private JSContainer username = new JSContainer("username", "h6");
	private JSContainer userrole = new JSContainer("userrole", "p");
	
	private List menu = new List("menu", "ul");

	public SideMenu(String name) {
		super(name, "div");
		addClass("page-sidebar");
		addClass("SideMenu");
		JSContainer top = new JSContainer("div").addClass("main-header-left d-none d-lg-block");
		top.addChild(new JSContainer("div").addClass("logo-wrapper").addChild(logoLink.addChild(logo)));
		logoLink.setAttribute("href", "javascript:void(0);");
		logo.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/multikart-logo.png");
		addChild(top);
		
		JSContainer scroll =new JSContainer("div").addClass("sidebar custom-scrollbar");
		addChild(scroll);
		
		JSContainer mob = new JSContainer("mob", "a").addClass("sidebar-back d-lg-none d-block").setAttribute("href", "javascript:void(0);");
		mob.setHtml("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>");
		scroll.addChild(mob);
		
		JSContainer userw = new JSContainer("div").addClass("sidebar-user");
		userw.addChild(user);
		scroll.addChild(userw);
		user.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/user3.jpg");
		user.setStyle("width", "60px");
		username.addClass("f-14");
		username.setHtml("JOHN");
		userrole.setHtml("general manager.");
		userw.addChild(new JSContainer("div").addChild(username).addChild(userrole));
		
		menu.addClass("sidebar-menu");
		
		scroll.addChild(menu);
		
		
		
	}
	
	
	public void setMenu(Array<Object> nav) {
		for(Object o : nav) {
			JSContainer menuitem = addMenu(o,menu);
			Array<Object> children = (Array<Object>)nav.$get("children");
			if(children != null && children.length > 0) {
				JSContainer pullright = new JSContainer("i").addClass("fa fa-angle-right pull-right");
				menuitem.addChild(pullright);
				List menul2 = new List("level2", "ul");
				menul2.addClass("sidebar-submenu");
				menuitem.getParent().addChild(menul2);
				for(Object child : children) {
					JSContainer menuiteml2 = addMenu(child, menul2);
					Array<Object> childrenl2 = (Array<Object>)child.$get("children");
					if(childrenl2 != null && childrenl2.length > 0) {
						JSContainer pullrightl2 = new JSContainer("i").addClass("fa fa-angle-right pull-right");
						menuiteml2.addChild(pullrightl2);
						List menul3 = new List("level3", "ul");
						menul3.addClass("sidebar-submenu");
						menuiteml2.getParent().addChild(menul2);
						
						for(Object childl2 : childrenl2) {
							addMenu(childl2,menul3);
						}
					}
					
				}
			}
		}
	}
	
	public JSContainer addMenu(Object o, List men) {
		String name = (String)o.$get("name");
		String icon = (String)o.$get("icon");
		String label = (String)o.$get("label");
		return addMenu(name, label, icon, men);
	}
	
	public JSContainer addMenu(String name, String label, String icon, List men) {
		JSContainer a = new JSContainer(name, "a");
		JSContainer uiicon = new JSContainer("i").setAttribute("data-feather", icon);
		JSContainer uilabel = new JSContainer("span").setHtml(label);
		a.addChild(uiicon).addChild(uilabel);
		a.setAttribute("href", "javascript:void(0);");
		a.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", name);
				evt.$set("label", label);
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		men.addItem(a);
		return a;
	}
	
	public void setLogo(String lo) {
		this.logo.setAttribute("src", lo);
	}
	
	public void setUserName(String name) {
		this.username.setHtml(name);
	}
	
	public void setUserRole(String rol) {
		this.userrole.setHtml(rol);
	}
	
	public void setUserAvatar(String ava) {
		this.user.setAttribute("src", ava);
	}
	
	

}
