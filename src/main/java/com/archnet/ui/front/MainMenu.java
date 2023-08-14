package com.archnet.ui.front;

import com.archnet.ui.List;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class MainMenu extends List{

	public MainMenu(String name) {
		super(name, "ul");
		addClass("sm pixelstrap sm-horizontal");
	}
	
	public MainMenu addItem(String name, String label, String tag) {
		JSContainer item = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
		addItem(item);
		if(tag != null && tag != "") {
			JSContainer utag = new JSContainer("div").addClass("lable-nav").setHtml(tag);
			item.getParent().addChild(utag);
		}
		item.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("label", label);
				evt.$set("pageName", name);
				fireListener("OnChangePage", evt);
			}
		}, "click");
		return this;
	}

}
