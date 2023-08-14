package com.archnet.ui.front;

import com.archnet.ICart;
import com.archnet.IWishsList;
import com.archnet.LocalStorageCart;
import com.archnet.LocalStorageWishList;
import com.archnet.ui.front.pages.ForgotPassword;
import com.archnet.ui.front.pages.Home;
import com.archnet.ui.front.pages.Login;
import com.archnet.ui.front.pages.PageNotFound;
import com.archnet.ui.front.pages.Profile;
import com.archnet.ui.front.pages.Register;
import com.archnet.ui.front.pages.Search;
import com.archnet.ui.front.pages.WishList;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Function;
import jsweet.lang.Object;

import static jsweet.dom.Globals.window;
public class Portal extends JSContainer {

	private LoaderSkeletor loader = new LoaderSkeletor("skeleton");

	private JSContainer headerContainer = new JSContainer("headerContainer", "header");

	private Header header = new Header("header");

	private TopHeader topHeader = new TopHeader("topHeader");

	private BreadCrumbSection breadcrumb = new BreadCrumbSection("beadcrumb-section");

	private Page page = new Page("page-holder");

	private Footer footer = new Footer("footer");
	
	private IWishsList wishList = new LocalStorageWishList();
	
	private ICart cart = new LocalStorageCart();
	
	private Object user = null;


	public Portal(String name) {
		super(name, "div");
		addClass("Portal");
		addChild(loader.setStyle("display", "none"));
		addChild(headerContainer);
		addChild(breadcrumb);
		addChild(page);
		addChild(footer);
		headerContainer.addChild(topHeader);
		headerContainer.addChild(header);
		header.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				fireChangePage(evt);
			}
		}, "OnChangePage");

		topHeader.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				fireChangePage(evt);
			}
		}, "OnChangePage");

		breadcrumb.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				fireChangePage(evt);
			}
		}, "OnChangePage");


	}
	
	public Object getLoggedUser() {
		return user;
	}

	public void fireChangePage(Event evt) {
		String label = (String) evt.$get("label");
		setPageTitle(label);
		String pageName = (String) evt.$get("pageName");
		open(pageName);
	}
	
	public void fireAddCart(Event evt) {
		Object product = (Object)evt.$get("product");
		cart.setProduct(product);
		notify("fa fa-check", "Success!", product.$get("title") + " Successfully added to your cart");
	}
	
	public void fireAddWishList(Event evt) {
		Object product = (Object)evt.$get("product");
		wishList.setProduct(product);
		notify("fa fa-check", "Success!", product.$get("title") + " Successfully added to your wishlist");
	}
	
	public void fireRemoveWishList(Event evt) {
		Object pro = (Object)evt.$get("product");
		wishList.deleteProduct((String)pro.$get("name"));
		notify("fa fa-check", "Success!", pro.$get("title") + " Successfully removed from your wishlist");
	}
	
	public void fireLogin(Event evt) {
		this.user = new Object();
		user.$set("email", evt.$get("email"));
		this.topHeader.setLoggedUser(user);
		open("home");
	}
	
	public void notify(String icon, String title, String message) {
		Object jq = (Object)window.$get("$");
		Function notif = (Function)jq.$get("notify");
		Object param = new Object();
		param.$set("icon", icon);
		param.$set("title", title);
		param.$set("message", message);
		notif.call(notif, param);
	}

	public void open(String pageName) {
		if (pageName == "login") {
			Login login = new Login("login");
			getPage().setBody(login);
		} else if (pageName == "home") {
			Home home = new Home("home");
			getPage().setBody(home);
		}else if(pageName == "register") {
			Register register = new Register("register");
			getPage().setBody(register);
		}else if(pageName == "search") {
			Search search = new Search("search");
			getPage().setBody(search);
		}else if(pageName == "forgot") {
			ForgotPassword forgot = new ForgotPassword("forgot");
			getPage().setBody(forgot);
		}else if(pageName == "wishlist") {
			WishList wishlist = new WishList("wishlist");
			this.wishList.getProducts().then((prods)->{
				wishlist.setProducts(prods);
				getPage().setBody(wishlist);
				getPage().setRendered(false);
				getPage().render();
			});
		}else if(pageName == "profile") {
			if(getLoggedUser() != null) {
				Profile prof = new Profile("profile");
				getPage().setBody(prof);
			}
		}else {
			PageNotFound notfound = new PageNotFound("notfound");
			getPage().setBody(notfound);
		}
	}

	public Page getPage() {
		return this.page;
	}

	public LoaderSkeletor getLoader() {
		return loader;
	}

	public JSContainer getHeaderContainer() {
		return headerContainer;
	}

	public Breadcrumb getBreadcrumb() {
		return breadcrumb.getBreadcrumb();
	}

	public void setLoader(LoaderSkeletor loader) {
		this.loader = loader;
	}

	public void setHeader(JSContainer header) {
		this.headerContainer = header;
	}

	public void setPage(Page page) {
		this.page = page;
	}

	public Header getHeader() {
		return header;
	}

	public TopHeader getTopHeader() {
		return topHeader;
	}

	// setting
	public void setBreadcrumbs(Array<Object> items) {
		getBreadcrumb().setBreadcrumbs(items);
	}

	// setting
	public void setMainMenu(Array<Object> items) {
		getHeader().setMenu(items);
		Array<Object> breadc = new Array<Object>();
		breadc.push(items.$get(0));
		setBreadcrumbs(breadc);
	}

	// setting
	public void setLogo(String logo) {
		getHeader().setLogo(logo);
	}

	// setting
	public void setStoreName(String name) {
		getTopHeader().setStoreName(name);
	}

	// setting
	public void setPhoneNumber(String phone) {
		getTopHeader().setPhoneNumber(phone);
	}

	// setting
	public void setPageTitle(String title) {
		this.breadcrumb.setPageTitle(title);
	}

	public void setSetting(Setting sett) {
		setPageTitle(sett.pageTitle);
		setLogo(sett.logo);
		setStoreName(sett.storeName);
		setPhoneNumber(sett.phoneNumber);
		setMainMenu(sett.menu);
		getFooter().setSetting(sett);
	}

	public Footer getFooter() {
		return this.footer;
	}

	public IWishsList getWishList() {
		return wishList;
	}

	public ICart getCart() {
		return cart;
	}
	

}
