package com.archnet;

public class LocalStorageCart extends AbstractLocalStorageProductList implements ICart{
	
	public String getDbKey() {
		return "cart";
	}
}
