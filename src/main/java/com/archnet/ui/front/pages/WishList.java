package com.archnet.ui.front.pages;

import com.archnet.ui.front.Page;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class WishList extends HTMLTemplateContainer{
	
	private JSContainer body = new JSContainer("body", "tbody");
	
	private JSContainer contShopping = new JSContainer("continue", "a");
	
	private JSContainer checkout = new JSContainer("checkout", "a");

	public WishList(String name) {
		super(name, "<div class=\"container wishlist-section\">\r\n"
				+ "	<div class=\"row\">\r\n"
				+ "		<div class=\"col-sm-12 table-responsive-xs\">\r\n"
				+ "			<table class=\"table cart-table\">\r\n"
				+ "				<thead>\r\n"
				+ "					<tr class=\"table-head\">\r\n"
				+ "						<th scope=\"col\">image</th>\r\n"
				+ "						<th scope=\"col\">product name</th>\r\n"
				+ "						<th scope=\"col\">price</th>\r\n"
				+ "						<th scope=\"col\">availability</th>\r\n"
				+ "						<th scope=\"col\">action</th>\r\n"
				+ "					</tr>\r\n"
				+ "				</thead>\r\n"
				+ "				<tbody name=\"body\">\r\n"
				+ "				</tbody>\r\n"
				+ "			</table>\r\n"
				+ "		</div>\r\n"
				+ "	</div>\r\n"
				+ "	<div class=\"row wishlist-buttons\">\r\n"
				+ "		<div class=\"col-12\">\r\n"
				+ "			<a href=\"#\" class=\"btn btn-solid\" name=\"continue\">continue shopping</a> \r\n"
				+ "			<a href=\"#\" class=\"btn btn-solid\" name=\"checkout\">check out</a>\r\n"
				+ "		</div>\r\n"
				+ "	</div>\r\n"
				+ "</div>");
	
		addChild(body);
		contShopping.addClass("btn btn-solid").setAttribute("href", "javascript:void(0);").setHtml("Continue Shopping");
		checkout.addClass("btn btn-solid").setAttribute("href", "javascript:void(0);").setHtml("Checkout");
		addChild(contShopping).addChild(checkout);
		
		contShopping.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "home");
				evt.$set("label", "Home");
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		checkout.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "checkout");
				evt.$set("label", "Checkout");
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnChangePage", evt);
				}
			}
		},"OnChangePage");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnAddCart", evt);
				}
			}
		},"OnAddCart");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Page p = source.getAncestorWithClass("Page");
				if(p != null) {
					p.fireListener("OnRemoveWishList", evt);
				}
			}
		},"OnRemoveWishList");
		
		
	}
	
	public void setProducts(Array<Object> products) {
		body.clearChildren();
		body.setRendered(false);
		for(Object p : products) {
			ProductLine line = new ProductLine((String)p.$get("name"));
			body.addChild(line);
			line.setProduct(p);
			
			line.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListener("OnAddCart", evt);
				}
			}, "OnAddCart");
			
			line.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					fireListener("OnRemoveWishList", evt);
				}
			}, "OnRemoveWishList");
		}
		
	}
	
	public class ProductLine extends JSContainer{
		
		private JSContainer image = new JSContainer("image", "a");
		private JSContainer title = new JSContainer("tittle", "a");
		private JSContainer availability = new JSContainer("availability", "p");
		private JSContainer price = new JSContainer("price", "h2");
		private JSContainer mavailability = new JSContainer("mavailability", "p");
		private JSContainer mprice = new JSContainer("mprice", "h2").addClass("td-color");
		
		private JSContainer remove = new JSContainer("remove", "a").addClass("icon me-3");
		private JSContainer addCart = new JSContainer("addCart", "a").addClass("cart");
		
		private JSContainer mremove = new JSContainer("mremove", "a").addClass("icon me-1");
		private JSContainer maddCart = new JSContainer("maddCart", "a").addClass("cart");

		private Object product;
		
		public ProductLine(String name) {
			super(name,"tr");
			/*super(name, "<tr>\r\n"
					+ "	<td><div>\r\n"
					+ "		<a href=\"#\" name=\"image\"><img src=\"\" alt=\"\"></a>\r\n"
					+ "	</div></td>\r\n"
					+ "	<td><div>\r\n"
					+ "		<a href=\"#\" name=\"title\">cotton shirt</a>\r\n"
					+ "		<div class=\"mobile-cart-content row\">\r\n"
					+ "			<div class=\"col\">\r\n"
					+ "				<p name=\"mavailability\">in stock</p>\r\n"
					+ "			</div>\r\n"
					+ "			<div class=\"col\">\r\n"
					+ "				<h2 class=\"td-color\" name=\"mprice\">$63.00</h2>\r\n"
					+ "			</div>\r\n"
					+ "			<div class=\"col\">\r\n"
					+ "				<h2 class=\"td-color\">\r\n"
					+ "					<a href=\"#\" class=\"icon me-1\" name=\"mremove\"><i class=\"ti-close\"></i></a>\r\n"
					+ "					<a href=\"#\" class=\"cart\" name=\"maddCart\"><i class=\"ti-shopping-cart\"></i></a>\r\n"
					+ "				</h2>\r\n"
					+ "			</div>\r\n"
					+ "		</div>\r\n"
					+ "	</div></td>\r\n"
					+ "	<td>\r\n"
					+ "		<h2 name=\"price\">$63.00</h2>\r\n"
					+ "	</td>\r\n"
					+ "	<td>\r\n"
					+ "		<p name=\"availability\">in stock</p>\r\n"
					+ "	</td>\r\n"
					+ "	<td>\r\n"
					+ "		<a href=\"#\" class=\"icon me-3\" name=\"remove\"><i class=\"ti-close\"></i> </a>\r\n"
					+ "		<a href=\"#\" class=\"cart\" name=\"addCart\"><i class=\"ti-shopping-cart\"></i></a>\r\n"
					+ "	</td>\r\n"
					+ "</tr>");*/
			
			
			//JSContainer tr = new JSContainer("tr");
			addChild(new JSContainer("td").addChild(image));
			addChild(new JSContainer("td").addChild(title));
			addChild(new JSContainer("td").addChild(price));
			addChild(new JSContainer("td").addChild(availability));
			addChild(new JSContainer("td").addChild(remove).addChild(addCart));
			
			//addChild(addCart).addChild(availability).addChild(image).addChild(maddCart).addChild(mavailability);
			//addChild(mprice).addChild(mremove).addChild(price).addChild(remove).addChild(title);
			
			image.setAttribute("href", "javascript:void(0);");
			this.remove.setHtml("<i class=\"ti-close\"></i>").setAttribute("href", "javascript:void(0);");
			this.mremove.setHtml("<i class=\"ti-close\"></i>").setAttribute("href", "javascript:void(0);");
			
			this.addCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("href", "javascript:void(0);");
			this.maddCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("href", "javascript:void(0);");
			
			
			image.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("pageName", "product-detail/" + getName());
					evt.$set("label", getStringValue(product, "title"));
					fireListener("OnChangePage", evt);
				}
			}, "click");
			
			addCart.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("product", product);
					fireListener("OnAddCart", evt);
				}
			}, "click");
			
			maddCart.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("product", product);
					fireListener("OnAddCart", evt);
				}
			}, "click");
			
			remove.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("product", product);
					fireListener("OnRemoveWishList", evt);
					setStyle("display", "none");
				}
			}, "click");
			
			mremove.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("product", product);
					fireListener("OnRemoveWishList", evt);
					setStyle("display", "none");
				}
			}, "click");
			
		}
		/*
		 * Object pr = new Object();
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
		 */
		
		public void setProduct(Object p) {
			this.product = p;
			String img = getStringValue(p, "front");
			image.clearChildren();
			image.setRendered(false);
			JSContainer im = new JSContainer("img").setAttribute("src", img);
			this.image.addChild(im);
			
			this.title.setHtml(getStringValue(p, "title"));
			String avai = getStringValue(p, "availability");
			this.mavailability.setHtml(avai);
			this.availability.setHtml(avai);
			String prc = getStringValue(p, "price");
			this.price.setHtml(prc);
			this.mprice.setHtml(prc);
			
			String name = getStringValue(p, "name");
			setName(name);
			
			
			
		}
		
		private String getStringValue(Object o, String field) {
			return (String)o.$get(field);
		}
		
	}

}
