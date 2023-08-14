package com.archnet.ui.front.pages;

import com.archnet.ui.front.Page;
import com.archnet.ui.front.ProductBox;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Search extends JSContainer{
	
	private final static String TEMPLATE_SEARCH_SECTION = "<section class=\"authentication-page\">\r\n"
			+ "        <div class=\"container\">\r\n"
			+ "            <section class=\"search-block\">\r\n"
			+ "                <div class=\"container\">\r\n"
			+ "                    <div class=\"row\">\r\n"
			+ "                        <div class=\"col-lg-6 offset-lg-3\">\r\n"
			+ "                            <div class=\"form-header\">\r\n"
			+ "                                <div class=\"input-group\">\r\n"
			+ "                                    <input type=\"text\" name=\"txtSearch\" class=\"form-control\" aria-label=\"Search Products\"\r\n"
			+ "                                        placeholder=\"Search Products......\">\r\n"
			+ "                                    <div class=\"input-group-append\">\r\n"
			+ "                                        <button class=\"btn btn-solid\" name=\"btnSearch\"><i class=\"fa fa-search\"></i>Search</button>\r\n"
			+ "                                    </div>\r\n"
			+ "                                </div>\r\n"
			+ "                            </div>\r\n"
			+ "                        </div>\r\n"
			+ "                    </div>\r\n"
			+ "                </div>\r\n"
			+ "            </section>\r\n"
			+ "        </div>\r\n"
			+ "    </section>";
	
	private HTMLTemplateContainer searchSection = new HTMLTemplateContainer("search-section", TEMPLATE_SEARCH_SECTION);

	private JSContainer results = new JSContainer("results", "div");
	
	private JSInput<String> txtSearch = new JSInput<>("txtSearch");
	
	private JSContainer btnSearch = new JSContainer("btnSearch", "button");
	
	public Search(String name) {
		super(name, "div");
		
		addChild(searchSection);
		JSContainer sectionb = new JSContainer("section-b", "section").addClass("section-b-space ratio_asos");
		addChild(sectionb);
		JSContainer ctn = new JSContainer("div").addClass("container");
		sectionb.addChild(ctn);
		ctn.addChild(results);
		results.addClass("row search-product");
		
		txtSearch.addClass("form-control").setAttribute("aria-label", "Search Products.......");
		txtSearch.setPlaceHolder("Search Products.......");
		btnSearch.addClass("btn btn-solid").setHtml("<i class=\"fa fa-search\"></i>Search");
		
		searchSection.addChild(txtSearch).addChild(btnSearch);
		
		btnSearch.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				
				Array<Object> products = new Array<Object>();
				for(int i = 1; i <= 37; i++) {
					Object pr = new Object();
					pr.$set("availability", "in stock");
					pr.$set("name", "product-" + i);
					pr.$set("title", "Candy red solid tshirt");
					pr.$set("description", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book");
					pr.$set("price", "200MUR");
					pr.$set("front", "https://themes.pixelstrap.com/multikart/assets/images/pro3/35.jpg");
					pr.$set("back", "	https://themes.pixelstrap.com/multikart/assets/images/pro3/36.jpg");
					if(i%2 == 0) {
						pr.$set("front", "https://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg");
						pr.$set("back", "	https://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg");
					}else if(i%3 ==0) {
						pr.$set("front", "https://themes.pixelstrap.com/multikart/assets/images/pro3/27.jpg");
						pr.$set("back", "	https://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg");
					}else if(i%5 == 0) {
						pr.$set("front", "https://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg");
						pr.$set("back", "	https://themes.pixelstrap.com/multikart/assets/images/pro3/34.jpg");
					}
					products.push(pr);
				}
				setProducts(products);
				
			}
		}, "click");
		
		
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
	
	public void setProducts(Array<Object> products) {
		results.clearChildren();
		results.setRendered(false);
		for(Object p : products) {
			ProductBox box = ProductBox.createInstance(p);
			box.showDescription(false);
			box.setWidth(6);
			results.addChild(box);
			box.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListenerOnPage("OnChangePage", evt);
				}
			}, "OnChangePage");
			
			box.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListenerOnPage("OnAddWishList", evt);
				}
			}, "OnAddWishList");

			box.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListenerOnPage("OnAddCart", evt);
				}
			}, "OnAddCart");
		}
	}
	
	private void fireListenerOnPage(String name, Event evt) {
		Page p = getAncestorWithClass("Page");
		if(p != null) {
			p.fireListener(name, evt);
		}
	}

}
