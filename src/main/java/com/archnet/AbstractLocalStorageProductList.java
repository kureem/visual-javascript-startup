package com.archnet;

import static jsweet.dom.Globals.localStorage;

import java.util.function.BiConsumer;
import java.util.function.Consumer;

import def.js.Promise;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public abstract class AbstractLocalStorageProductList implements IProductList{
	public abstract String getDbKey();
	
	public void setProduct(Object product) {
	
		Array<Object> prds = getProducts_();
		String name = (String)product.$get("name");
		boolean added = false;
		Array<Object> clo = new Array<Object>();
		for(Object p : prds) {
			String pname = (String)p.$get("name");
			if(pname == name) {
				clo.push(product);
				added = true;
			}else {
				clo.push(p);
			}
		}
		if(!added) {
			clo.push(product);
		}
		localStorage.setItem(getDbKey(), JSON.stringify(clo));
	}
	
	private Promise<Array<Object>> toPromise(Array<Object> result){
		final Array<Object> tmp = new Array<Object>();
		for(Object o : tmp) {
			result.push(o);
		}
		BiConsumer<Consumer<Array<Object>>, Consumer<Object>> consu = new BiConsumer<Consumer<Array<Object>>, Consumer<Object>>() {
			public void accept(Consumer<Array<Object>> t, Consumer<Object> u) {
				t.accept(result);
			}
		};
		return new Promise(consu);
	}
	

	public Promise<Array<Object>> getProducts(){
		
		return toPromise(getProducts_());
	}
	
	private Array<Object> getProducts_(){
		String js =  (String)localStorage.getItem(getDbKey());
		Array<Object> result = new Array<Object>();
		if(js != null) {
			result = (Array<Object>)JSON.parse(js);
		}
		return result;
	}
	
	public void deleteProduct(String name) {
		Array<Object> prds = getProducts_();
		Array<Object> clo = new Array<Object>();
		for(Object p : prds) {
			String pname = (String)p.$get("name");
			if(pname != name) {
				clo.push(p);
			}
		}
		localStorage.setItem(getDbKey(), JSON.stringify(clo));
	}
	
	public Promise<Object> getProduct(String name) {
		
		BiConsumer<Consumer<Object>, Consumer<Object>> buc = new BiConsumer<Consumer<Object>, Consumer<Object>>() {

			@Override
			public void accept(Consumer<Object> t, Consumer<Object> u) {
				
				
				Array<Object> prds = getProducts_();
				for(Object p : prds) {
					String pname = (String)p.$get("name");
					if(pname == name) {
						t.accept(p);
					}
				}
			}

		};

		return new Promise(buc);
	}
}
