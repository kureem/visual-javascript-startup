package com.archnet.ui;

import framework.components.JSContainer;

public class Col extends JSContainer{

	public Col(String name) {
		super(name, "div");
	}
	
	public void clearSizes() {
		for(int i = 1; i <=12;i++) {
			for(Size size : Size.values()) {
				String cls = "col-" + size.getValue() + "-" +i;
				if(size == Size.NONE) {
					cls = "col-" + i;
				}
				removeClass(cls);
			}
		}
	}
	public Col setWidth(Size size, int width) {
		for(int i = 1; i <=12;i++) {
			String cls = "col-" + size.getValue() + "-" +i;
			if(size == Size.NONE) {
				cls = "col-" + i;
			}
			removeClass(cls);
		}
		
		String cls = "col-" + size.getValue() + "-" + width;
		if(size == Size.NONE) {
			cls  = "col-" + width;
		}
		addClass(cls);
		return this;
	}
	
	

}
