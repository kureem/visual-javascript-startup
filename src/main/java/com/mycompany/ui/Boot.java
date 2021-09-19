package com.mycompany.ui;

import framework.components.JSContainer;

public class Boot {

	public static void main(String[] args) {
	
		//root application which is a div tag
		JSContainer rootApp = new JSContainer("div");
		
		//add Example_0
		rootApp.addChild(new Example_0());
		
		//add Example_1
		rootApp.addChild(new Example_1());
		 
		
		//render the application. of no parameter is passed, it will automatically render in the body tag of the html page
		rootApp.render();
	
	}

}
