package com.archnet.ui.front;

import jsweet.lang.Array;
import jsweet.lang.Object;

public class Boot {
	
	public static void renderBack() {
		com.archnet.ui.back.Portal po = new com.archnet.ui.back.Portal("po");
		po.render();
	}
 
	public static void main(String[] args) {
		//renderBack();
		renderFront();
	}
	
	public static void renderFront() {
		Portal portal = new Portal("portal");
		
		Setting set = new Setting();
		set.logo = "https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png";
		set.pageTitle = "Home";
		set.phoneNumber = "+230 5715902800000000";
		set.storeName = "Archenet Ltd";
		set.address = "R. Tagore Avenue, Mesnil Phoenix, Mauritius";
		set.email = "kureem@gmail.com";
		set.facebook = "https://facebook.com";
		set.fax = "+230 57169028";
		set.googleplus = "https://googleplus.com";
		set.instagram = "https://instagram.com";
		set.rss = "https://rss.com";
		set.storeDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,";
		set.twitter = "https://twitter.com";
		
		
		Array<jsweet.lang.Object> menu = new Array<jsweet.lang.Object>();
		addMenu("home", "Home", null, menu);
		addMenu("featured", "Featured", null, menu);
		addMenu("newarrivals", "New Arrivals", "new", menu);
		addMenu("mens", "Men", null, menu);
		addMenu("women", "Women", null, menu);
		addMenu("clothings", "Clothings", null, menu);
		addMenu("accessories", "Accessories", "50% Off", menu);
		set.menu = menu;
		
		Array<jsweet.lang.Object> categories = new Array<jsweet.lang.Object>();
		addMenu("mens", "Men", null, categories);
		addMenu("women", "Women", null, categories);
		addMenu("clothings", "Clothings", null, categories);
		addMenu("accessories", "Accessories", null, categories);
		addMenu("featured", "Featured", null, categories);
		set.categories = categories;
		
		portal.setSetting(set); 
		portal.open("home");
		
		portal.render();

	}
	
	public static void addMenu(String name, String label, String tag, Array<Object> menu) {
		Object obj = new Object();
		obj.$set("name", name);
		obj.$set("label", label);
		obj.$set("tag", tag);
		menu.push(obj);
	}

}
