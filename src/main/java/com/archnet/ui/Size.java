package com.archnet.ui;

public enum Size {
	
	 SMALL("sm"), MEDIUM("md"), LARGE("lg"), EXTRA_LARGE("xl"), EXTRA_EXTRA_LARGE("xxl"), NONE("none");

	private String value;

	private Size(String value) {
		this.value = value;  
	}

	public String getValue() {
		return value;
	}

}
