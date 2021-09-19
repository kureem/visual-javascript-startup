package com.mycompany.ui;

import framework.components.JSContainer;

public class Boot {

	public static void main(String[] args) {
	
		JSContainer rootApp = new JSContainer("div");
		
		rootApp.addChild(new Example_0());
		rootApp.addChild(new Example_1());
		
		rootApp.render();
	
	}

}
