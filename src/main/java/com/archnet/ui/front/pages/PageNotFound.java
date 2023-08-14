package com.archnet.ui.front.pages;

import com.archnet.ui.front.Page;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class PageNotFound extends HTMLTemplateContainer{

	public PageNotFound(String name) {
		super(name, "<div class=\"container\">\r\n"
				+ "            <div class=\"row\">\r\n"
				+ "                <div class=\"col-sm-12\">\r\n"
				+ "                    <div class=\"error-section\">\r\n"
				+ "                        <h1>404</h1>\r\n"
				+ "                        <h2>page not found</h2>\r\n"
				+ "                        <a name=\"back\" class=\"btn btn-solid\">back to home</a>\r\n"
				+ "                    </div>\r\n"
				+ "                </div>\r\n"
				+ "            </div>\r\n"
				+ "        </div>");
		
		
		JSContainer back = new JSContainer("back", "a").setAttribute("href", "javascript:void(0);");
		back.setHtml("Back to home");
		back.addClass("btn btn-solid");
		addChild(back);
		back.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "home");
				evt.$set("label", "Home");
				Page p = source.getAncestorWithClass("Page");
				if(p != null)
					p.fireListener("OnChangePage", evt);
			}
		}, "click");
		
		
	}

}
