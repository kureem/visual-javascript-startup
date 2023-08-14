package com.archnet.ui.front;

import com.archnet.ui.List;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Breadcrumb extends JSContainer{
	
	private List items = new List("breadcrumb", "ol");
	
	public final static String Event_OnChangePage = "OnChangePage";

	public Breadcrumb(String name) {
		super(name,"nav");
		addClass("theme-breadcrumb");
		setAttribute("aria-label", "breadcrumb");
		addChild(items);
		items.addClass("breadcrumb");
		
		
	}
	
	
	public Breadcrumb addItem(String name, String label) {
		JSContainer link = new JSContainer(name, "a").setHtml(label);
		items.addItem(link).addClass("breadcrumb-item").setName(name);
		link.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				activate(source.getName());
				evt.$set("item", source.getName());
				evt.$set("label", source.getHtml());
				evt.$set("pageName", source.getName());
				fireListener("OnChangePage", evt);
			}
		}, "click");
		if(items.getChildren().length ==1) {
			activate(name);
		}
		return this;
	}
	
	public void setBreadcrumbs(Array<Object> items) {
		this.items.clearChildren();
		this.items.setRendered(false);
		for(Object o : items) {
			String name = (String)o.$get("name");
			String label = (String)o.$get("label");
			addItem(name, label);
		}
	}
	
	public void activate(String name) {
		
		for(Renderable item : items.getChildren()) {
			item.removeClass("active").setAttribute("aria-current", null);
		}
		
		this.items.getChild(name).addClass("active").setAttribute("aria-current", "page");
	}
	

}
