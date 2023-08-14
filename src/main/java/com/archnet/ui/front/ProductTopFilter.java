package com.archnet.ui.front;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSSelect;
import jsweet.dom.Event;

public class ProductTopFilter extends JSContainer{
	
	private JSContainer count = new JSContainer("count", "h5");

	private JSContainer searchCount = new JSContainer("searchCount", "div").addClass("search-count");
	
	private JSContainer collectionView = new JSContainer("collectionView", "div").addClass("collection-view");
	
	private JSContainer collectionGridView = new JSContainer("collectionGridView", "div").addClass("collection-grid-view");
	
	private JSContainer productPerPageView = new JSContainer("productPerPageView", "div").addClass("product-page-per-view");
	
	private JSContainer productPageFilter = new JSContainer("productPageFilter", "div").addClass("product-page-filter");
	
	private JSContainer gridView = new JSContainer("gridView", "i").addClass("fa fa-th grid-layout-view");
	
	private JSContainer listView = new JSContainer("listView", "i").addClass("fa fa-list-ul list-layout-view");
	
	public static String Event_OnChangeView = "OnChangeView";
	
	public static String Event_OnChangeRowSize = "OnChangeRowSize";
	
	public static String Event_OnChangePageSize = "OnChangePageSize";
	
	public static String Event_OnChangeSortBy = "OnChangeSortBy";
	
	public ProductTopFilter(String name ) {
		super(name, "div");
		addClass("product-top-filter");
		
		JSContainer col12 = new JSContainer("div").addClass("col-12");
		
		JSContainer content = new JSContainer("div").addClass("product-filter-content");
		col12.addChild(content);
		
		addChild(new JSContainer("div").addClass("container-fluid p-0")
					.addChild(new JSContainer("div").addClass("row")
							.addChild(col12))
				);
		
		searchCount.addChild(count);
		
		content.addChild(searchCount);
		content.addChild(collectionView).addChild(collectionGridView).addChild(productPerPageView).addChild(productPageFilter);
		
		JSContainer views = new JSContainer("ul");
		views.addChild(new JSContainer("li").addChild(gridView));
		views.addChild(new JSContainer("li").addChild(listView));
		collectionView.addChild(views);
		
		gridView.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("viewtype", "grid");
				fireListener("OnChangeView", evt);
			}
		}, "click");
		 
		listView.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("viewtype", "list");
				fireListener("OnChangeView", evt);
			}
		}, "click");
		
		JSContainer size = new JSContainer("ul");
		collectionGridView.addChild(size);
		for(int i = 2; i <=6; i++) {
			
			if(i != 5) {
				JSContainer li = new JSContainer("li");
				JSContainer img = new JSContainer("" + i, "img");
				img.addEventListener(new EventListener() {
					
					@Override
					public void performAction(Renderable source, Event evt) {
						evt.$set("size", Integer.parseInt(source.getName()));
						fireListener("OnChangeRowSize", evt);
					}
				}, "click");
				img.addClass("product-"+i+"-layout-view");
				img.setAttribute("src", "https://themes.pixelstrap.com/multikart/assets/images/icon/"+i+".png");
				li.addChild(img);
				size.addChild(li);
			}
		}
		
		JSSelect pageSize = new JSSelect("productPerPage");
		pageSize.addOption("25 Products Per Page", "25").addOption("50 Products Per Page", "50").addOption("100 Products Per Page","100");
		pageSize.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				int ipageSize = Integer.parseInt(pageSize.getValue() + "");
				evt.$set("pageSize", ipageSize );
				fireListener("OnChangePageSize", evt);
			}
		}, "change");
		
		pageSize.setValue("25");
		productPerPageView.addChild(pageSize);
		
		
		JSSelect sort = new JSSelect("sort").addOption("Sort By Price", "price").addOption("Sort By Date Added", "sort");
		productPageFilter.addChild(sort);
		sort.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String sortBy = sort.getValue() + "";
				evt.$set("sortBy", sortBy);
				fireListener("OnChangeSortBy", evt);
			}
		}, "change");
		sort.setValue("sort");
	}
	
	
	
	public void setCount(int start, int end, int total) {
		String txt = "Showing Products " + start + " - " + end + " Of " + total + " Results";
		count.setHtml(txt);
	}

}
