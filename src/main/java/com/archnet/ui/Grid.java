package com.archnet.ui;

import framework.components.JSContainer;

public class Grid extends JSContainer{

	private Row row = new Row("row");
	
	public Grid(String name) {
		super(name, "div");
		addClass("container");
		addChild(row);
	}
	
	public Row getRow() {
		return row;
	}
	
	public Grid addCol(Col col) {
		row.addChild(col);
		return this;
	}
	
	public Col getCol(int index) {
		return (Col)row.getChildren().$get(index);
	}

}
