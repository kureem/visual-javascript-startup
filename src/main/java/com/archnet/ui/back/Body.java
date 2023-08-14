package com.archnet.ui.back;

import framework.components.JSContainer;

public class Body extends JSContainer{
	
	private SideMenu sideMenu = new SideMenu("sideMenu");

	public Body(String name) {
		super(name, "div");
		addClass("page-body-wrapper");
		addClass("Body");
		addChild(sideMenu);
	}

}
