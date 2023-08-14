package com.archnet.ui.front;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class Page extends JSContainer{
	
	public final static String EVENT_OnChangePage = "OnChangePage";
	public final static String EVENT_OnAddWishList = "OnAddWishList";
	public final static String EVENT_OnAddCart = "OnAddCart";
	public final static String Event_OnRemoveWishList = "OnRemoveWishList";
	public final static String Event_OnLogin = "OnLogin";

	
	public Page(String name) {
		super(name, "section");
		addClass("Page");
		addClass("section-b-space ratio_asos");
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Portal p = source.getAncestorWithClass("Portal");
				if(p != null) {
					p.fireChangePage(evt);
				}
			}
		}, EVENT_OnChangePage);
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Portal p = source.getAncestorWithClass("Portal");
				if(p != null) {
					p.fireAddCart(evt);
				}
			}
		}, EVENT_OnAddCart);
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Portal p = source.getAncestorWithClass("Portal");
				if(p != null) {
					p.fireAddWishList(evt);
				}
			}
		}, EVENT_OnAddWishList);
		
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Portal p = source.getAncestorWithClass("Portal");
				if(p != null) {
					p.fireRemoveWishList(evt);
				}
			}
		}, Event_OnRemoveWishList);
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Portal p = source.getAncestorWithClass("Portal");
				if(p != null) {
					p.fireLogin(evt);
				}
			}
		}, Event_OnLogin);
	}
	
	
	
	
	public void setBody(JSContainer ctn) {
		clearChildren();
		setRendered(false);
		if(ctn != null) {
			addChild(ctn);
		}
	}
}
