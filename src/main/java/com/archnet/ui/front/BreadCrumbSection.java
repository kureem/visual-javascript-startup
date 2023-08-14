package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Grid;
import com.archnet.ui.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class BreadCrumbSection extends JSContainer{

	private Col left = new Col("left").setWidth(Size.SMALL, 6);
	private Col right = new Col("right").setWidth(Size.SMALL, 6);
	private Grid grid = new Grid("container");

	private JSContainer title = new JSContainer("title", "h2");
	
	private Breadcrumb breadcrumb = new Breadcrumb("breadcrumb");
	
	public final static String Event_OnChangePage = "OnChangePage";
	
	public BreadCrumbSection(String name) {
		super(name, "div");
		addClass("breadcrumb-section");
		
		addChild(grid);
		grid.addCol(left).addCol(right);
		
		JSContainer pageTitle = new JSContainer("div").addClass("page-title");
		left.addChild(pageTitle);
		pageTitle.addChild(title);
		right.addChild(breadcrumb);
		
		breadcrumb.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener(Event_OnChangePage, evt);
				String label = (String)evt.$get("label");
				setPageTitle(label);
			}
		}, Breadcrumb.Event_OnChangePage );
		setPageTitle("Home");
	}
	
	
	public BreadCrumbSection setPageTitle(String txt) {
		this.title.setHtml(txt);
		return this;
	}


	public Breadcrumb getBreadcrumb() {
		return breadcrumb;
	}
	
	

}
