package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Grid;
import com.archnet.ui.List;
import com.archnet.ui.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Footer extends JSContainer{
	
	private JSInput<String> email  = new  JSInput<String>("email");
	
	private JSContainer logo =new JSContainer("logo", "img");
	
	private JSContainer description = new JSContainer("description", "p");
	
	private List categories = new List("categories", "ul");
	
	private JSContainer address = new JSContainer("address", "span");
	
	private JSContainer phone = new JSContainer("phone", "span");
	
	private JSContainer storeemail =  new JSContainer("email", "a");
	
	private  JSContainer fax = new JSContainer("fax", "span");
	
	private JSContainer facebook = new JSContainer("facebook", "a");
	
	private JSContainer googleplus = new JSContainer("googleplus", "a");
	
	private JSContainer twitter = new JSContainer("twitter", "a");
	
	private JSContainer instagram = new JSContainer("instagram", "a");
	
	private JSContainer rss = new JSContainer("rss", "a");
	
	private List socials = new List("socials", "ul");

	public Footer(String name) {
		super(name,"footer");
		addClass("footer-light");
		JSContainer  lightLayout = new JSContainer("div").addClass("light-layout");
		addChild(lightLayout);
		JSContainer ctn = new JSContainer("div").addClass("container");
		lightLayout.addChild(ctn);
		
		JSContainer section = new JSContainer("section").addClass("small-section border-section border-top-0");
		ctn.addChild(section);
		
		JSContainer row =new JSContainer("div").addClass("row");
		section.addChild(row);
		JSContainer left = new JSContainer("left", "div").addClass("col-lg-6");
		row.addChild(left);
		
		JSContainer right = new JSContainer("right", "div").addClass("col-lg-6");
		row.addChild(right);
		
		
		JSContainer subscribe = new JSContainer("div").addClass("subscribe");
		left.addChild(subscribe);
		
		JSContainer c = new JSContainer("div");
		subscribe.addChild(c);
		JSContainer know = new JSContainer("h4").setHtml("KNOW IT ALL FIRST!");
		c.addChild(know);
		JSContainer subscribeMsg = new JSContainer("p");
		c.addChild(subscribeMsg);
		subscribeMsg.setHtml("Never Miss Anything From Us By Signing Up To Our Newsletter.");
		
		
		JSContainer frm = new JSContainer("div").addClass("form-inline subscribe-form auth-form needs-validation");
		JSContainer ifrm = new JSContainer("div").addClass("form-group mx-sm-3");
		frm.addChild(ifrm);
		right.addChild(frm);
		
		email.addClass("form-control");
		email.setPlaceHolder("Enter your email");
		email.setRequired(true);
		email.setStyle("float", "left");
		ifrm.addChild(email);
		
		
		JSContainer btnSubscribe = new JSContainer("subscribe", "button").addClass("btn btn-solid").setHtml("Subscribe");
		ifrm.addChild(btnSubscribe);
		
		btnSubscribe.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String semail = email.getValue();
				if(semail != null && semail != "") {
					evt.$set("email", semail);
					fireListener("OnSubscribe", evt);
				}
			}
		}, "click");
		
		
		
		JSContainer sectionb = new JSContainer("section").addClass("section-b-space light-layout");
		addChild(sectionb);
		Grid gr = new Grid("gr");
		sectionb.addChild(gr);
		gr.getRow().addClass("footer-theme partition-f");
		
		Col col1 = new Col("1");
		col1.setWidth(Size.LARGE, 4).setWidth(Size.MEDIUM, 6);
		Col col2 = new Col("2");
		col2.setWidth(Size.LARGE, 4).setWidth(Size.MEDIUM, 6);
		col2.addClass("offset-xl-1");
		Col col3 = new Col("3");
		col3.addClass("col");
		//Col col4 = new Col("4");
		gr.addCol(col1).addCol(col2).addCol(col3);//.addCol(col4);
		
		JSContainer footerContent = new JSContainer("div").addClass("footer-contant");
		JSContainer footerlogo = new JSContainer("div").addClass("footer-logo");
		footerContent.addChild(footerlogo);
		footerlogo.addChild(logo);
		footerContent.addChild(description);
		
		JSContainer footersocial = new JSContainer("div").addClass("footer-social");
		footerContent.addChild(footersocial);
		footersocial.addChild(socials);
		
		facebook.addChild(new JSContainer("i").addClass("fa fa-facebook-f")).setAttribute("target", "_blank");
		googleplus.addChild(new JSContainer("i").addClass("fa fa-google-plus")).setAttribute("target", "_blank");
		twitter.addChild(new JSContainer("i").addClass("fa fa-twitter")).setAttribute("target", "_blank");
		instagram.addChild(new JSContainer("i").addClass("fa fa-instagram")).setAttribute("target", "_blank");
		rss.addChild(new JSContainer("i").addClass("fa fa-rss").setAttribute("aria-hidden", "true")).setAttribute("target", "_blank");
		
		socials.addItems(facebook, googleplus, twitter,instagram,rss);
		
		col1.addChild(footerContent);
		
		
		
		
		setCol2(col2);
		
		setCol3(col3);
		
	}
	
	private void setCol2(Col col2) {
		JSContainer subtitle =new JSContainer("div").addClass("sub-title");
		JSContainer footertitle = new JSContainer("div").addClass("footer-title");
		footertitle.addChild(new JSContainer("h4").setHtml("Categories"));
		subtitle.addChild(footertitle);
		col2.addChild(subtitle);
		JSContainer content = new JSContainer("div").addClass("footer-contant");
		subtitle.addChild(content);
		
		content.addChild(categories);
	}
	
	private void setCol3(Col col3) {
		JSContainer subtitle =new JSContainer("div").addClass("sub-title");
		JSContainer footertitle = new JSContainer("div").addClass("footer-title");
		footertitle.addChild(new JSContainer("h4").setHtml("Store Information"));
		subtitle.addChild(footertitle);
		col3.addChild(subtitle);
		JSContainer content = new JSContainer("div").addClass("footer-contant");
		subtitle.addChild(content);
		
		List info = new List("info", "ul");
		content.addChild(info);
		
		JSContainer iconadd = new JSContainer("i").addClass("fa fa-map-marker");
		info.addItem(iconadd);
		iconadd.getParent().addChild(address);
		
		JSContainer iconphone = new JSContainer("i").addClass("fa fa-phone");
		info.addItem(iconphone);
		iconphone.getParent().addChild(phone);
		
		JSContainer iconemail = new JSContainer("i").addClass("fa fa-envelope");
		info.addItem(iconemail);
		iconemail.getParent().addChild(new JSContainer("span").setHtml("Email Us: "));
		iconemail.getParent().addChild(storeemail);
		   
		JSContainer iconfax = new JSContainer("i").addClass("fa fa-fax");
		info.addItem(iconfax);
		iconfax.getParent().addChild(fax);
	}
	
	public void setFacebook(String fb) {
		this.facebook.setAttribute("href", fb);
	}
	
	public void setTwitter(String tw) {
		this.twitter.setAttribute("href", tw);
	}
	
	public void setGooglePlus(String gp) {
		this.googleplus.setAttribute("href", gp);
	}
	
	public void setInstagram(String ins) {
		this.instagram.setAttribute("href", ins);
	}
	
	public void setRss(String rs) {
		this.rss.setAttribute("href", rs);
	}
	
	public void setAddress(String addr) {
		this.address.setHtml(addr);
	}
	
	public void setPhone(String phone) {
		this.phone.setHtml("Call Us: " + phone);
	}
	
	public void setEmail(String em) {
		this.storeemail.setHtml(em).setAttribute("href", "mailto:" + em);
	}
	
	public void setFax(String fx) {
		this.fax.setHtml(fx);
	}
	
	public void setLogo(String lo) {
		logo.setAttribute("src", lo);
	}
	
	public void setDescription(String desc) {
		this.description.setHtml(desc);
	}
	
	public void setCategories(Array<Object> cats) {
		this.categories.clearChildren();
		this.setRendered(false);
		for(Object o : cats) {
			String name = (String)o.$get("name");
			String label = (String)o.$get("label");
			JSContainer link = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
			categories.addItem(link);
			link.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					evt.$set("label", source.getHtml());
					evt.$set("pageName", source.getName());
					fireListener("OnChangePage", evt);
				}
			}, "click");
		}
	}
	
	
	public void setSetting(Setting set) {
		setAddress(set.address);
		setCategories(set.categories);
		setDescription(set.storeDescription);
		setEmail(set.email);
		setFacebook(set.facebook);
		setFax(set.fax);
		setGooglePlus(set.googleplus);
		setInstagram(set.instagram);
		setLogo(set.logo);
		setPhone(set.phoneNumber);
		setRss(set.rss);
		setTwitter(set.twitter);
	}

}
