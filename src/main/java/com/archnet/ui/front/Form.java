package com.archnet.ui.front;

import framework.components.JSContainer;
import framework.components.api.InputField;
import jsweet.lang.Object;

public class Form extends JSContainer{

	private JSContainer body = new JSContainer("body", "div");
	private Object fields = new Object();
	
	public Form(String name) {
		super(name, "form");
		addClass("theme-form");
		addChild(body);
		body.addClass("form-row row");
	}
	public void clear() {
		body.clearChildren();
		body.setRendered(false);
		fields = new Object();
	}
	
	public void validate() {
		for(String key : Object.keys(fields)) {
			InputField field = (InputField)fields.$get(key);
			field.validate();
				
		}
	}
	
	public void addField(String label, InputField<?> field, boolean fullwidth) {
		JSContainer col = new JSContainer("div").addClass(fullwidth?"col-md-12":"col-md-6");
		JSContainer uilabel = new JSContainer("lab", "label");
		uilabel.setAttribute("for", field.getName());
		body.addChild(col);
		col.addChild(uilabel).addChild(field);
		fields.$set(field.getName(), field);
	}
	
	public void addField(String label, InputField<?> field) {
		addField(label, field, false);
	}
	
	public void setValue(Object vals) {
		for(String key: Object.keys(fields)) {
			InputField field = (InputField)fields.$get(key);
			java.lang.Object val = vals.$get(key);
			field.setValue(val);
		}
	}
	
	public Object getValue() {
		Object result = new Object();
		for(String key: Object.keys(fields)) {
			InputField field = (InputField)fields.$get(key);
			java.lang.Object val = field.getValue();
			//field.setValue(val);
			result.$set(key, val);
		}
		return result;
	}
}
