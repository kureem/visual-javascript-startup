package com.archnet;

public class LocalStorageWishList extends AbstractLocalStorageProductList implements IWishsList{

	@Override
	public String getDbKey() {
		return "wishlist";
	}

}
