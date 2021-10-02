package com.mycompany.ui;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSButton;
import jsweet.dom.Event;

/**
 * 
 * Simple class that extends JSContainer with tag div
 *
 */
public class Example_0 extends JSContainer {

	public Example_0() {
		super("div");

 
		// instantiate a container with tag h1
		JSContainer h1 = new JSContainer("h1");

		// sets the inner html to Hello World!
		h1.setHtml("Hello World!");

		// add the h1 tag to this container
		addChild(h1);

		// instantiate a button with text Click me
		JSButton btn = new JSButton("button", "Click Me");

		// add an onclick event listener
		btn.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				// when the button is clicked, change the inner html of the h1 to something else
				h1.setHtml("Goobye cruel world!");

			}
		}, "click");
		
		btn.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				// TODO Auto-generated method stub
				h1.setHtml("dbl click!!");
			}
		}, "dblclick");

		// add the button to this container
		addChild(btn);

	}

}
