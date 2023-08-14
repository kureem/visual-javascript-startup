package com.archnet.ui.back;

import framework.components.JSContainer;

public class Portal extends JSContainer{

	private Header header = new Header("header");
	
	private Body body = new Body("body");
	
	public Portal(String name) {
		super(name, "div");
		addClass("page-wrapper");
		addClass("Portal");
		addChild(header);
		addChild(body);
	}

}
