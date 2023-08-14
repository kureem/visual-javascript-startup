package com.archnet.ui.back;

import com.archnet.ui.List;

import framework.components.HTMLTemplateContainer;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSInput;
import framework.components.input.JSTextInput;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Header extends JSContainer{

	private JSContainer logoLink = new JSContainer("logo-link", "a");
	
	private HTMLTemplateContainer slideButton = new HTMLTemplateContainer("slide", "<div class=\"mobile-sidebar w-auto\">\r\n"
			+ "                    <div class=\"media-body text-end switch-sm\">\r\n"
			+ "                        <label class=\"switch\"><a href=\"javascript:void(0)\"><i id=\"sidebar-toggle\" data-feather=\"align-left\"></i></a></label>\r\n"
			+ "                    </div>\r\n"
			+ "                </div>");
	
	private JSContainer logo = new JSContainer("logo", "img");
	
	private List nav = new List("nav-menus", "ul");

	private HTMLTemplateContainer searchLayout = new HTMLTemplateContainer("searchlayout", "<form class=\"form-inline search-form\" data-form-type=\"\">\r\n"
			+ "                                <div class=\"form-group\">\r\n"
			+ "                                    <input name=\"search\" class=\"form-control-plaintext\" type=\"search\" placeholder=\"Search..\" data-form-type=\"\">"
			+ "										<span class=\"d-sm-none mobile-search\">"
			+ "											<i data-feather=\"search\"></i>"
			+ "										</span>\r\n"
			+ "                                </div>\r\n"
			+ "                            </form>");
	
	
	private JSTextInput search = new JSTextInput("search");
	
	private JSContainer fullscreen = new JSContainer("fullscreen", "a");
	
	
	private JSContainer currentLanguageLink = new JSContainer("currentLanguageLink", "a").addClass("txt-dark").setAttribute("href", "javascript:void(0);");
	
	private JSContainer currentLanguage = new JSContainer("currentLanguage", "h6");
	
	private List languages = new List("languages", "ul");
	
	private JSContainer notif = new JSContainer("notif", "div");
	
	private JSContainer numnotifs = new JSContainer("numnotifs", "span");
	
	private List notifications = new List("notifications", "ul"); 
	
	
	private JSContainer settingMenu = new JSContainer("div");
	
	private JSContainer myImage = new JSContainer("myimg", "img");
	
	private JSContainer dotanim = new JSContainer("div").addClass("dotted-animation");
	
	private JSContainer editprofile = new JSContainer("editprofile", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Edit Profile");
	private JSContainer inbox = new JSContainer("inbox", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Inbox");
	private JSContainer lockscreen = new JSContainer("lockscreen", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Lock Screen");
	private JSContainer settings = new JSContainer("settings", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Settings");
	private JSContainer logout = new JSContainer("logout", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Logout");
	
	private final static EventListener CHANGE_PAGE = new EventListener() {
		
		@Override
		public void performAction(Renderable source, Event evt) {
			evt.$set("pageName", source.getName());
			evt.$set("label", source.getAttribute("data-label"));
			JSContainer header= source.getAncestorWithClass("Header");
			header.fireListener("OnChangePage", evt);
			
		}
	};
	
	public Header(String name) {
		super(name, "div");
		addClass("page-main-header");
		addClass("Header");
		
		JSContainer row = new JSContainer("div").addClass("main-header-right row");
		addChild(row);
		
		JSContainer left = new JSContainer("div").addClass("main-header-left d-lg-none w-auto");
		row.addChild(left);
		JSContainer logoWrapper = new JSContainer("div").addClass("logo-wrapper");
		left.addChild(logoWrapper);
		
		logoWrapper.addChild(logoLink.addChild(logo));
		logoLink.setAttribute("href", "javascript:void(0);");
		logo.addClass("blur-up lazyloaded d-block d-lg-none");
		
		logoLink.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "home");
				evt.$set("label", "Home");
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		row.addChild(slideButton);
		slideButton.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				if(hasClass("open")) {
					removeClass("open");
					
				}else {
					addClass("open");
				}
				fireListener("OnToggle", evt);
			}
		}, "click");
		
		JSContainer right = new JSContainer("div").addClass("nav-right col");
		row.addChild(right);
		
		nav.addClass("nav-menus");
		right.addChild(nav);
		
		nav.addItem(searchLayout);
		
		search.addClass("form-control-plaintext");
		search.setAttribute("type", "search");
		search.setPlaceHolder("Search....");
		searchLayout.addChild(search);
		
		
		fullscreen.setAttribute("href", "javascript:void(0);");
		fullscreen.setHtml("<i data-feather=\"maximize-2\"></i>");
		fullscreen.setAttribute("onclick", "javascript:toggleFullScreen()");
		nav.addItem(fullscreen);
		
		nav.addItem(currentLanguageLink.addClass("txt-dark"));
		currentLanguageLink.getParent().addClass("onhover-dropdown");
		currentLanguageLink.addChild(currentLanguage);
		

		currentLanguageLink.getParent().addChild(languages);
		languages.addClass("language-dropdown onhover-show-div p-20");
		addLanguage("English", "en", "is");
		addLanguage("Spanish", "es", "um");
		addLanguage("Portuguese", "pt", "uy");
		addLanguage("French", "fr", "nz");
		
		
		notif.setHtml("<i data-feather=\"bell\"></i>");
		
		nav.addItem(notif);
		notif.getParent().addClass("onhover-dropdown");
		numnotifs.addClass("badge badge-pill badge-primary pull-right notification-badge");
		notif.getParent().addChild(numnotifs);
		notif.getParent().addChild(new JSContainer("span").addClass("dot"));
		
		notifications.addClass("notification-dropdown onhover-show-div p-0");
		notif.getParent().addChild(notifications);
		
		
		settingMenu.addClass("media align-items-center");
		myImage.addClass("align-self-center pull-right img-50 blur-up lazyloaded");
		settingMenu.addChild(myImage);
		myImage.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/user3.jpg");
		
		settingMenu.addChild(dotanim);
		dotanim.setHtml("<span class=\"animate-circle\"></span><span class=\"main-circle\"></span>");
		
		List settingM = new List("setting", "ul");
		settingM.addClass("profile-dropdown onhover-show-div p-20");
		settingMenu.addChild(settingM);
		settingM.addItem(editprofile.setHtml("<i data-feather=\"user\"></i>Edit Profile"));
		settingM.addItem(inbox.setHtml("<i data-feather=\"mail\"></i>Inbox</a>"));
		settingM.addItem(lockscreen.setHtml("<i data-feather=\"lock\"></i>Lock Screen</a>"));
		settingM.addItem(settings.setHtml("<i data-feather=\"settings\"></i>Settings</a>"));
		settingM.addItem(logout.setHtml("<i data-feather=\"log-out\"></i>Logout</a>"));
		nav.addItem(settingMenu);
		settingMenu.getParent().addClass("onhover-dropdown");
		
		right.addChild(new JSContainer("div").addClass("d-lg-none mobile-toggle pull-right").setHtml("<i data-feather=\"more-horizontal\"></i>"));
		
		editprofile.addEventListener(CHANGE_PAGE, "click");
		inbox.addEventListener(CHANGE_PAGE, "click");
		settings.addEventListener(CHANGE_PAGE, "click");
		lockscreen.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("OnLockScreen", evt);
			}
		}, "click");
		
		logout.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("OnLogOut", evt);
			}
		}, "click");
		
		setCurrentLanguage("EN");
	}
	
	
	
	public void setNotifications(Array<Object> notifs) {
		setNumNotifs(notifs.length);
		notifications.clearChildren();
		notifications.setRendered(false);
		JSContainer label = new JSContainer("span").setHtml("Notifications");
		JSContainer num = new JSContainer("span").addClass("badge badge-pill badge-primary pull-right");
		num.setHtml(notifs.length + "");
		notifications.addItem(label);
		label.getParent().addChild(num);
		for(Object o : notifs) {
			String type = (String)o.$get("type");
			String title = (String)o.$get("title");
			String text = (String)o.$get("text");
			String notifId = (String)o.$get("id");
			JSContainer media = new JSContainer("div").addClass("media");
			media.setAttribute("data-id", notifId);
			JSContainer body = new JSContainer("div").addClass("media-body");
			media.addChild(body);
			JSContainer uiTitle = new JSContainer("h6").addClass("m-0").addClass("txt-" + type);
			uiTitle.setHtml(title);
			body.addChild(uiTitle);
			JSContainer uiText = new JSContainer("p").addClass("m-0").setHtml(text);
			body.addChild(uiText);
			notifications.addItem(media);
			
			media.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					String notifId = source.getAttribute("data-id");
					evt.$set("recordId", notifId);
					fireListener("OnShowRecord", evt);
					
				}
			}, "click");
		}
		
		JSContainer all = new JSContainer("a").setAttribute("href", "javascript:void(0);").setHtml("All");
		notifications.addItem(all);
		all.getParent().addChild(new JSContainer("span").setHtml("Notification"));
		all.getParent().addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("pageName", "notifications");
				evt.$set("label", "Notifications");
				fireListener("OnChangePage", evt);
			}
		}, "click");
		
		
		
		
	}
	
	public void setNumNotifs(double num) {
		this.numnotifs.setHtml(num + "");
	}
	
	
	public void addLanguage(String lang, String abbr, String flag) {
		String l = "<i class=\"flag-icon flag-icon-"+flag+"\"></i>"+lang+"</a>";
		JSContainer link = new JSContainer(lang, "a").setAttribute("href", "javascript:void(0);");
		link.setAttribute("data-lng", abbr);
		link.setHtml(l);
		languages.addItem(link);
		link.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("language", lang);
				evt.$set("abbr", abbr);
				evt.$set("flag", flag);
				fireListener("OnChangeLanguage", evt);
				setCurrentLanguage(abbr);
			}
		}, "click");
		
		
		
	}
	
	public void setCurrentLanguage(String lang) {
		this.currentLanguage.setHtml(lang);
	}
	
	
	public void setLogo(String src) {
		logo.setAttribute("src", src);
	}

}
