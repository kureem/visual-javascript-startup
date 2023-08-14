package com.archnet.ui.front;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ProductListView extends JSContainer{

	public static String VIEW_GRID = "grid";
	public static String VIEW_LIST = "list";
	
	private String view = "grid";
	
	private int rowSize = 4;
	
	private JSContainer row = new JSContainer("row");
	
	public ProductListView(String name) {
		super(name, "div");
		addClass("product-wrapper-grid");
		addChild(row.addClass("row margin-res"));
	}
	
	public void setView(String view) {
		if(this.view != view) {
			if(view == VIEW_GRID) {
				removeClass("list-view");
				setRowSize(4);
				
			}else {
				addClass("list-view");
				setRowSize(1);
			}
			this.view = view;
		}
	}
	
	public Array<ProductBox> getProducts(){
		Array result = row.getChildren();
		return result;
	}
	
	public void setProducts(Array<Object> products) {
		row.clearChildren();
		row.setRendered(false);
		for(Object o : products) {
			ProductBox box = new ProductBox("");
			box.setProduct(o);
			row.addChild(box);
			box.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListener("OnChangePage", evt);
				}
			}, "OnChangePage");
			
			box.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListener("OnAddCart", evt);
				}
			}, "OnAddCart");
			box.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListener("OnAddWishList", evt);
				}
			},"OnAddWishList");
		}
	}
	
	public void setRowSize(int size) {
		this.rowSize = size;
		for(ProductBox p : getProducts()) {
			p.setWidth(size);
		}
	}
	

}
