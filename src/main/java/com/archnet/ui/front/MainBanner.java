package com.archnet.ui.front;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class MainBanner extends JSContainer{

	private JSContainer title = new JSContainer("title", "h4");
	
	private JSContainer description = new JSContainer("description", "p");
	
	private JSContainer img = new JSContainer("img", "img").addClass("img-fluid blur-up lazyloaded");
	
	public MainBanner(String name) {
		super(name, "div");
		
		addClass("top-banner-wrapper");
		
		JSContainer link = new JSContainer("link", "a").setAttribute("href", "javascript:void(0);");
		link.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "product-detail/" +getName());
				evt.$set("label", getName());
				fireListener("OnChangePage", evt);
			}
		}, "click");
		link.addChild(img);
		addChild(link);
		JSContainer content = new JSContainer("content", "div").addClass("top-banner-content small-section");
		addChild(content);
		content.addChild(title).addChild(description);
		setImg("https://themes.pixelstrap.com/multikart/assets/images/mega-menu/2.jpg");
		setTitle("BIGGEST DEALS ON TOP BRANDS");
		setDescription("The trick to choosing the best wear for yourself is to keep in mind your body type, individual style, occasion and also the time of day or weather. In addition to eye-catching products from top brands, we also offer an easy 30-day return and exchange policy, free and fast shipping across all pin codes, cash or card on delivery option, deals and discounts, among other perks. So, sign up now and shop for westarn wear to your heart’s content on Multikart.");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnChangePage", evt);
				}
			}
		}, "OnChangePage");
	}
	
	public MainBanner setImg(String img) {
		this.img.setAttribute("src", img);
		return this;
	}
	
	public MainBanner setTitle(String title) {
		this.title.setHtml(title);
		return this;
	}
	
	public MainBanner setDescription(String description) {
		this.description.setHtml(description);
		return this;
	}

}
