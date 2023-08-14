package com.mycompany.ui;

import framework.components.CardLayout;
import framework.components.CardLayoutItem;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class CardLayoutExample extends JSContainer{
	
	private CardLayout layout = new CardLayout("layout", "div");

	private CardLayoutItem item1 = new CardLayoutItem("item1","div");
	
	
	private CardLayoutItem item2 = new CardLayoutItem("item2", "div");
	
	private CardLayoutItem item3 = new CardLayoutItem("item3", "div");
	
	
	private boolean testInvalid = false;
	
	public CardLayoutExample() {
		super("layout example", "div");

		
		item1.addChild(new JSContainer("h1").setHtml("Card Layout Item 1"));
		
		item2.addChild(new JSContainer("h1").setHtml("Card Layout Item 2"));
		
		item3.addChild(new JSContainer("h1").setHtml("Card Layout Item 3"));
		
		layout.addItem(item1).addItem(item2).addItem(item3);
		
		
		EventListener onActivate = new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				source.addChild(new JSContainer("h3").setHtml(source.getName() + " is activated"));
				
			}
		};
		
		EventListener onDeactivate = new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				source.addChild(new JSContainer("h3").setHtml(source.getName() + " was deactivated"));
				
			}
		};
		
		EventListener onValidate = new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				if(testInvalid) {
					evt.$set("valid", false);
				}
				
			}
		};
		
		item1.addEventListener(onActivate, "activate").addEventListener(onDeactivate, "deactivate");
		item2.addEventListener(onActivate, "activate").addEventListener(onDeactivate, "deactivate");
		item3.addEventListener(onActivate, "activate").addEventListener(onDeactivate, "deactivate");
		
	
	}

	
	
	
}
