package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Object;

public class ProductBox extends Col{
	
	private JSContainer box = new JSContainer("box", "div");
	private JSContainer front = new JSContainer("front", "img");
	private JSContainer back = new JSContainer("back", "img");
	private JSContainer title = new JSContainer("title", "h6");
	private JSContainer description = new JSContainer("description", "p");
	private JSContainer price = new JSContainer("price", "h4");

	private Object product = null;
	
	public ProductBox(String name) {
		super(name);
		addChild(box);
		setWidth(4);
		
		JSContainer imgWrapper = new JSContainer("div").addClass("img-wrapper");
		imgWrapper.addChild("front", "div", "front").addChild(front);
		imgWrapper.addChild("back", "div", "back").addChild(back);
		front.addClass("img-fluid blur-up lazyload bg-img");
		back.addClass("img-fluid blur-up lazyload bg-img");
		box.addChild(imgWrapper);
		box.addClass("product-box");
		
		JSContainer cartInfo = new JSContainer("div").addClass("cart-info cart-wrap");
		imgWrapper.addChild(cartInfo);
		
		JSContainer addToCart = new JSContainer("addToCart", "button").setAttribute("title", "Add to cart");
		addToCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("data-bs-toggle","modal").setAttribute("data-bs-target", "#addtocart");
		cartInfo.addChild(addToCart);
		
		addToCart.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("product", product);
				fireListener("OnAddCart", evt);
			}
		}, "click");
		
		JSContainer addToWishlist = new JSContainer("addToWishList", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Add to Wishlist");
		addToWishlist.setHtml("<i class=\"ti-heart\" aria-hidden=\"true\"></i>");
		cartInfo.addChild(addToWishlist);
		addToWishlist.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("product", product);
				fireListener("OnAddWishList", evt);
			}
		}, "click");
		
		JSContainer quickView = new JSContainer("quickView", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Quick View");
		quickView.setHtml("<i class=\"ti-search\"></i>").setAttribute("data-bs-toggle","modal").setAttribute("data-bs-target", "#quickview");
		cartInfo.addChild(quickView);
		
		JSContainer compare = new JSContainer("compare", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Compare");
		compare.setHtml("<i class=\"ti-reload\" aria-hidden=\"true\"></i>");
		cartInfo.addChild(compare);
		
		
		JSContainer detail = new JSContainer("div").addClass("product-detail");
		box.addChild(detail);
		
		JSContainer rating = new JSContainer("rating", "div").addClass("rating");
		for(int i = 1;i<=5;i++) {
			JSContainer star = new JSContainer(i+ "", "i").addClass("fa fa-star");
			rating.addChild(star);
		}
		detail.addChild(rating);
		
		JSContainer titleLink = new JSContainer("a").setAttribute("href", "javascript:void(0);");
		titleLink.addChild(title);
		
		
		detail.addChild(titleLink);
		
		titleLink.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String pageName = "product-detail/" + getName();
				String label = title.getHtml();
				evt.$set("label", label);
				evt.$set("pageName", pageName);
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		detail.addChild(description);
		
		detail.addChild(price);
		
		
	}
	
	public void setDescription(String description) {
		this.description.setHtml(description);
	}
	
	public void setPrice(String price) {
		this.price.setHtml(price);
	}
	
	public void setTitle(String title) {
		this.title.setHtml(title);
	}
	
	public void setImageBack(String url) {
		this.back.setAttribute("src", url);
	}
	
	public void setImageFront(String url) {
		this.front.setAttribute("src", url);
	}
	
	public void setProduct(Object p) {
		this.product = p;
		String price = (String)p.$get("price");
		String front = (String)p.$get("front");
		String back = (String)p.$get("back");
		String title = (String)p.$get("title");
		String description = (String)p.$get("description");
		String name = (String)p.$get("name");
		setName(name);
		setPrice(price);
		setImageBack(back);
		setImageFront(front);
		setTitle(title);
		setDescription(description);
	}
	public Object getProduct() {
		return product;
	}
	
	public static ProductBox createInstance(Object p) {
		ProductBox box = new ProductBox("");
		box.setProduct(p);
		return box;
	}
	
	public ProductBox setWidth(int width) {
		clearSizes();
		if(width == 6) {
			setWidth(Size.LARGE, 2);
		}else if(width == 4) {
			setWidth(Size.EXTRA_LARGE,3);
			setWidth(Size.NONE,6);
		}else if(width == 3) {
			setWidth(Size.LARGE,4);
			setWidth(Size.NONE,6);
		}else if(width == 2) {
			setWidth(Size.LARGE,6);
		}else if(width == 1) {
			setWidth(Size.LARGE,12);
		}
		
		return this;
	}
	
	public void showDescription(boolean b) {
		if(b) {
			description.setStyle("display", null);
		}else {
			description.setStyle("display", "none");
		}
	}
}
