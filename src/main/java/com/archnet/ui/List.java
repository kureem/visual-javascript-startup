package com.archnet.ui;

import framework.components.JSContainer;

public class List extends JSContainer{

	public List(String name, String tag) {
		super(name, tag);
	}
	
	public JSContainer addItem(JSContainer item) {
		JSContainer li = new JSContainer("li");
		li.addChild(item);
		addChild(li);
		return li;
	}
	
	public List addItems(JSContainer...items) {
		for(JSContainer item : items) {
			addItem(item);
		}
		return this;
	}
	

}
