package com.archnet.ui.front;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Catalogue extends JSContainer{

	private ProductTopFilter filter = new ProductTopFilter("filter");
	 
	private ProductListView view = new ProductListView("grid");
	
	private ProductPaginator paginator = new ProductPaginator("paginator");
	
	
	public Catalogue(String name) {
		super(name, "div");
		addClass("collection-product-wrapper");
		addChild(filter);
		addChild(view);
		addChild(paginator);
		filter.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				int size = (Integer)evt.$get("pageSize");
				paginator.setPageSize(size);
			}
		}, ProductTopFilter.Event_OnChangePageSize);
		
		filter.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String sview = (String)evt.$get("viewtype");
				view.setView(sview);
			}
		},ProductTopFilter.Event_OnChangeView );
		
		filter.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				int size = (Integer)evt.$get("size");
				view.setRowSize(size);
			}
		},ProductTopFilter.Event_OnChangeRowSize );
		
		
		
		paginator.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				int start = (Integer)evt.$get("start");
				int end = (Integer)evt.$get("end");
				int total = (Integer)evt.$get("total");
				filter.setCount(start, end, total);
			}
		}, ProductPaginator.Event_OnChange);
		
		view.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("OnChangePage", evt);
			}
		}, "OnChangePage");
		
		view.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("OnAddWishList", evt);
			}
		}, "OnAddWishList");
		
		view.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("OnAddCart", evt);
			}
		}, "OnAddCart");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListenerOnPage("OnChangePage", evt);
			}
		}, "OnChangePage");
		
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListenerOnPage("OnAddCart", evt);
			}
		}, "OnAddCart");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListenerOnPage("OnAddWishList", evt);
			}
		}, "OnAddWishList");
	}
	
	private void fireListenerOnPage(String name, Event evt) {
		Page p = getAncestorWithClass("Page");
		if(p != null) {
			p.fireListener(name, evt);
		}
	}
	
	public void setTotal(int total) {
		this.paginator.setValue(total);
	}

	public void setProducts(Array<Object> products) {
		view.setProducts(products);
	}
	
	public void start() {
		this.paginator.start();
	}
}
