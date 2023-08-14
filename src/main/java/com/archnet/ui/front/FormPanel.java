package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Grid;
import com.archnet.ui.Size;

import framework.components.JSContainer;

public class FormPanel extends Grid{
	
	private JSContainer legend = new JSContainer("legend", "h3");
	
	private Form form = new Form("form");

	public FormPanel(String name) {
		super(name);
		
		Col c = new Col("c");
		c.setWidth(Size.SMALL, 12);
		addCol(c);
		
		c.addChild(legend);
		c.addChild(form);
		
		
	}
	
	
	public Form getForm() {
		return this.form;
	}
	
	public void setLegend(String le) {
		this.legend.setHtml(le);
	}

}
