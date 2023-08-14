package com.archnet.ui.front;

import com.archnet.ui.Col;
import com.archnet.ui.Row;
import com.archnet.ui.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;

public class ProductPaginator extends JSContainer{
	
	private Pagination pagination =new Pagination("pagination");
	private JSContainer count = new JSContainer("count", "h5");
	
	
	private int pageSize = 25;
	
	private int total =-1;
	
	private int page = 1;
	
	private int numPages = -1;
	
	public static String Event_OnChange = "OnChange";
	
	

	public ProductPaginator(String name) {
		super(name, "div");
		addClass("product-pagination");
		
		JSContainer theme = new JSContainer("div").addClass("theme-paggination-block");
		JSContainer container = new JSContainer("div").addClass("container-fluid p-0");
		addChild(theme.addChild(container));
		
		Row row = new Row("row");
		container.addChild(row);
		
		Col left = new Col("col");
		left.setWidth(Size.EXTRA_LARGE, 6).setWidth(Size.MEDIUM, 6).setWidth(Size.SMALL, 12);
		row.addChild(left);
		
		Col right = new Col("col");
		right.setWidth(Size.EXTRA_LARGE, 6).setWidth(Size.MEDIUM, 6).setWidth(Size.SMALL, 12);
		row.addChild(right);
		
		JSContainer nav = new JSContainer("nav").setAttribute("aria-label", "Page navigation");
		left.addChild(nav);
		nav.addChild(pagination);
		
		JSContainer searchCount = new JSContainer("div").addClass("product-search-count-bottom");
		
		right.addChild(searchCount.addChild(count));
		
		pagination.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				int page = (Integer)evt.$get("page");
				setCurrentPage(page);
				fireOnChange(evt);
				
			}
		}, "OnChange");
	}
	
	public void fireOnChange(Event evt) {
		evt.$set("pageSize", this.pageSize );
		evt.$set("page", page );
		int numItem = this.pageSize;
		evt.$set("numItems", numItem  );
		
		evt.$set("total", this.total ); 
		if(this.page == numPages) {
			numItem = this.total%this.pageSize;
			if(numItem >0) {
				evt.$set("numItems", numItem );
			}
		}
		int start = (pageSize * (page-1)) + 1;
		int end = start + numItem-1;
		evt.$set("start",start);
		evt.$set("end", end);
		String label = "Showing Products " + start + " - " + end + " of " + total + " results";
		this.count.setHtml(label);
		fireListener("OnChange", evt);
	}
	
	public void start() {
		CustomEvent onchange = new CustomEvent("OnChange");
		fireOnChange(onchange);
	}
	
	private void setCurrentPage(int page) {
		this.page = page;
		
	}
	
	public void setValue(int total) {
		setValue(total, 25);
	}
	
	public void setPageSize(int pageSize) {
		setValue(this.total, pageSize);
	}
	
	public void setValue(int total, int pageSize) {
		this.pageSize = pageSize;
		this.total = total;
		this.page =1;
		numPages = (total -(total%pageSize))/pageSize;
		if((total%pageSize)>0) {
			numPages = numPages + 1;
		}
		
		this.pagination.setPages(numPages);
		this.pagination.fireOnChange(new CustomEvent("OnChange"));
		
	}
	
	
	
	
	public Pagination getPagination() {
		return pagination;
	}

	public int getPageSize() {
		return pageSize;
	}

	public int getTotal() {
		return total;
	}

	public int getPage() {
		return page;
	}

	public int getNumPages() {
		return numPages;
	}




	public class Pagination extends JSContainer{
		
		private JSContainer previous = new JSContainer("previous", "a").setAttribute("href", "javascript:void(0);");
		
		private JSContainer next = new JSContainer("next", "a").setAttribute("href", "javascript:void(0);");
		
		private int currentPage = 1;
		
		private int pages = -1;
		
		public Pagination(String name) {
			super(name, "ul");
			addClass("pagination");
			
			previous.setHtml("<span aria-hidden=\"true\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> <span class=\"sr-only\">Previous</span>");
			previous.addClass("page-link").setAttribute("aria-label", "Previous");
			previous.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					previous();
					fireOnChange(evt);
				}
			}, "click");
			next.setHtml("<span aria-hidden=\"true\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></span> <span class=\"sr-only\">Next</span>");
			next.addClass("page-link").setAttribute("aria-label", "Next");
			next.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					next();
					fireOnChange(evt);
					
				}
			}, "click");
			//refresh(pages);
		}
		
		public void setPages(int pages) {
			refresh(pages);
		}
		
		public Pagination addItem(JSContainer item) {
			JSContainer li = new JSContainer("li").addClass("page-item");
			addChild(li);
			li.addChild(item);
			return this;
		}
		
		public Pagination addItem(int page) {
			JSContainer link = new JSContainer(page+ "", "a").addClass("page-link").setHtml(page + "");
			link.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					setCurrentPage(page);
					fireOnChange(evt);
					
				}
			}, "click");
			return addItem(link);
			
		}
		
		public void fireOnChange(Event evt) {
			evt.$set("page", currentPage );
			fireListener("OnChange", evt);
		}
		
		public void next() {
			if(currentPage < pages) {
				currentPage = currentPage + 1;
				setCurrentPage(currentPage);
			}
		}
		
		public void previous() {
			if(currentPage > 1) {
				this.currentPage = this.currentPage -1;
				setCurrentPage(currentPage);
			}
		}
		
		public void refresh(int pages) {
			this.pages = pages;
			clearChildren();
			setRendered(false);
			previous.setRendered(false);
			next.setRendered(false);
			addItem(previous);
			for(int i =1; i <=pages; i++) {
				addItem(i);
			}
			addItem(next);
			setCurrentPage(1);
		}
		public void setCurrentPage(int pageNumber) {
			for(Renderable r : getChildren()) {
				r.removeClass("active");
			}
			Renderable li = getChildren().$get(pageNumber);
			li.addClass("active");
			this.currentPage = pageNumber;
		}
		
		public int getPages() {
			return this.pages;
		}
		
		public int getCurrentPage() {
			return this.currentPage;
		}
		
	}

}
