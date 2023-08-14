package com.archnet.ui.front.pages;

import com.archnet.ui.Col;
import com.archnet.ui.Grid;
import com.archnet.ui.Size;
import com.archnet.ui.front.Catalogue;
import com.archnet.ui.front.MainBanner;

import framework.components.JSContainer;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Home extends JSContainer{
	
	private JSContainer top = new JSContainer("top", "div");
	
	private JSContainer body = new JSContainer("body", "div");
	


	public Home(String name) {
		super(name, "div");
		addClass("collection-wrapper");
		Grid pageGrid = new Grid("page-grid");
		addChild(pageGrid);
		Col collectioncol = new Col("collection-col");
		collectioncol.addClass("collection-content");
		pageGrid.addCol(collectioncol);
		
		Grid pageMainContent = new Grid("page-main-content");
		collectioncol.addChild(pageMainContent);
		pageMainContent.removeClass("container");
		pageMainContent.addClass("page-main-content");
		Col pageContainer = new Col("pageContainer");
		pageContainer.setWidth(Size.SMALL, 12);
		pageMainContent.addCol(pageContainer);
		
		pageContainer.addChild(top);
		pageContainer.addChild(body);
		
		MainBanner topBanner = new MainBanner("top-banner-wrapper");
		Catalogue cat = new Catalogue("catalogue");
		
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
		cat.setProducts(products);
		cat.setTotal(Integer.parseInt(products.length+""));
		
		setTop(topBanner);
		setBody(cat);
		cat.start();
	}
	
	public JSContainer getTop() {
		return top;
	}
	
	public JSContainer getBody() {
		return body;
	}

	public void setTop(JSContainer ctn) {
		top.clearChildren();
		top.setRendered(false);
		if(ctn != null) {
			top.addChild(ctn);
		}
	}
	
	public void setBody(JSContainer ctn) {
		body.clearChildren();
		body.setRendered(false);
		if(ctn != null) {
			body.addChild(ctn);
		}
	}

}
