package com.archnet;

import def.js.Promise;
import jsweet.lang.Array;
import jsweet.lang.Object;

public interface IProductList {

	public void setProduct(Object product);

	public Promise<Array<Object>> getProducts();

	public void deleteProduct(String name);

	public Promise<Object> getProduct(String name);

}
