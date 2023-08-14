/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class AbstractLocalStorageProductList {
    setProduct(product) {
        const prds = this.getProducts_();
        const name = product["name"];
        let added = false;
        const clo = (new Array());
        for (let index121 = 0; index121 < prds.length; index121++) {
            let p = prds[index121];
            {
                const pname = p["name"];
                if (pname === name) {
                    clo.push(product);
                    added = true;
                }
                else {
                    clo.push(p);
                }
            }
        }
        if (!added) {
            clo.push(product);
        }
        localStorage.setItem(this.getDbKey(), JSON.stringify(clo));
    }
    /*private*/ toPromise(result) {
        const tmp = (new Array());
        for (let index122 = 0; index122 < tmp.length; index122++) {
            let o = tmp[index122];
            {
                result.push(o);
            }
        }
        const consu = (t, u) => {
            (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
        };
        return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
            return funcInst;
        } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
    }
    getProducts() {
        return this.toPromise(this.getProducts_());
    }
    /*private*/ getProducts_() {
        const js = localStorage.getItem(this.getDbKey());
        let result = (new Array());
        if (js != null) {
            result = JSON.parse(js);
        }
        return result;
    }
    deleteProduct(name) {
        const prds = this.getProducts_();
        const clo = (new Array());
        for (let index123 = 0; index123 < prds.length; index123++) {
            let p = prds[index123];
            {
                const pname = p["name"];
                if (pname !== name) {
                    clo.push(p);
                }
            }
        }
        localStorage.setItem(this.getDbKey(), JSON.stringify(clo));
    }
    getProduct(name) {
        const buc = (t, u) => {
            const prds = this.getProducts_();
            for (let index124 = 0; index124 < prds.length; index124++) {
                let p = prds[index124];
                {
                    const pname = p["name"];
                    if (pname === name) {
                        (target => (typeof target === 'function') ? target(p) : target.accept(p))(t);
                    }
                }
            }
        };
        return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
            return funcInst;
        } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(buc))));
    }
    constructor() {
    }
}
AbstractLocalStorageProductList["__class"] = "com.archnet.AbstractLocalStorageProductList";
AbstractLocalStorageProductList["__interfaces"] = ["com.archnet.IProductList"];
var ui;
(function (ui) {
    var back;
    (function (back) {
        class Body extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.sideMenu = new ui.back.SideMenu("sideMenu");
                this.addClass("page-body-wrapper");
                this.addClass("Body");
                this.addChild(this.sideMenu);
            }
        }
        back.Body = Body;
        Body["__class"] = "com.archnet.ui.back.Body";
        Body["__interfaces"] = ["framework.components.api.Renderable"];
    })(back = ui.back || (ui.back = {}));
})(ui || (ui = {}));
(function (ui) {
    var back;
    (function (back) {
        class Header extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.logoLink = new JSContainer("logo-link", "a");
                this.slideButton = new HTMLTemplateContainer("slide", "<div class=\"mobile-sidebar w-auto\">\r\n                    <div class=\"media-body text-end switch-sm\">\r\n                        <label class=\"switch\"><a href=\"javascript:void(0)\"><i id=\"sidebar-toggle\" data-feather=\"align-left\"></i></a></label>\r\n                    </div>\r\n                </div>");
                this.logo = new JSContainer("logo", "img");
                this.nav = new ui.List("nav-menus", "ul");
                this.searchLayout = new HTMLTemplateContainer("searchlayout", "<form class=\"form-inline search-form\" data-form-type=\"\">\r\n                                <div class=\"form-group\">\r\n                                    <input name=\"search\" class=\"form-control-plaintext\" type=\"search\" placeholder=\"Search..\" data-form-type=\"\">\t\t\t\t\t\t\t\t\t\t<span class=\"d-sm-none mobile-search\">\t\t\t\t\t\t\t\t\t\t\t<i data-feather=\"search\"></i>\t\t\t\t\t\t\t\t\t\t</span>\r\n                                </div>\r\n                            </form>");
                this.search = new input.JSTextInput("search");
                this.fullscreen = new JSContainer("fullscreen", "a");
                this.currentLanguageLink = new JSContainer("currentLanguageLink", "a").addClass("txt-dark").setAttribute("href", "javascript:void(0);");
                this.currentLanguage = new JSContainer("currentLanguage", "h6");
                this.languages = new ui.List("languages", "ul");
                this.notif = new JSContainer("notif", "div");
                this.numnotifs = new JSContainer("numnotifs", "span");
                this.notifications = new ui.List("notifications", "ul");
                this.settingMenu = new JSContainer("div");
                this.myImage = new JSContainer("myimg", "img");
                this.dotanim = new JSContainer("div").addClass("dotted-animation");
                this.editprofile = new JSContainer("editprofile", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Edit Profile");
                this.inbox = new JSContainer("inbox", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Inbox");
                this.lockscreen = new JSContainer("lockscreen", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Lock Screen");
                this.settings = new JSContainer("settings", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Settings");
                this.logout = new JSContainer("logout", "a").setAttribute("href", "javascript:void(0);").setAttribute("data-label", "Logout");
                this.addClass("page-main-header");
                this.addClass("Header");
                const row = new JSContainer("div").addClass("main-header-right row");
                this.addChild(row);
                const left = new JSContainer("div").addClass("main-header-left d-lg-none w-auto");
                row.addChild(left);
                const logoWrapper = new JSContainer("div").addClass("logo-wrapper");
                left.addChild(logoWrapper);
                logoWrapper.addChild(this.logoLink.addChild(this.logo));
                this.logoLink.setAttribute("href", "javascript:void(0);");
                this.logo.addClass("blur-up lazyloaded d-block d-lg-none");
                this.logoLink.addEventListener(new Header.Header$1(this), "click");
                row.addChild(this.slideButton);
                this.slideButton.addEventListener(new Header.Header$2(this), "click");
                const right = new JSContainer("div").addClass("nav-right col");
                row.addChild(right);
                this.nav.addClass("nav-menus");
                right.addChild(this.nav);
                this.nav.addItem(this.searchLayout);
                this.search.addClass("form-control-plaintext");
                this.search.setAttribute("type", "search");
                this.search.setPlaceHolder("Search....");
                this.searchLayout.addChild(this.search);
                this.fullscreen.setAttribute("href", "javascript:void(0);");
                this.fullscreen.setHtml("<i data-feather=\"maximize-2\"></i>");
                this.fullscreen.setAttribute("onclick", "javascript:toggleFullScreen()");
                this.nav.addItem(this.fullscreen);
                this.nav.addItem(this.currentLanguageLink.addClass("txt-dark"));
                this.currentLanguageLink.getParent().addClass("onhover-dropdown");
                this.currentLanguageLink.addChild(this.currentLanguage);
                this.currentLanguageLink.getParent().addChild(this.languages);
                this.languages.addClass("language-dropdown onhover-show-div p-20");
                this.addLanguage("English", "en", "is");
                this.addLanguage("Spanish", "es", "um");
                this.addLanguage("Portuguese", "pt", "uy");
                this.addLanguage("French", "fr", "nz");
                this.notif.setHtml("<i data-feather=\"bell\"></i>");
                this.nav.addItem(this.notif);
                this.notif.getParent().addClass("onhover-dropdown");
                this.numnotifs.addClass("badge badge-pill badge-primary pull-right notification-badge");
                this.notif.getParent().addChild(this.numnotifs);
                this.notif.getParent().addChild(new JSContainer("span").addClass("dot"));
                this.notifications.addClass("notification-dropdown onhover-show-div p-0");
                this.notif.getParent().addChild(this.notifications);
                this.settingMenu.addClass("media align-items-center");
                this.myImage.addClass("align-self-center pull-right img-50 blur-up lazyloaded");
                this.settingMenu.addChild(this.myImage);
                this.myImage.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/user3.jpg");
                this.settingMenu.addChild(this.dotanim);
                this.dotanim.setHtml("<span class=\"animate-circle\"></span><span class=\"main-circle\"></span>");
                const settingM = new ui.List("setting", "ul");
                settingM.addClass("profile-dropdown onhover-show-div p-20");
                this.settingMenu.addChild(settingM);
                settingM.addItem(this.editprofile.setHtml("<i data-feather=\"user\"></i>Edit Profile"));
                settingM.addItem(this.inbox.setHtml("<i data-feather=\"mail\"></i>Inbox</a>"));
                settingM.addItem(this.lockscreen.setHtml("<i data-feather=\"lock\"></i>Lock Screen</a>"));
                settingM.addItem(this.settings.setHtml("<i data-feather=\"settings\"></i>Settings</a>"));
                settingM.addItem(this.logout.setHtml("<i data-feather=\"log-out\"></i>Logout</a>"));
                this.nav.addItem(this.settingMenu);
                this.settingMenu.getParent().addClass("onhover-dropdown");
                right.addChild(new JSContainer("div").addClass("d-lg-none mobile-toggle pull-right").setHtml("<i data-feather=\"more-horizontal\"></i>"));
                this.editprofile.addEventListener(Header.CHANGE_PAGE_$LI$(), "click");
                this.inbox.addEventListener(Header.CHANGE_PAGE_$LI$(), "click");
                this.settings.addEventListener(Header.CHANGE_PAGE_$LI$(), "click");
                this.lockscreen.addEventListener(new Header.Header$3(this), "click");
                this.logout.addEventListener(new Header.Header$4(this), "click");
                this.setCurrentLanguage("EN");
            }
            static CHANGE_PAGE_$LI$() { if (Header.CHANGE_PAGE == null) {
                Header.CHANGE_PAGE = new Header.Header$0(this);
            } return Header.CHANGE_PAGE; }
            setNotifications(notifs) {
                this.setNumNotifs(notifs.length);
                this.notifications.clearChildren();
                this.notifications.setRendered(false);
                const label = new JSContainer("span").setHtml("Notifications");
                const num = new JSContainer("span").addClass("badge badge-pill badge-primary pull-right");
                num.setHtml(notifs.length + "");
                this.notifications.addItem(label);
                label.getParent().addChild(num);
                for (let index125 = 0; index125 < notifs.length; index125++) {
                    let o = notifs[index125];
                    {
                        const type = o["type"];
                        const title = o["title"];
                        const text = o["text"];
                        const notifId = o["id"];
                        const media = new JSContainer("div").addClass("media");
                        media.setAttribute("data-id", notifId);
                        const body = new JSContainer("div").addClass("media-body");
                        media.addChild(body);
                        const uiTitle = new JSContainer("h6").addClass("m-0").addClass("txt-" + type);
                        uiTitle.setHtml(title);
                        body.addChild(uiTitle);
                        const uiText = new JSContainer("p").addClass("m-0").setHtml(text);
                        body.addChild(uiText);
                        this.notifications.addItem(media);
                        media.addEventListener(new Header.Header$5(this), "click");
                    }
                }
                const all = new JSContainer("a").setAttribute("href", "javascript:void(0);").setHtml("All");
                this.notifications.addItem(all);
                all.getParent().addChild(new JSContainer("span").setHtml("Notification"));
                all.getParent().addEventListener(new Header.Header$6(this), "click");
            }
            setNumNotifs(num) {
                this.numnotifs.setHtml(num + "");
            }
            addLanguage(lang, abbr, flag) {
                const l = "<i class=\"flag-icon flag-icon-" + flag + "\"></i>" + lang + "</a>";
                const link = new JSContainer(lang, "a").setAttribute("href", "javascript:void(0);");
                link.setAttribute("data-lng", abbr);
                link.setHtml(l);
                this.languages.addItem(link);
                link.addEventListener(new Header.Header$7(this, lang, abbr, flag), "click");
            }
            setCurrentLanguage(lang) {
                this.currentLanguage.setHtml(lang);
            }
            setLogo(src) {
                this.logo.setAttribute("src", src);
            }
        }
        back.Header = Header;
        Header["__class"] = "com.archnet.ui.back.Header";
        Header["__interfaces"] = ["framework.components.api.Renderable"];
        (function (Header) {
            class Header$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["pageName"] = source.getName();
                    evt["label"] = source.getAttribute("data-label");
                    const header = (source.getAncestorWithClass("Header"));
                    header.fireListener("OnChangePage", evt);
                }
            }
            Header.Header$0 = Header$0;
            Header$0["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["pageName"] = "home";
                    evt["label"] = "Home";
                    this.__parent.fireListener("OnChangePage", evt);
                }
            }
            Header.Header$1 = Header$1;
            Header$1["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$2 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    if (this.__parent.hasClass("open")) {
                        this.__parent.removeClass("open");
                    }
                    else {
                        this.__parent.addClass("open");
                    }
                    this.__parent.fireListener("OnToggle", evt);
                }
            }
            Header.Header$2 = Header$2;
            Header$2["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$3 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.fireListener("OnLockScreen", evt);
                }
            }
            Header.Header$3 = Header$3;
            Header$3["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$4 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.fireListener("OnLogOut", evt);
                }
            }
            Header.Header$4 = Header$4;
            Header$4["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$5 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const notifId = source.getAttribute("data-id");
                    evt["recordId"] = notifId;
                    this.__parent.fireListener("OnShowRecord", evt);
                }
            }
            Header.Header$5 = Header$5;
            Header$5["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$6 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["pageName"] = "notifications";
                    evt["label"] = "Notifications";
                    this.__parent.fireListener("OnChangePage", evt);
                }
            }
            Header.Header$6 = Header$6;
            Header$6["__interfaces"] = ["framework.components.api.EventListener"];
            class Header$7 {
                constructor(__parent, lang, abbr, flag) {
                    this.lang = lang;
                    this.abbr = abbr;
                    this.flag = flag;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["language"] = this.lang;
                    evt["abbr"] = this.abbr;
                    evt["flag"] = this.flag;
                    this.__parent.fireListener("OnChangeLanguage", evt);
                    this.__parent.setCurrentLanguage(this.abbr);
                }
            }
            Header.Header$7 = Header$7;
            Header$7["__interfaces"] = ["framework.components.api.EventListener"];
        })(Header = back.Header || (back.Header = {}));
    })(back = ui.back || (ui.back = {}));
})(ui || (ui = {}));
(function (ui) {
    var back;
    (function (back) {
        class Portal extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.header = new ui.back.Header("header");
                this.body = new ui.back.Body("body");
                this.addClass("page-wrapper");
                this.addClass("Portal");
                this.addChild(this.header);
                this.addChild(this.body);
            }
        }
        back.Portal = Portal;
        Portal["__class"] = "com.archnet.ui.back.Portal";
        Portal["__interfaces"] = ["framework.components.api.Renderable"];
    })(back = ui.back || (ui.back = {}));
})(ui || (ui = {}));
(function (ui) {
    var back;
    (function (back) {
        class SideMenu extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.logoLink = new JSContainer("logo-link", "a");
                this.logo = new JSContainer("logo", "img");
                this.user = new JSContainer("user", "img");
                this.username = new JSContainer("username", "h6");
                this.userrole = new JSContainer("userrole", "p");
                this.menu = new ui.List("menu", "ul");
                this.addClass("page-sidebar");
                this.addClass("SideMenu");
                const top = new JSContainer("div").addClass("main-header-left d-none d-lg-block");
                top.addChild(new JSContainer("div").addClass("logo-wrapper").addChild(this.logoLink.addChild(this.logo)));
                this.logoLink.setAttribute("href", "javascript:void(0);");
                this.logo.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/multikart-logo.png");
                this.addChild(top);
                const scroll = new JSContainer("div").addClass("sidebar custom-scrollbar");
                this.addChild(scroll);
                const mob = new JSContainer("mob", "a").addClass("sidebar-back d-lg-none d-block").setAttribute("href", "javascript:void(0);");
                mob.setHtml("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>");
                scroll.addChild(mob);
                const userw = new JSContainer("div").addClass("sidebar-user");
                userw.addChild(this.user);
                scroll.addChild(userw);
                this.user.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/user3.jpg");
                this.user.setStyle("width", "60px");
                this.username.addClass("f-14");
                this.username.setHtml("JOHN");
                this.userrole.setHtml("general manager.");
                userw.addChild(new JSContainer("div").addChild(this.username).addChild(this.userrole));
                this.menu.addClass("sidebar-menu");
                scroll.addChild(this.menu);
            }
            setMenu(nav) {
                for (let index126 = 0; index126 < nav.length; index126++) {
                    let o = nav[index126];
                    {
                        const menuitem = this.addMenu$jsweet_lang_Object$com_archnet_ui_List(o, this.menu);
                        const children = nav["children"];
                        if (children != null && children.length > 0) {
                            const pullright = new JSContainer("i").addClass("fa fa-angle-right pull-right");
                            menuitem.addChild(pullright);
                            const menul2 = new ui.List("level2", "ul");
                            menul2.addClass("sidebar-submenu");
                            menuitem.getParent().addChild(menul2);
                            for (let index127 = 0; index127 < children.length; index127++) {
                                let child = children[index127];
                                {
                                    const menuiteml2 = this.addMenu$jsweet_lang_Object$com_archnet_ui_List(child, menul2);
                                    const childrenl2 = child["children"];
                                    if (childrenl2 != null && childrenl2.length > 0) {
                                        const pullrightl2 = new JSContainer("i").addClass("fa fa-angle-right pull-right");
                                        menuiteml2.addChild(pullrightl2);
                                        const menul3 = new ui.List("level3", "ul");
                                        menul3.addClass("sidebar-submenu");
                                        menuiteml2.getParent().addChild(menul2);
                                        for (let index128 = 0; index128 < childrenl2.length; index128++) {
                                            let childl2 = childrenl2[index128];
                                            {
                                                this.addMenu$jsweet_lang_Object$com_archnet_ui_List(childl2, menul3);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            addMenu$jsweet_lang_Object$com_archnet_ui_List(o, men) {
                const name = o["name"];
                const icon = o["icon"];
                const label = o["label"];
                return this.addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name, label, icon, men);
            }
            addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name, label, icon, men) {
                const a = new JSContainer(name, "a");
                const uiicon = new JSContainer("i").setAttribute("data-feather", icon);
                const uilabel = new JSContainer("span").setHtml(label);
                a.addChild(uiicon).addChild(uilabel);
                a.setAttribute("href", "javascript:void(0);");
                a.addEventListener(new SideMenu.SideMenu$0(this, name, label), "click");
                men.addItem(a);
                return a;
            }
            addMenu(name, label, icon, men) {
                if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof icon === 'string') || icon === null) && ((men != null && men instanceof ui.List) || men === null)) {
                    return this.addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name, label, icon, men);
                }
                else if (((name != null && name instanceof Object) || name === null) && ((label != null && label instanceof ui.List) || label === null) && icon === undefined && men === undefined) {
                    return this.addMenu$jsweet_lang_Object$com_archnet_ui_List(name, label);
                }
                else
                    throw new Error('invalid overload');
            }
            setLogo(lo) {
                this.logo.setAttribute("src", lo);
            }
            setUserName(name) {
                this.username.setHtml(name);
            }
            setUserRole(rol) {
                this.userrole.setHtml(rol);
            }
            setUserAvatar(ava) {
                this.user.setAttribute("src", ava);
            }
        }
        back.SideMenu = SideMenu;
        SideMenu["__class"] = "com.archnet.ui.back.SideMenu";
        SideMenu["__interfaces"] = ["framework.components.api.Renderable"];
        (function (SideMenu) {
            class SideMenu$0 {
                constructor(__parent, name, label) {
                    this.name = name;
                    this.label = label;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["pageName"] = this.name;
                    evt["label"] = this.label;
                    this.__parent.fireListener("OnChangePage", evt);
                }
            }
            SideMenu.SideMenu$0 = SideMenu$0;
            SideMenu$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(SideMenu = back.SideMenu || (back.SideMenu = {}));
    })(back = ui.back || (ui.back = {}));
})(ui || (ui = {}));
(function (ui) {
    class Col extends JSContainer {
        constructor(name) {
            super(name, "div");
        }
        clearSizes() {
            for (let i = 1; i <= 12; i++) {
                {
                    {
                        let array130 = /* Enum.values */ function () { let result = []; for (let val in ui.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index129 = 0; index129 < array130.length; index129++) {
                            let size = array130[index129];
                            {
                                let cls = "col-" + ui.Size["_$wrappers"][size].getValue() + "-" + i;
                                if (size === ui.Size.NONE) {
                                    cls = "col-" + i;
                                }
                                this.removeClass(cls);
                            }
                        }
                    }
                }
                ;
            }
        }
        setWidth(size, width) {
            for (let i = 1; i <= 12; i++) {
                {
                    let cls = "col-" + ui.Size["_$wrappers"][size].getValue() + "-" + i;
                    if (size === ui.Size.NONE) {
                        cls = "col-" + i;
                    }
                    this.removeClass(cls);
                }
                ;
            }
            let cls = "col-" + ui.Size["_$wrappers"][size].getValue() + "-" + width;
            if (size === ui.Size.NONE) {
                cls = "col-" + width;
            }
            this.addClass(cls);
            return this;
        }
    }
    ui.Col = Col;
    Col["__class"] = "com.archnet.ui.Col";
    Col["__interfaces"] = ["framework.components.api.Renderable"];
})(ui || (ui = {}));
class Boot {
    static renderBack() {
        const po = new ui.back.Portal("po");
        po.render();
    }
    static main(args) {
        Boot.renderFront();
    }
    static renderFront() {
        const portal = new Portal("portal");
        const set = new Setting();
        set.logo = "https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png";
        set.pageTitle = "Home";
        set.phoneNumber = "+230 5715902800000000";
        set.storeName = "Archenet Ltd";
        set.address = "R. Tagore Avenue, Mesnil Phoenix, Mauritius";
        set.email = "kureem@gmail.com";
        set.facebook = "https://facebook.com";
        set.fax = "+230 57169028";
        set.googleplus = "https://googleplus.com";
        set.instagram = "https://instagram.com";
        set.rss = "https://rss.com";
        set.storeDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,";
        set.twitter = "https://twitter.com";
        const menu = (new Array());
        Boot.addMenu("home", "Home", null, menu);
        Boot.addMenu("featured", "Featured", null, menu);
        Boot.addMenu("newarrivals", "New Arrivals", "new", menu);
        Boot.addMenu("mens", "Men", null, menu);
        Boot.addMenu("women", "Women", null, menu);
        Boot.addMenu("clothings", "Clothings", null, menu);
        Boot.addMenu("accessories", "Accessories", "50% Off", menu);
        set.menu = menu;
        const categories = (new Array());
        Boot.addMenu("mens", "Men", null, categories);
        Boot.addMenu("women", "Women", null, categories);
        Boot.addMenu("clothings", "Clothings", null, categories);
        Boot.addMenu("accessories", "Accessories", null, categories);
        Boot.addMenu("featured", "Featured", null, categories);
        set.categories = categories;
        portal.setSetting(set);
        portal.open("home");
        portal.render();
    }
    static addMenu(name, label, tag, menu) {
        const obj = new Object();
        obj["name"] = name;
        obj["label"] = label;
        obj["tag"] = tag;
        menu.push(obj);
    }
}
Boot["__class"] = "com.archnet.ui.front.Boot";
class Breadcrumb extends JSContainer {
    constructor(name) {
        super(name, "nav");
        this.items = new ui.List("breadcrumb", "ol");
        this.addClass("theme-breadcrumb");
        this.setAttribute("aria-label", "breadcrumb");
        this.addChild(this.items);
        this.items.addClass("breadcrumb");
    }
    addItem(name, label) {
        const link = new JSContainer(name, "a").setHtml(label);
        this.items.addItem(link).addClass("breadcrumb-item").setName(name);
        link.addEventListener(new Breadcrumb.Breadcrumb$0(this), "click");
        if (this.items.getChildren().length === 1) {
            this.activate(name);
        }
        return this;
    }
    setBreadcrumbs(items) {
        this.items.clearChildren();
        this.items.setRendered(false);
        for (let index131 = 0; index131 < items.length; index131++) {
            let o = items[index131];
            {
                const name = o["name"];
                const label = o["label"];
                this.addItem(name, label);
            }
        }
    }
    activate(name) {
        {
            let array133 = this.items.getChildren();
            for (let index132 = 0; index132 < array133.length; index132++) {
                let item = array133[index132];
                {
                    item.removeClass("active").setAttribute("aria-current", null);
                }
            }
        }
        this.items.getChild(name).addClass("active").setAttribute("aria-current", "page");
    }
}
Breadcrumb.Event_OnChangePage = "OnChangePage";
Breadcrumb["__class"] = "com.archnet.ui.front.Breadcrumb";
Breadcrumb["__interfaces"] = ["framework.components.api.Renderable"];
(function (Breadcrumb) {
    class Breadcrumb$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.activate(source.getName());
            evt["item"] = source.getName();
            evt["label"] = source.getHtml();
            evt["pageName"] = source.getName();
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    Breadcrumb.Breadcrumb$0 = Breadcrumb$0;
    Breadcrumb$0["__interfaces"] = ["framework.components.api.EventListener"];
})(Breadcrumb || (Breadcrumb = {}));
class BreadCrumbSection extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.left = new ui.Col("left").setWidth(ui.Size.SMALL, 6);
        this.right = new ui.Col("right").setWidth(ui.Size.SMALL, 6);
        this.grid = new ui.Grid("container");
        this.title = new JSContainer("title", "h2");
        this.breadcrumb = new Breadcrumb("breadcrumb");
        this.addClass("breadcrumb-section");
        this.addChild(this.grid);
        this.grid.addCol(this.left).addCol(this.right);
        const pageTitle = new JSContainer("div").addClass("page-title");
        this.left.addChild(pageTitle);
        pageTitle.addChild(this.title);
        this.right.addChild(this.breadcrumb);
        this.breadcrumb.addEventListener(new BreadCrumbSection.BreadCrumbSection$0(this), Breadcrumb.Event_OnChangePage);
        this.setPageTitle("Home");
    }
    setPageTitle(txt) {
        this.title.setHtml(txt);
        return this;
    }
    getBreadcrumb() {
        return this.breadcrumb;
    }
}
BreadCrumbSection.Event_OnChangePage = "OnChangePage";
BreadCrumbSection["__class"] = "com.archnet.ui.front.BreadCrumbSection";
BreadCrumbSection["__interfaces"] = ["framework.components.api.Renderable"];
(function (BreadCrumbSection) {
    class BreadCrumbSection$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener(BreadCrumbSection.Event_OnChangePage, evt);
            const label = evt["label"];
            this.__parent.setPageTitle(label);
        }
    }
    BreadCrumbSection.BreadCrumbSection$0 = BreadCrumbSection$0;
    BreadCrumbSection$0["__interfaces"] = ["framework.components.api.EventListener"];
})(BreadCrumbSection || (BreadCrumbSection = {}));
class Catalogue extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.filter = new ProductTopFilter("filter");
        this.view = new ProductListView("grid");
        this.paginator = new ProductPaginator("paginator");
        this.addClass("collection-product-wrapper");
        this.addChild(this.filter);
        this.addChild(this.view);
        this.addChild(this.paginator);
        this.filter.addEventListener(new Catalogue.Catalogue$0(this), ProductTopFilter.Event_OnChangePageSize);
        this.filter.addEventListener(new Catalogue.Catalogue$1(this), ProductTopFilter.Event_OnChangeView);
        this.filter.addEventListener(new Catalogue.Catalogue$2(this), ProductTopFilter.Event_OnChangeRowSize);
        this.paginator.addEventListener(new Catalogue.Catalogue$3(this), ProductPaginator.Event_OnChange);
        this.view.addEventListener(new Catalogue.Catalogue$4(this), "OnChangePage");
        this.view.addEventListener(new Catalogue.Catalogue$5(this), "OnAddWishList");
        this.view.addEventListener(new Catalogue.Catalogue$6(this), "OnAddCart");
        this.addEventListener(new Catalogue.Catalogue$7(this), "OnChangePage");
        this.addEventListener(new Catalogue.Catalogue$8(this), "OnAddCart");
        this.addEventListener(new Catalogue.Catalogue$9(this), "OnAddWishList");
    }
    /*private*/ fireListenerOnPage(name, evt) {
        const p = (this.getAncestorWithClass("Page"));
        if (p != null) {
            p.fireListener(name, evt);
        }
    }
    setTotal(total) {
        this.paginator.setValue$int(total);
    }
    setProducts(products) {
        this.view.setProducts(products);
    }
    start() {
        this.paginator.start();
    }
}
Catalogue["__class"] = "com.archnet.ui.front.Catalogue";
Catalogue["__interfaces"] = ["framework.components.api.Renderable"];
(function (Catalogue) {
    class Catalogue$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const size = evt["pageSize"];
            this.__parent.paginator.setPageSize(size);
        }
    }
    Catalogue.Catalogue$0 = Catalogue$0;
    Catalogue$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const sview = evt["viewtype"];
            this.__parent.view.setView(sview);
        }
    }
    Catalogue.Catalogue$1 = Catalogue$1;
    Catalogue$1["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const size = evt["size"];
            this.__parent.view.setRowSize(size);
        }
    }
    Catalogue.Catalogue$2 = Catalogue$2;
    Catalogue$2["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$3 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const start = evt["start"];
            const end = evt["end"];
            const total = evt["total"];
            this.__parent.filter.setCount(start, end, total);
        }
    }
    Catalogue.Catalogue$3 = Catalogue$3;
    Catalogue$3["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$4 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    Catalogue.Catalogue$4 = Catalogue$4;
    Catalogue$4["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$5 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnAddWishList", evt);
        }
    }
    Catalogue.Catalogue$5 = Catalogue$5;
    Catalogue$5["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$6 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnAddCart", evt);
        }
    }
    Catalogue.Catalogue$6 = Catalogue$6;
    Catalogue$6["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$7 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnChangePage", evt);
        }
    }
    Catalogue.Catalogue$7 = Catalogue$7;
    Catalogue$7["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$8 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnAddCart", evt);
        }
    }
    Catalogue.Catalogue$8 = Catalogue$8;
    Catalogue$8["__interfaces"] = ["framework.components.api.EventListener"];
    class Catalogue$9 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnAddWishList", evt);
        }
    }
    Catalogue.Catalogue$9 = Catalogue$9;
    Catalogue$9["__interfaces"] = ["framework.components.api.EventListener"];
})(Catalogue || (Catalogue = {}));
class Footer extends JSContainer {
    constructor(name) {
        super(name, "footer");
        this.email = (new input.JSInput("email"));
        this.logo = new JSContainer("logo", "img");
        this.description = new JSContainer("description", "p");
        this.categories = new ui.List("categories", "ul");
        this.address = new JSContainer("address", "span");
        this.phone = new JSContainer("phone", "span");
        this.storeemail = new JSContainer("email", "a");
        this.fax = new JSContainer("fax", "span");
        this.facebook = new JSContainer("facebook", "a");
        this.googleplus = new JSContainer("googleplus", "a");
        this.twitter = new JSContainer("twitter", "a");
        this.instagram = new JSContainer("instagram", "a");
        this.rss = new JSContainer("rss", "a");
        this.socials = new ui.List("socials", "ul");
        this.addClass("footer-light");
        const lightLayout = new JSContainer("div").addClass("light-layout");
        this.addChild(lightLayout);
        const ctn = new JSContainer("div").addClass("container");
        lightLayout.addChild(ctn);
        const section = new JSContainer("section").addClass("small-section border-section border-top-0");
        ctn.addChild(section);
        const row = new JSContainer("div").addClass("row");
        section.addChild(row);
        const left = new JSContainer("left", "div").addClass("col-lg-6");
        row.addChild(left);
        const right = new JSContainer("right", "div").addClass("col-lg-6");
        row.addChild(right);
        const subscribe = new JSContainer("div").addClass("subscribe");
        left.addChild(subscribe);
        const c = new JSContainer("div");
        subscribe.addChild(c);
        const know = new JSContainer("h4").setHtml("KNOW IT ALL FIRST!");
        c.addChild(know);
        const subscribeMsg = new JSContainer("p");
        c.addChild(subscribeMsg);
        subscribeMsg.setHtml("Never Miss Anything From Us By Signing Up To Our Newsletter.");
        const frm = new JSContainer("div").addClass("form-inline subscribe-form auth-form needs-validation");
        const ifrm = new JSContainer("div").addClass("form-group mx-sm-3");
        frm.addChild(ifrm);
        right.addChild(frm);
        this.email.addClass("form-control");
        this.email.setPlaceHolder("Enter your email");
        this.email.setRequired(true);
        this.email.setStyle("float", "left");
        ifrm.addChild(this.email);
        const btnSubscribe = new JSContainer("subscribe", "button").addClass("btn btn-solid").setHtml("Subscribe");
        ifrm.addChild(btnSubscribe);
        btnSubscribe.addEventListener(new Footer.Footer$0(this), "click");
        const sectionb = new JSContainer("section").addClass("section-b-space light-layout");
        this.addChild(sectionb);
        const gr = new ui.Grid("gr");
        sectionb.addChild(gr);
        gr.getRow().addClass("footer-theme partition-f");
        const col1 = new ui.Col("1");
        col1.setWidth(ui.Size.LARGE, 4).setWidth(ui.Size.MEDIUM, 6);
        const col2 = new ui.Col("2");
        col2.setWidth(ui.Size.LARGE, 4).setWidth(ui.Size.MEDIUM, 6);
        col2.addClass("offset-xl-1");
        const col3 = new ui.Col("3");
        col3.addClass("col");
        gr.addCol(col1).addCol(col2).addCol(col3);
        const footerContent = new JSContainer("div").addClass("footer-contant");
        const footerlogo = new JSContainer("div").addClass("footer-logo");
        footerContent.addChild(footerlogo);
        footerlogo.addChild(this.logo);
        footerContent.addChild(this.description);
        const footersocial = new JSContainer("div").addClass("footer-social");
        footerContent.addChild(footersocial);
        footersocial.addChild(this.socials);
        this.facebook.addChild(new JSContainer("i").addClass("fa fa-facebook-f")).setAttribute("target", "_blank");
        this.googleplus.addChild(new JSContainer("i").addClass("fa fa-google-plus")).setAttribute("target", "_blank");
        this.twitter.addChild(new JSContainer("i").addClass("fa fa-twitter")).setAttribute("target", "_blank");
        this.instagram.addChild(new JSContainer("i").addClass("fa fa-instagram")).setAttribute("target", "_blank");
        this.rss.addChild(new JSContainer("i").addClass("fa fa-rss").setAttribute("aria-hidden", "true")).setAttribute("target", "_blank");
        this.socials.addItems(this.facebook, this.googleplus, this.twitter, this.instagram, this.rss);
        col1.addChild(footerContent);
        this.setCol2(col2);
        this.setCol3(col3);
    }
    /*private*/ setCol2(col2) {
        const subtitle = new JSContainer("div").addClass("sub-title");
        const footertitle = new JSContainer("div").addClass("footer-title");
        footertitle.addChild(new JSContainer("h4").setHtml("Categories"));
        subtitle.addChild(footertitle);
        col2.addChild(subtitle);
        const content = new JSContainer("div").addClass("footer-contant");
        subtitle.addChild(content);
        content.addChild(this.categories);
    }
    /*private*/ setCol3(col3) {
        const subtitle = new JSContainer("div").addClass("sub-title");
        const footertitle = new JSContainer("div").addClass("footer-title");
        footertitle.addChild(new JSContainer("h4").setHtml("Store Information"));
        subtitle.addChild(footertitle);
        col3.addChild(subtitle);
        const content = new JSContainer("div").addClass("footer-contant");
        subtitle.addChild(content);
        const info = new ui.List("info", "ul");
        content.addChild(info);
        const iconadd = new JSContainer("i").addClass("fa fa-map-marker");
        info.addItem(iconadd);
        iconadd.getParent().addChild(this.address);
        const iconphone = new JSContainer("i").addClass("fa fa-phone");
        info.addItem(iconphone);
        iconphone.getParent().addChild(this.phone);
        const iconemail = new JSContainer("i").addClass("fa fa-envelope");
        info.addItem(iconemail);
        iconemail.getParent().addChild(new JSContainer("span").setHtml("Email Us: "));
        iconemail.getParent().addChild(this.storeemail);
        const iconfax = new JSContainer("i").addClass("fa fa-fax");
        info.addItem(iconfax);
        iconfax.getParent().addChild(this.fax);
    }
    setFacebook(fb) {
        this.facebook.setAttribute("href", fb);
    }
    setTwitter(tw) {
        this.twitter.setAttribute("href", tw);
    }
    setGooglePlus(gp) {
        this.googleplus.setAttribute("href", gp);
    }
    setInstagram(ins) {
        this.instagram.setAttribute("href", ins);
    }
    setRss(rs) {
        this.rss.setAttribute("href", rs);
    }
    setAddress(addr) {
        this.address.setHtml(addr);
    }
    setPhone(phone) {
        this.phone.setHtml("Call Us: " + phone);
    }
    setEmail(em) {
        this.storeemail.setHtml(em).setAttribute("href", "mailto:" + em);
    }
    setFax(fx) {
        this.fax.setHtml(fx);
    }
    setLogo(lo) {
        this.logo.setAttribute("src", lo);
    }
    setDescription(desc) {
        this.description.setHtml(desc);
    }
    setCategories(cats) {
        this.categories.clearChildren();
        this.setRendered(false);
        for (let index134 = 0; index134 < cats.length; index134++) {
            let o = cats[index134];
            {
                const name = o["name"];
                const label = o["label"];
                const link = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
                this.categories.addItem(link);
                link.addEventListener(new Footer.Footer$1(this), "click");
            }
        }
    }
    setSetting(set) {
        this.setAddress(set.address);
        this.setCategories(set.categories);
        this.setDescription(set.storeDescription);
        this.setEmail(set.email);
        this.setFacebook(set.facebook);
        this.setFax(set.fax);
        this.setGooglePlus(set.googleplus);
        this.setInstagram(set.instagram);
        this.setLogo(set.logo);
        this.setPhone(set.phoneNumber);
        this.setRss(set.rss);
        this.setTwitter(set.twitter);
    }
}
Footer["__class"] = "com.archnet.ui.front.Footer";
Footer["__interfaces"] = ["framework.components.api.Renderable"];
(function (Footer) {
    class Footer$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const semail = this.__parent.email.getValue();
            if (semail != null && semail !== "") {
                evt["email"] = semail;
                this.__parent.fireListener("OnSubscribe", evt);
            }
        }
    }
    Footer.Footer$0 = Footer$0;
    Footer$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Footer$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["label"] = source.getHtml();
            evt["pageName"] = source.getName();
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    Footer.Footer$1 = Footer$1;
    Footer$1["__interfaces"] = ["framework.components.api.EventListener"];
})(Footer || (Footer = {}));
class Form extends JSContainer {
    constructor(name) {
        super(name, "form");
        this.body = new JSContainer("body", "div");
        this.fields = new Object();
        this.addClass("theme-form");
        this.addChild(this.body);
        this.body.addClass("form-row row");
    }
    clear() {
        this.body.clearChildren();
        this.body.setRendered(false);
        this.fields = new Object();
    }
    validate() {
        {
            let array136 = Object.keys(this.fields);
            for (let index135 = 0; index135 < array136.length; index135++) {
                let key = array136[index135];
                {
                    const field = this.fields[key];
                    field.validate();
                }
            }
        }
    }
    addField$java_lang_String$framework_components_api_InputField$boolean(label, field, fullwidth) {
        const col = new JSContainer("div").addClass(fullwidth ? "col-md-12" : "col-md-6");
        const uilabel = new JSContainer("lab", "label");
        uilabel.setAttribute("for", field.getName());
        this.body.addChild(col);
        col.addChild(uilabel).addChild(field);
        this.fields[field.getName()] = field;
    }
    addField(label, field, fullwidth) {
        if (((typeof label === 'string') || label === null) && ((field != null && (field.constructor != null && field.constructor["__interfaces"] != null && field.constructor["__interfaces"].indexOf("framework.components.api.InputField") >= 0)) || field === null) && ((typeof fullwidth === 'boolean') || fullwidth === null)) {
            return this.addField$java_lang_String$framework_components_api_InputField$boolean(label, field, fullwidth);
        }
        else if (((typeof label === 'string') || label === null) && ((field != null && (field.constructor != null && field.constructor["__interfaces"] != null && field.constructor["__interfaces"].indexOf("framework.components.api.InputField") >= 0)) || field === null) && fullwidth === undefined) {
            return this.addField$java_lang_String$framework_components_api_InputField(label, field);
        }
        else
            throw new Error('invalid overload');
    }
    addField$java_lang_String$framework_components_api_InputField(label, field) {
        this.addField$java_lang_String$framework_components_api_InputField$boolean(label, field, false);
    }
    setValue(vals) {
        {
            let array138 = Object.keys(this.fields);
            for (let index137 = 0; index137 < array138.length; index137++) {
                let key = array138[index137];
                {
                    const field = this.fields[key];
                    const val = vals[key];
                    field.setValue(val);
                }
            }
        }
    }
    getValue() {
        const result = new Object();
        {
            let array140 = Object.keys(this.fields);
            for (let index139 = 0; index139 < array140.length; index139++) {
                let key = array140[index139];
                {
                    const field = this.fields[key];
                    const val = field.getValue();
                    result[key] = val;
                }
            }
        }
        return result;
    }
}
Form["__class"] = "com.archnet.ui.front.Form";
Form["__interfaces"] = ["framework.components.api.Renderable"];
class LoaderSkeletor extends HTMLTemplateContainer {
    constructor(name) {
        super(name, "        <header>\r\n            <div class=\"top-header d-none d-sm-block\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                            <div class=\"header-contact\">\r\n                                <ul>\r\n                                    <li>Welcome to Our store Multikart</li>\r\n                                    <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>Call Us: 123 - 456 - 7890</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 text-end\">\r\n                            <ul class=\"header-dropdown\">\r\n                                <li class=\"mobile-wishlist\"><a href=\"#\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"onhover-dropdown mobile-account\">\r\n                                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i> My Account\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"main-menu\">\r\n                            <div class=\"menu-left\">\r\n                                <div class=\"navbar\">\r\n                                    <a href=\"javascript:void(0)\">\r\n                                        <div class=\"bar-style\"><i class=\"fa fa-bars sidebar-bar\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"brand-logo\">\r\n                                    <a href=\"index.html\"><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"></a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"menu-right pull-right\">\r\n                                <div>\r\n                                    <nav class=\"\">\r\n                                        <div class=\"toggle-nav\"><i class=\"fa fa-bars sidebar-bar\"></i></div>\r\n                                        <ul class=\"sm pixelstrap sm-horizontal hover-unset\">\r\n                                            <li>\r\n                                                <div class=\"mobile-back text-end\">Back<i class=\"fa fa-angle-right ps-2\" aria-hidden=\"true\"></i></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"index.html\">Home</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">feature<div class=\"lable-nav\">new</div></a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">shop</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">product</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">pages</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">blog</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nav>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"icon-nav d-none d-sm-block\">\r\n                                        <ul>\r\n                                            <li class=\"onhover-div mobile-search\">\r\n                                                <div><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/search.png\" onclick=\"openSearch()\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"> <i class=\"ti-search\" onclick=\"openSearch()\"></i></div>\r\n                                            </li>\r\n                                            <li class=\"onhover-div mobile-setting\">\r\n                                                <div><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/setting.png\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"> <i class=\"ti-settings\"></i></div>\r\n                                            </li>\r\n                                            <li class=\"onhover-div mobile-cart\">\r\n                                                <div><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/cart.png\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"> <i class=\"ti-shopping-cart\"></i></div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <div class=\"breadcrumb-section\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"page-title\">\r\n                            <h2>collection</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\r\n                            <ol class=\"breadcrumb\">\r\n                                <li class=\"breadcrumb-item\"><a href=\"index.html\">home</a></li>\r\n                                <li class=\"breadcrumb-item active\" aria-current=\"page\">collection</li>\r\n                            </ol>\r\n                        </nav>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <section class=\"section-b-space ratio_asos\">\r\n            <div class=\"collection-wrapper\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"collection-content col\">\r\n                            <div class=\"page-main-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"top-banner-wrapper\">\r\n                                            <div class=\"img-ldr-top\"></div>\r\n                                            <div class=\"top-banner-content small-section\">\r\n                                                <h4></h4>\r\n                                                <h5></h5>\r\n                                                <p></p>\r\n                                                <p></p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"collection-product-wrapper\">\r\n                                            <div class=\"product-top-filter\">\r\n                                                <div class=\"row m-0 w-100\">\r\n                                                    <div class=\"col-xl-4\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-4 col-lg-4 col-6\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-2 col-lg-4 col-6\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-2 col-lg-4 d-none d-lg-block\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"product-wrapper-grid\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n");
        this.addClass("loader_skeleton");
    }
}
LoaderSkeletor["__class"] = "com.archnet.ui.front.LoaderSkeletor";
LoaderSkeletor["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
class MainBanner extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.title = new JSContainer("title", "h4");
        this.description = new JSContainer("description", "p");
        this.img = new JSContainer("img", "img").addClass("img-fluid blur-up lazyloaded");
        this.addClass("top-banner-wrapper");
        const link = new JSContainer("link", "a").setAttribute("href", "javascript:void(0);");
        link.addEventListener(new MainBanner.MainBanner$0(this), "click");
        link.addChild(this.img);
        this.addChild(link);
        const content = new JSContainer("content", "div").addClass("top-banner-content small-section");
        this.addChild(content);
        content.addChild(this.title).addChild(this.description);
        this.setImg("https://themes.pixelstrap.com/multikart/assets/images/mega-menu/2.jpg");
        this.setTitle("BIGGEST DEALS ON TOP BRANDS");
        this.setDescription("The trick to choosing the best wear for yourself is to keep in mind your body type, individual style, occasion and also the time of day or weather. In addition to eye-catching products from top brands, we also offer an easy 30-day return and exchange policy, free and fast shipping across all pin codes, cash or card on delivery option, deals and discounts, among other perks. So, sign up now and shop for westarn wear to your heart\u2019s content on Multikart.");
        this.addEventListener(new MainBanner.MainBanner$1(this), "OnChangePage");
    }
    setImg(img) {
        this.img.setAttribute("src", img);
        return this;
    }
    setTitle(title) {
        this.title.setHtml(title);
        return this;
    }
    setDescription(description) {
        this.description.setHtml(description);
        return this;
    }
}
MainBanner["__class"] = "com.archnet.ui.front.MainBanner";
MainBanner["__interfaces"] = ["framework.components.api.Renderable"];
(function (MainBanner) {
    class MainBanner$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "product-detail/" + this.__parent.getName();
            evt["label"] = this.__parent.getName();
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    MainBanner.MainBanner$0 = MainBanner$0;
    MainBanner$0["__interfaces"] = ["framework.components.api.EventListener"];
    class MainBanner$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnChangePage", evt);
            }
        }
    }
    MainBanner.MainBanner$1 = MainBanner$1;
    MainBanner$1["__interfaces"] = ["framework.components.api.EventListener"];
})(MainBanner || (MainBanner = {}));
class Page extends JSContainer {
    constructor(name) {
        super(name, "section");
        this.addClass("Page");
        this.addClass("section-b-space ratio_asos");
        this.addEventListener(new Page.Page$0(this), Page.EVENT_OnChangePage);
        this.addEventListener(new Page.Page$1(this), Page.EVENT_OnAddCart);
        this.addEventListener(new Page.Page$2(this), Page.EVENT_OnAddWishList);
        this.addEventListener(new Page.Page$3(this), Page.Event_OnRemoveWishList);
        this.addEventListener(new Page.Page$4(this), Page.Event_OnLogin);
    }
    setBody(ctn) {
        this.clearChildren();
        this.setRendered(false);
        if (ctn != null) {
            this.addChild(ctn);
        }
    }
}
Page.EVENT_OnChangePage = "OnChangePage";
Page.EVENT_OnAddWishList = "OnAddWishList";
Page.EVENT_OnAddCart = "OnAddCart";
Page.Event_OnRemoveWishList = "OnRemoveWishList";
Page.Event_OnLogin = "OnLogin";
Page["__class"] = "com.archnet.ui.front.Page";
Page["__interfaces"] = ["framework.components.api.Renderable"];
(function (Page) {
    class Page$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Portal"));
            if (p != null) {
                p.fireChangePage(evt);
            }
        }
    }
    Page.Page$0 = Page$0;
    Page$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Page$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Portal"));
            if (p != null) {
                p.fireAddCart(evt);
            }
        }
    }
    Page.Page$1 = Page$1;
    Page$1["__interfaces"] = ["framework.components.api.EventListener"];
    class Page$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Portal"));
            if (p != null) {
                p.fireAddWishList(evt);
            }
        }
    }
    Page.Page$2 = Page$2;
    Page$2["__interfaces"] = ["framework.components.api.EventListener"];
    class Page$3 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Portal"));
            if (p != null) {
                p.fireRemoveWishList(evt);
            }
        }
    }
    Page.Page$3 = Page$3;
    Page$3["__interfaces"] = ["framework.components.api.EventListener"];
    class Page$4 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Portal"));
            if (p != null) {
                p.fireLogin(evt);
            }
        }
    }
    Page.Page$4 = Page$4;
    Page$4["__interfaces"] = ["framework.components.api.EventListener"];
})(Page || (Page = {}));
class ForgotPassword extends HTMLTemplateContainer {
    constructor(name) {
        super(name, "<div class=\"pwd-page container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 m-auto\">\r\n                    <h2>Forget Your Password</h2>\r\n                    <form class=\"theme-form\">\r\n                        <div class=\"form-row row\">\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Enter Your Email\"\r\n                                    required=\"\">\r\n                            </div><a href=\"#\" class=\"btn btn-solid w-auto\" name=\"change\">Submit</a>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>");
        this.email = (new input.JSInput("email"));
        this.change = new JSContainer("change", "a");
        this.email.addClass("form-control");
        this.email.setPlaceHolder("Email");
        this.email.setRequired(true);
        this.change.addClass("btn btn-solid w-auto");
        this.change.setAttribute("href", "javascript:void(0);");
        this.change.setHtml("Submit");
        this.addChild(this.email).addChild(this.change);
        this.change.addEventListener(new ForgotPassword.ForgotPassword$0(this), "click");
    }
}
ForgotPassword["__class"] = "com.archnet.ui.front.pages.ForgotPassword";
ForgotPassword["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
(function (ForgotPassword) {
    class ForgotPassword$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const semail = this.__parent.email.getValue();
            if (semail != null && semail !== "") {
                evt["email"] = semail;
                this.__parent.fireListener("OnChangePassword", evt);
            }
        }
    }
    ForgotPassword.ForgotPassword$0 = ForgotPassword$0;
    ForgotPassword$0["__interfaces"] = ["framework.components.api.EventListener"];
})(ForgotPassword || (ForgotPassword = {}));
class Home extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.top = new JSContainer("top", "div");
        this.body = new JSContainer("body", "div");
        this.addClass("collection-wrapper");
        const pageGrid = new ui.Grid("page-grid");
        this.addChild(pageGrid);
        const collectioncol = new ui.Col("collection-col");
        collectioncol.addClass("collection-content");
        pageGrid.addCol(collectioncol);
        const pageMainContent = new ui.Grid("page-main-content");
        collectioncol.addChild(pageMainContent);
        pageMainContent.removeClass("container");
        pageMainContent.addClass("page-main-content");
        const pageContainer = new ui.Col("pageContainer");
        pageContainer.setWidth(ui.Size.SMALL, 12);
        pageMainContent.addCol(pageContainer);
        pageContainer.addChild(this.top);
        pageContainer.addChild(this.body);
        const topBanner = new MainBanner("top-banner-wrapper");
        const cat = new Catalogue("catalogue");
        const products = (new Array());
        for (let i = 1; i <= 37; i++) {
            {
                const pr = new Object();
                pr["availability"] = "in stock";
                pr["name"] = "product-" + i;
                pr["title"] = "Candy red solid tshirt";
                pr["description"] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book";
                pr["price"] = "200MUR";
                pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/35.jpg";
                pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/36.jpg";
                if (i % 2 === 0) {
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg";
                }
                else if (i % 3 === 0) {
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/27.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg";
                }
                else if (i % 5 === 0) {
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/34.jpg";
                }
                products.push(pr);
            }
            ;
        }
        cat.setProducts(products);
        cat.setTotal(/* parseInt */ parseInt(products.length + ""));
        this.setTop(topBanner);
        this.setBody(cat);
        cat.start();
    }
    getTop() {
        return this.top;
    }
    getBody() {
        return this.body;
    }
    setTop(ctn) {
        this.top.clearChildren();
        this.top.setRendered(false);
        if (ctn != null) {
            this.top.addChild(ctn);
        }
    }
    setBody(ctn) {
        this.body.clearChildren();
        this.body.setRendered(false);
        if (ctn != null) {
            this.body.addChild(ctn);
        }
    }
}
Home["__class"] = "com.archnet.ui.front.pages.Home";
Home["__interfaces"] = ["framework.components.api.Renderable"];
class Login extends HTMLTemplateContainer {
    constructor(name) {
        super(name, "        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <h3>Login</h3>\r\n                    <div class=\"theme-card\">\r\n                        <form class=\"theme-form\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Email</label>\r\n                                <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"review\">Password</label>\r\n                                <input type=\"password\" name=\"password\" class=\"form-control\" id=\"review\"\r\n                                    placeholder=\"Enter your password\" required=\"\">\r\n                            </div><a href=\"#\" class=\"btn btn-solid\" name=\"login\">Login</a><a name=\"forgot\"></a>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 right-login\">\r\n                    <h3>New Customer</h3>\r\n                    <div class=\"theme-card authentication-right\">\r\n                        <h6 class=\"title-font\">Create A Account</h6>\r\n                        <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be\r\n                            able to order from our shop. To start shopping click register.</p><a href=\"#\"\r\n                            class=\"btn btn-solid\" name=\"register\">Create an Account</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    ");
        this.email = (new input.JSInput("email"));
        this.password = (new input.JSInput("password"));
        this.login = new JSContainer("login", "a");
        this.register = new JSContainer("register", "a");
        this.forgot = new JSContainer("forgot", "a");
        this.addClass("login-page");
        this.email.addClass("form-control");
        this.email.setPlaceHolder("Email");
        this.email.setRequired(true);
        this.password.addClass("form-control");
        this.password.setPlaceHolder("Enter your password");
        this.password.setAttribute("type", "password");
        this.password.setRequired(true);
        this.login.addClass("btn btn-solid");
        this.login.setAttribute("href", "javascript:void(0);");
        this.login.setHtml("Login");
        this.register.setAttribute("href", "javascript:void(0);");
        this.register.setHtml("Create an Account");
        this.register.setAttribute("href", "javascript:void(0);");
        this.register.addClass("btn btn-solid");
        this.forgot.addClass("btn").setHtml("Forgot Password?").setAttribute("href", "javascript:void(0);");
        this.addChild(this.email);
        this.addChild(this.password);
        this.addChild(this.login);
        this.addChild(this.forgot);
        this.addChild(this.register);
        this.login.addEventListener(new Login.Login$0(this), "click");
        this.register.addEventListener(new Login.Login$1(this), "click");
        this.forgot.addEventListener(new Login.Login$2(this), "click");
        this.addEventListener(new Login.Login$3(this), "OnLogin");
    }
}
Login["__class"] = "com.archnet.ui.front.pages.Login";
Login["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
(function (Login) {
    class Login$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            try {
                this.__parent.email.validate();
                this.__parent.password.validate();
                const semail = this.__parent.email.getValue();
                const spassword = this.__parent.password.getValue();
                const nati = this.__parent.email.getNative();
                if (semail != null && semail !== "" && spassword != null && spassword !== "") {
                    evt["email"] = semail;
                    evt["password"] = spassword;
                    this.__parent.fireListener("OnLogin", evt);
                }
            }
            catch (e) {
                const nat = this.__parent.email.getNative();
                const fn = nat["reportValidity"];
                fn.call(nat);
            }
        }
    }
    Login.Login$0 = Login$0;
    Login$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Login$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "register";
            evt["label"] = "Create an account";
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnChangePage", evt);
            }
        }
    }
    Login.Login$1 = Login$1;
    Login$1["__interfaces"] = ["framework.components.api.EventListener"];
    class Login$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "forgot";
            evt["label"] = "Forgot Password";
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnChangePage", evt);
            }
        }
    }
    Login.Login$2 = Login$2;
    Login$2["__interfaces"] = ["framework.components.api.EventListener"];
    class Login$3 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnLogin", evt);
            }
        }
    }
    Login.Login$3 = Login$3;
    Login$3["__interfaces"] = ["framework.components.api.EventListener"];
})(Login || (Login = {}));
class PageNotFound extends HTMLTemplateContainer {
    constructor(name) {
        super(name, "<div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"error-section\">\r\n                        <h1>404</h1>\r\n                        <h2>page not found</h2>\r\n                        <a name=\"back\" class=\"btn btn-solid\">back to home</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>");
        const back = new JSContainer("back", "a").setAttribute("href", "javascript:void(0);");
        back.setHtml("Back to home");
        back.addClass("btn btn-solid");
        this.addChild(back);
        back.addEventListener(new PageNotFound.PageNotFound$0(this), "click");
    }
}
PageNotFound["__class"] = "com.archnet.ui.front.pages.PageNotFound";
PageNotFound["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
(function (PageNotFound) {
    class PageNotFound$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "home";
            evt["label"] = "Home";
            const p = (source.getAncestorWithClass("Page"));
            if (p != null)
                p.fireListener("OnChangePage", evt);
        }
    }
    PageNotFound.PageNotFound$0 = PageNotFound$0;
    PageNotFound$0["__interfaces"] = ["framework.components.api.EventListener"];
})(PageNotFound || (PageNotFound = {}));
class Profile extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.personal = new FormPanel("personal");
        this.shipping = new FormPanel("shipping");
        const top = new JSContainer("div").addClass("contact-page register-page");
        this.addChild(top.addChild(this.personal));
        const bottom = new JSContainer("section").addClass("contact-page register-page section-b-space");
        this.addChild(bottom.addChild(this.shipping));
        this.personal.setLegend("Personal Detail");
        const firstName = (new input.JSInput("firstName"));
        firstName.addClass("form-control");
        firstName.setPlaceHolder("Enter Your first name");
        const lastName = (new input.JSInput("lastName"));
        lastName.addClass("form-control");
        lastName.setPlaceHolder("Enter Your last name");
        const phone = (new input.JSInput("phone"));
        phone.addClass("form-control");
        phone.setPlaceHolder("Enter Your phone number");
        const email = (new input.JSInput("email"));
        email.addClass("form-control");
        email.setPlaceHolder("Enter Your phone email");
        const message = new input.JSTextArea("message");
        message.addClass("form-control mb-0");
        message.setAttribute("placeholder", "Write Your Message");
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("First Name", firstName);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("Last Name", lastName);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("Phone", phone);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("Email", email);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField$boolean("Write your message", message, true);
        const saveBilling = new JSContainer("save", "button").addClass("btn btn-sm btn-solid");
        saveBilling.setHtml("Save setting");
        const btnRowBilling = new JSContainer("div").addClass("col-md-12");
        btnRowBilling.addChild(saveBilling);
        this.personal.getForm().addChild(btnRowBilling);
        this.shipping.setLegend("Shipping Details");
        const flat = (new input.JSInput("flat"));
        flat.addClass("form-control");
        flat.setPlaceHolder("Flat/Plot");
        const addressLine1 = (new input.JSInput("addressLine1"));
        addressLine1.addClass("form-control");
        addressLine1.setPlaceHolder("Address Line 1");
        const addressLine2 = (new input.JSInput("addressLine2"));
        addressLine2.addClass("form-control");
        addressLine2.setPlaceHolder("Address Line 2");
        const zipCode = (new input.JSInput("zipcode"));
        zipCode.addClass("form-control");
        zipCode.setPlaceHolder("Zip Code");
        const country = (new input.JSInput("country"));
        country.addClass("form-control");
        country.setPlaceHolder("Country");
        const city = (new input.JSInput("city"));
        city.addClass("form-control");
        city.setPlaceHolder("City");
        const state = (new input.JSInput("state"));
        state.addClass("form-control");
        state.setPlaceHolder("State");
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Flat/Plot", flat);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Address Line 1*", addressLine1);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Address Line 2", addressLine2);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Zip Code*", zipCode);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Country*", country);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("City*", city);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Region/State*", state);
        const saveShipping = new JSContainer("save", "button").addClass("btn btn-sm btn-solid");
        saveShipping.setHtml("Save setting");
        const btnRowShipping = new JSContainer("div").addClass("col-md-12");
        btnRowShipping.addChild(saveShipping);
        this.shipping.getForm().addChild(btnRowShipping);
        saveShipping.addEventListener(new Profile.Profile$0(this), "click");
        saveBilling.addEventListener(new Profile.Profile$1(this), "click");
    }
}
Profile["__class"] = "com.archnet.ui.front.pages.Profile";
Profile["__interfaces"] = ["framework.components.api.Renderable"];
(function (Profile) {
    class Profile$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.shipping.getForm().validate();
            const shipp = this.__parent.shipping.getForm().getValue();
            evt["value"] = shipp;
            evt["data-type"] = "shipping";
            this.__parent.fireListener("OnSave", evt);
        }
    }
    Profile.Profile$0 = Profile$0;
    Profile$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Profile$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.personal.getForm().validate();
            const shipp = this.__parent.personal.getForm().getValue();
            evt["value"] = shipp;
            evt["data-type"] = "billing";
            this.__parent.fireListener("OnSave", evt);
        }
    }
    Profile.Profile$1 = Profile$1;
    Profile$1["__interfaces"] = ["framework.components.api.EventListener"];
})(Profile || (Profile = {}));
class Register extends HTMLTemplateContainer {
    constructor(name) {
        super(name, "<div class=\"register-page container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <h3>create account</h3>\r\n                    <div class=\"theme-card\">\r\n                        <form class=\"theme-form\">\r\n                            <div class=\"form-row row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"email\">First Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\"\r\n                                        required=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"review\">Last Name</label>\r\n                                    <input type=\"password\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\"\r\n                                        required=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"email\">email</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"review\">Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" name=\"password\"\r\n                                        placeholder=\"Enter your password\" required=\"\">\r\n                                </div><a href=\"#\" class=\"btn btn-solid w-auto\" name=\"register\">create Account</a>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>");
        this.firstName = (new input.JSInput("firstName"));
        this.lastName = (new input.JSInput("lastName"));
        this.email = (new input.JSInput("email"));
        this.password = (new input.JSInput("password"));
        this.register = new JSContainer("register", "a");
        this.firstName.addClass("form-control");
        this.firstName.setPlaceHolder("First Name");
        this.firstName.setRequired(true);
        this.lastName.addClass("form-control");
        this.lastName.setPlaceHolder("Last Name");
        this.lastName.setRequired(true);
        this.email.addClass("form-control");
        this.email.setPlaceHolder("Email");
        this.email.setRequired(true);
        this.password.addClass("form-control");
        this.password.setPlaceHolder("Enter your password");
        this.password.setAttribute("type", "password");
        this.password.setRequired(true);
        this.register.setAttribute("href", "javascript:void(0);");
        this.register.setHtml("Create an Account");
        this.register.setAttribute("href", "javascript:void(0);");
        this.register.addClass("btn btn-solid w-auto");
        this.register.addEventListener(new Register.Register$0(this), "click");
        this.addChild(this.firstName).addChild(this.lastName).addChild(this.email).addChild(this.password).addChild(this.register);
    }
    isOk(val) {
        if (val != null && val !== "") {
            return true;
        }
        return false;
    }
}
Register["__class"] = "com.archnet.ui.front.pages.Register";
Register["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
(function (Register) {
    class Register$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.firstName.validate();
            this.__parent.lastName.validate();
            this.__parent.password.validate();
            this.__parent.email.validate();
            if (this.__parent.isOk(this.__parent.firstName.getValue()) && this.__parent.isOk(this.__parent.lastName.getValue()) && this.__parent.isOk(this.__parent.password.getValue()) && this.__parent.isOk(this.__parent.email.getValue())) {
                evt["firstName"] = this.__parent.firstName;
                evt["lastName"] = this.__parent.lastName;
                evt["password"] = this.__parent.password;
                evt["email"] = this.__parent.email;
                this.__parent.fireListener("OnRegister", evt);
            }
        }
    }
    Register.Register$0 = Register$0;
    Register$0["__interfaces"] = ["framework.components.api.EventListener"];
})(Register || (Register = {}));
class Search extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.searchSection = new HTMLTemplateContainer("search-section", Search.TEMPLATE_SEARCH_SECTION);
        this.results = new JSContainer("results", "div");
        this.txtSearch = (new input.JSInput("txtSearch"));
        this.btnSearch = new JSContainer("btnSearch", "button");
        this.addChild(this.searchSection);
        const sectionb = new JSContainer("section-b", "section").addClass("section-b-space ratio_asos");
        this.addChild(sectionb);
        const ctn = new JSContainer("div").addClass("container");
        sectionb.addChild(ctn);
        ctn.addChild(this.results);
        this.results.addClass("row search-product");
        this.txtSearch.addClass("form-control").setAttribute("aria-label", "Search Products.......");
        this.txtSearch.setPlaceHolder("Search Products.......");
        this.btnSearch.addClass("btn btn-solid").setHtml("<i class=\"fa fa-search\"></i>Search");
        this.searchSection.addChild(this.txtSearch).addChild(this.btnSearch);
        this.btnSearch.addEventListener(new Search.Search$0(this), "click");
        this.addEventListener(new Search.Search$1(this), "OnChangePage");
        this.addEventListener(new Search.Search$2(this), "OnAddCart");
        this.addEventListener(new Search.Search$3(this), "OnAddWishList");
    }
    setProducts(products) {
        this.results.clearChildren();
        this.results.setRendered(false);
        for (let index141 = 0; index141 < products.length; index141++) {
            let p = products[index141];
            {
                const box = ProductBox.createInstance(p);
                box.showDescription(false);
                box.setWidth$int(6);
                this.results.addChild(box);
                box.addEventListener(new Search.Search$4(this), "OnChangePage");
                box.addEventListener(new Search.Search$5(this), "OnAddWishList");
                box.addEventListener(new Search.Search$6(this), "OnAddCart");
            }
        }
    }
    /*private*/ fireListenerOnPage(name, evt) {
        const p = (this.getAncestorWithClass("Page"));
        if (p != null) {
            p.fireListener(name, evt);
        }
    }
}
Search.TEMPLATE_SEARCH_SECTION = "<section class=\"authentication-page\">\r\n        <div class=\"container\">\r\n            <section class=\"search-block\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 offset-lg-3\">\r\n                            <div class=\"form-header\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" name=\"txtSearch\" class=\"form-control\" aria-label=\"Search Products\"\r\n                                        placeholder=\"Search Products......\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-solid\" name=\"btnSearch\"><i class=\"fa fa-search\"></i>Search</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    </section>";
Search["__class"] = "com.archnet.ui.front.pages.Search";
Search["__interfaces"] = ["framework.components.api.Renderable"];
(function (Search) {
    class Search$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const products = (new Array());
            for (let i = 1; i <= 37; i++) {
                {
                    const pr = new Object();
                    pr["availability"] = "in stock";
                    pr["name"] = "product-" + i;
                    pr["title"] = "Candy red solid tshirt";
                    pr["description"] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book";
                    pr["price"] = "200MUR";
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/35.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/36.jpg";
                    if (i % 2 === 0) {
                        pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg";
                        pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg";
                    }
                    else if (i % 3 === 0) {
                        pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/27.jpg";
                        pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg";
                    }
                    else if (i % 5 === 0) {
                        pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg";
                        pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/34.jpg";
                    }
                    products.push(pr);
                }
                ;
            }
            this.__parent.setProducts(products);
        }
    }
    Search.Search$0 = Search$0;
    Search$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Search$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnChangePage", evt);
        }
    }
    Search.Search$1 = Search$1;
    Search$1["__interfaces"] = ["framework.components.api.EventListener"];
    class Search$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnAddCart", evt);
        }
    }
    Search.Search$2 = Search$2;
    Search$2["__interfaces"] = ["framework.components.api.EventListener"];
    class Search$3 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnAddWishList", evt);
        }
    }
    Search.Search$3 = Search$3;
    Search$3["__interfaces"] = ["framework.components.api.EventListener"];
    class Search$4 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnChangePage", evt);
        }
    }
    Search.Search$4 = Search$4;
    Search$4["__interfaces"] = ["framework.components.api.EventListener"];
    class Search$5 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnAddWishList", evt);
        }
    }
    Search.Search$5 = Search$5;
    Search$5["__interfaces"] = ["framework.components.api.EventListener"];
    class Search$6 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListenerOnPage("OnAddCart", evt);
        }
    }
    Search.Search$6 = Search$6;
    Search$6["__interfaces"] = ["framework.components.api.EventListener"];
})(Search || (Search = {}));
class WishList extends HTMLTemplateContainer {
    constructor(name) {
        super(name, "<div class=\"container wishlist-section\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12 table-responsive-xs\">\r\n\t\t\t<table class=\"table cart-table\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"table-head\">\r\n\t\t\t\t\t\t<th scope=\"col\">image</th>\r\n\t\t\t\t\t\t<th scope=\"col\">product name</th>\r\n\t\t\t\t\t\t<th scope=\"col\">price</th>\r\n\t\t\t\t\t\t<th scope=\"col\">availability</th>\r\n\t\t\t\t\t\t<th scope=\"col\">action</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody name=\"body\">\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row wishlist-buttons\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<a href=\"#\" class=\"btn btn-solid\" name=\"continue\">continue shopping</a> \r\n\t\t\t<a href=\"#\" class=\"btn btn-solid\" name=\"checkout\">check out</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>");
        this.body = new JSContainer("body", "tbody");
        this.contShopping = new JSContainer("continue", "a");
        this.checkout = new JSContainer("checkout", "a");
        this.addChild(this.body);
        this.contShopping.addClass("btn btn-solid").setAttribute("href", "javascript:void(0);").setHtml("Continue Shopping");
        this.checkout.addClass("btn btn-solid").setAttribute("href", "javascript:void(0);").setHtml("Checkout");
        this.addChild(this.contShopping).addChild(this.checkout);
        this.contShopping.addEventListener(new WishList.WishList$0(this), "click");
        this.checkout.addEventListener(new WishList.WishList$1(this), "click");
        this.addEventListener(new WishList.WishList$2(this), "OnChangePage");
        this.addEventListener(new WishList.WishList$3(this), "OnAddCart");
        this.addEventListener(new WishList.WishList$4(this), "OnRemoveWishList");
    }
    setProducts(products) {
        this.body.clearChildren();
        this.body.setRendered(false);
        for (let index142 = 0; index142 < products.length; index142++) {
            let p = products[index142];
            {
                const line = new WishList.ProductLine(this, p["name"]);
                this.body.addChild(line);
                line.setProduct(p);
                line.addEventListener(new WishList.WishList$5(this), "OnAddCart");
                line.addEventListener(new WishList.WishList$6(this), "OnRemoveWishList");
            }
        }
    }
}
WishList["__class"] = "com.archnet.ui.front.pages.WishList";
WishList["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.TemplateRenderable"];
(function (WishList) {
    class ProductLine extends JSContainer {
        constructor(__parent, name) {
            super(name, "tr");
            this.__parent = __parent;
            this.image = new JSContainer("image", "a");
            this.title = new JSContainer("tittle", "a");
            this.availability = new JSContainer("availability", "p");
            this.price = new JSContainer("price", "h2");
            this.mavailability = new JSContainer("mavailability", "p");
            this.mprice = new JSContainer("mprice", "h2").addClass("td-color");
            this.remove = new JSContainer("remove", "a").addClass("icon me-3");
            this.addCart = new JSContainer("addCart", "a").addClass("cart");
            this.mremove = new JSContainer("mremove", "a").addClass("icon me-1");
            this.maddCart = new JSContainer("maddCart", "a").addClass("cart");
            if (this.product === undefined) {
                this.product = null;
            }
            this.addChild(new JSContainer("td").addChild(this.image));
            this.addChild(new JSContainer("td").addChild(this.title));
            this.addChild(new JSContainer("td").addChild(this.price));
            this.addChild(new JSContainer("td").addChild(this.availability));
            this.addChild(new JSContainer("td").addChild(this.remove).addChild(this.addCart));
            this.image.setAttribute("href", "javascript:void(0);");
            this.remove.setHtml("<i class=\"ti-close\"></i>").setAttribute("href", "javascript:void(0);");
            this.mremove.setHtml("<i class=\"ti-close\"></i>").setAttribute("href", "javascript:void(0);");
            this.addCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("href", "javascript:void(0);");
            this.maddCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("href", "javascript:void(0);");
            this.image.addEventListener(new ProductLine.ProductLine$0(this), "click");
            this.addCart.addEventListener(new ProductLine.ProductLine$1(this), "click");
            this.maddCart.addEventListener(new ProductLine.ProductLine$2(this), "click");
            this.remove.addEventListener(new ProductLine.ProductLine$3(this), "click");
            this.mremove.addEventListener(new ProductLine.ProductLine$4(this), "click");
        }
        setProduct(p) {
            this.product = p;
            const img = this.getStringValue(p, "front");
            this.image.clearChildren();
            this.image.setRendered(false);
            const im = new JSContainer("img").setAttribute("src", img);
            this.image.addChild(im);
            this.title.setHtml(this.getStringValue(p, "title"));
            const avai = this.getStringValue(p, "availability");
            this.mavailability.setHtml(avai);
            this.availability.setHtml(avai);
            const prc = this.getStringValue(p, "price");
            this.price.setHtml(prc);
            this.mprice.setHtml(prc);
            const name = this.getStringValue(p, "name");
            this.setName(name);
        }
        getStringValue(o, field) {
            return o[field];
        }
    }
    WishList.ProductLine = ProductLine;
    ProductLine["__class"] = "com.archnet.ui.front.pages.WishList.ProductLine";
    ProductLine["__interfaces"] = ["framework.components.api.Renderable"];
    (function (ProductLine) {
        class ProductLine$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                evt["pageName"] = "product-detail/" + this.__parent.getName();
                evt["label"] = this.__parent.getStringValue(this.__parent.product, "title");
                this.__parent.fireListener("OnChangePage", evt);
            }
        }
        ProductLine.ProductLine$0 = ProductLine$0;
        ProductLine$0["__interfaces"] = ["framework.components.api.EventListener"];
        class ProductLine$1 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnAddCart", evt);
            }
        }
        ProductLine.ProductLine$1 = ProductLine$1;
        ProductLine$1["__interfaces"] = ["framework.components.api.EventListener"];
        class ProductLine$2 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnAddCart", evt);
            }
        }
        ProductLine.ProductLine$2 = ProductLine$2;
        ProductLine$2["__interfaces"] = ["framework.components.api.EventListener"];
        class ProductLine$3 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnRemoveWishList", evt);
                this.__parent.setStyle("display", "none");
            }
        }
        ProductLine.ProductLine$3 = ProductLine$3;
        ProductLine$3["__interfaces"] = ["framework.components.api.EventListener"];
        class ProductLine$4 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnRemoveWishList", evt);
                this.__parent.setStyle("display", "none");
            }
        }
        ProductLine.ProductLine$4 = ProductLine$4;
        ProductLine$4["__interfaces"] = ["framework.components.api.EventListener"];
    })(ProductLine = WishList.ProductLine || (WishList.ProductLine = {}));
    class WishList$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "home";
            evt["label"] = "Home";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    WishList.WishList$0 = WishList$0;
    WishList$0["__interfaces"] = ["framework.components.api.EventListener"];
    class WishList$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "checkout";
            evt["label"] = "Checkout";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    WishList.WishList$1 = WishList$1;
    WishList$1["__interfaces"] = ["framework.components.api.EventListener"];
    class WishList$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnChangePage", evt);
            }
        }
    }
    WishList.WishList$2 = WishList$2;
    WishList$2["__interfaces"] = ["framework.components.api.EventListener"];
    class WishList$3 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnAddCart", evt);
            }
        }
    }
    WishList.WishList$3 = WishList$3;
    WishList$3["__interfaces"] = ["framework.components.api.EventListener"];
    class WishList$4 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const p = (source.getAncestorWithClass("Page"));
            if (p != null) {
                p.fireListener("OnRemoveWishList", evt);
            }
        }
    }
    WishList.WishList$4 = WishList$4;
    WishList$4["__interfaces"] = ["framework.components.api.EventListener"];
    class WishList$5 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnAddCart", evt);
        }
    }
    WishList.WishList$5 = WishList$5;
    WishList$5["__interfaces"] = ["framework.components.api.EventListener"];
    class WishList$6 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnRemoveWishList", evt);
        }
    }
    WishList.WishList$6 = WishList$6;
    WishList$6["__interfaces"] = ["framework.components.api.EventListener"];
})(WishList || (WishList = {}));
class Portal extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.loader = new LoaderSkeletor("skeleton");
        this.headerContainer = new JSContainer("headerContainer", "header");
        this.header = new Header("header");
        this.topHeader = new TopHeader("topHeader");
        this.breadcrumb = new BreadCrumbSection("beadcrumb-section");
        this.page = new Page("page-holder");
        this.footer = new Footer("footer");
        this.wishList = new LocalStorageWishList();
        this.cart = new LocalStorageCart();
        this.user = null;
        this.addClass("Portal");
        this.addChild(this.loader.setStyle("display", "none"));
        this.addChild(this.headerContainer);
        this.addChild(this.breadcrumb);
        this.addChild(this.page);
        this.addChild(this.footer);
        this.headerContainer.addChild(this.topHeader);
        this.headerContainer.addChild(this.header);
        this.header.addEventListener(new Portal.Portal$0(this), "OnChangePage");
        this.topHeader.addEventListener(new Portal.Portal$1(this), "OnChangePage");
        this.breadcrumb.addEventListener(new Portal.Portal$2(this), "OnChangePage");
    }
    getLoggedUser() {
        return this.user;
    }
    fireChangePage(evt) {
        const label = evt["label"];
        this.setPageTitle(label);
        const pageName = evt["pageName"];
        this.open(pageName);
    }
    fireAddCart(evt) {
        const product = evt["product"];
        this.cart.setProduct(product);
        this.notify("fa fa-check", "Success!", product["title"] + " Successfully added to your cart");
    }
    fireAddWishList(evt) {
        const product = evt["product"];
        this.wishList.setProduct(product);
        this.notify("fa fa-check", "Success!", product["title"] + " Successfully added to your wishlist");
    }
    fireRemoveWishList(evt) {
        const pro = evt["product"];
        this.wishList.deleteProduct(pro["name"]);
        this.notify("fa fa-check", "Success!", pro["title"] + " Successfully removed from your wishlist");
    }
    fireLogin(evt) {
        this.user = new Object();
        this.user["email"] = evt["email"];
        this.topHeader.setLoggedUser(this.user);
        this.open("home");
    }
    notify(icon, title, message) {
        const jq = window["$"];
        const notif = jq["notify"];
        const param = new Object();
        param["icon"] = icon;
        param["title"] = title;
        param["message"] = message;
        notif.call(notif, param);
    }
    open(pageName) {
        if (pageName === "login") {
            const login = new Login("login");
            this.getPage().setBody(login);
        }
        else if (pageName === "home") {
            const home = new Home("home");
            this.getPage().setBody(home);
        }
        else if (pageName === "register") {
            const register = new Register("register");
            this.getPage().setBody(register);
        }
        else if (pageName === "search") {
            const search = new Search("search");
            this.getPage().setBody(search);
        }
        else if (pageName === "forgot") {
            const forgot = new ForgotPassword("forgot");
            this.getPage().setBody(forgot);
        }
        else if (pageName === "wishlist") {
            const wishlist = new WishList("wishlist");
            this.wishList.getProducts().then(((wishlist) => {
                return (prods) => {
                    wishlist.setProducts(prods);
                    this.getPage().setBody(wishlist);
                    this.getPage().setRendered(false);
                    this.getPage().render();
                };
            })(wishlist));
        }
        else if (pageName === "profile") {
            if (this.getLoggedUser() != null) {
                const prof = new Profile("profile");
                this.getPage().setBody(prof);
            }
        }
        else {
            const notfound = new PageNotFound("notfound");
            this.getPage().setBody(notfound);
        }
    }
    getPage() {
        return this.page;
    }
    getLoader() {
        return this.loader;
    }
    getHeaderContainer() {
        return this.headerContainer;
    }
    getBreadcrumb() {
        return this.breadcrumb.getBreadcrumb();
    }
    setLoader(loader) {
        this.loader = loader;
    }
    setHeader(header) {
        this.headerContainer = header;
    }
    setPage(page) {
        this.page = page;
    }
    getHeader() {
        return this.header;
    }
    getTopHeader() {
        return this.topHeader;
    }
    setBreadcrumbs(items) {
        this.getBreadcrumb().setBreadcrumbs(items);
    }
    setMainMenu(items) {
        this.getHeader().setMenu(items);
        const breadc = (new Array());
        breadc.push(items[0]);
        this.setBreadcrumbs(breadc);
    }
    setLogo(logo) {
        this.getHeader().setLogo(logo);
    }
    setStoreName(name) {
        this.getTopHeader().setStoreName(name);
    }
    setPhoneNumber(phone) {
        this.getTopHeader().setPhoneNumber(phone);
    }
    setPageTitle(title) {
        this.breadcrumb.setPageTitle(title);
    }
    setSetting(sett) {
        this.setPageTitle(sett.pageTitle);
        this.setLogo(sett.logo);
        this.setStoreName(sett.storeName);
        this.setPhoneNumber(sett.phoneNumber);
        this.setMainMenu(sett.menu);
        this.getFooter().setSetting(sett);
    }
    getFooter() {
        return this.footer;
    }
    getWishList() {
        return this.wishList;
    }
    getCart() {
        return this.cart;
    }
}
Portal["__class"] = "com.archnet.ui.front.Portal";
Portal["__interfaces"] = ["framework.components.api.Renderable"];
(function (Portal) {
    class Portal$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireChangePage(evt);
        }
    }
    Portal.Portal$0 = Portal$0;
    Portal$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Portal$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireChangePage(evt);
        }
    }
    Portal.Portal$1 = Portal$1;
    Portal$1["__interfaces"] = ["framework.components.api.EventListener"];
    class Portal$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireChangePage(evt);
        }
    }
    Portal.Portal$2 = Portal$2;
    Portal$2["__interfaces"] = ["framework.components.api.EventListener"];
})(Portal || (Portal = {}));
class ProductListView extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.view = "grid";
        this.rowSize = 4;
        this.row = new JSContainer("row");
        this.addClass("product-wrapper-grid");
        this.addChild(this.row.addClass("row margin-res"));
    }
    setView(view) {
        if (this.view !== view) {
            if (view === ProductListView.VIEW_GRID) {
                this.removeClass("list-view");
                this.setRowSize(4);
            }
            else {
                this.addClass("list-view");
                this.setRowSize(1);
            }
            this.view = view;
        }
    }
    getProducts() {
        const result = this.row.getChildren();
        return result;
    }
    setProducts(products) {
        this.row.clearChildren();
        this.row.setRendered(false);
        for (let index143 = 0; index143 < products.length; index143++) {
            let o = products[index143];
            {
                const box = new ProductBox("");
                box.setProduct(o);
                this.row.addChild(box);
                box.addEventListener(new ProductListView.ProductListView$0(this), "OnChangePage");
                box.addEventListener(new ProductListView.ProductListView$1(this), "OnAddCart");
                box.addEventListener(new ProductListView.ProductListView$2(this), "OnAddWishList");
            }
        }
    }
    setRowSize(size) {
        this.rowSize = size;
        {
            let array145 = this.getProducts();
            for (let index144 = 0; index144 < array145.length; index144++) {
                let p = array145[index144];
                {
                    p.setWidth$int(size);
                }
            }
        }
    }
}
ProductListView.VIEW_GRID = "grid";
ProductListView.VIEW_LIST = "list";
ProductListView["__class"] = "com.archnet.ui.front.ProductListView";
ProductListView["__interfaces"] = ["framework.components.api.Renderable"];
(function (ProductListView) {
    class ProductListView$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    ProductListView.ProductListView$0 = ProductListView$0;
    ProductListView$0["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductListView$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnAddCart", evt);
        }
    }
    ProductListView.ProductListView$1 = ProductListView$1;
    ProductListView$1["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductListView$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnAddWishList", evt);
        }
    }
    ProductListView.ProductListView$2 = ProductListView$2;
    ProductListView$2["__interfaces"] = ["framework.components.api.EventListener"];
})(ProductListView || (ProductListView = {}));
class ProductPaginator extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.pagination = new ProductPaginator.Pagination(this, "pagination");
        this.count = new JSContainer("count", "h5");
        this.pageSize = 25;
        this.total = -1;
        this.page = 1;
        this.numPages = -1;
        this.addClass("product-pagination");
        const theme = new JSContainer("div").addClass("theme-paggination-block");
        const container = new JSContainer("div").addClass("container-fluid p-0");
        this.addChild(theme.addChild(container));
        const row = new ui.Row("row");
        container.addChild(row);
        const left = new ui.Col("col");
        left.setWidth(ui.Size.EXTRA_LARGE, 6).setWidth(ui.Size.MEDIUM, 6).setWidth(ui.Size.SMALL, 12);
        row.addChild(left);
        const right = new ui.Col("col");
        right.setWidth(ui.Size.EXTRA_LARGE, 6).setWidth(ui.Size.MEDIUM, 6).setWidth(ui.Size.SMALL, 12);
        row.addChild(right);
        const nav = new JSContainer("nav").setAttribute("aria-label", "Page navigation");
        left.addChild(nav);
        nav.addChild(this.pagination);
        const searchCount = new JSContainer("div").addClass("product-search-count-bottom");
        right.addChild(searchCount.addChild(this.count));
        this.pagination.addEventListener(new ProductPaginator.ProductPaginator$0(this), "OnChange");
    }
    fireOnChange(evt) {
        evt["pageSize"] = this.pageSize;
        evt["page"] = this.page;
        let numItem = this.pageSize;
        evt["numItems"] = numItem;
        evt["total"] = this.total;
        if (this.page === this.numPages) {
            numItem = this.total % this.pageSize;
            if (numItem > 0) {
                evt["numItems"] = numItem;
            }
        }
        const start = (this.pageSize * (this.page - 1)) + 1;
        const end = start + numItem - 1;
        evt["start"] = start;
        evt["end"] = end;
        const label = "Showing Products " + start + " - " + end + " of " + this.total + " results";
        this.count.setHtml(label);
        this.fireListener("OnChange", evt);
    }
    start() {
        const onchange = new CustomEvent("OnChange");
        this.fireOnChange(onchange);
    }
    setCurrentPage(page) {
        this.page = page;
    }
    setValue$int(total) {
        this.setValue$int$int(total, 25);
    }
    setPageSize(pageSize) {
        this.setValue$int$int(this.total, pageSize);
    }
    setValue$int$int(total, pageSize) {
        this.pageSize = pageSize;
        this.total = total;
        this.page = 1;
        this.numPages = ((total - (total % pageSize)) / pageSize | 0);
        if ((total % pageSize) > 0) {
            this.numPages = this.numPages + 1;
        }
        this.pagination.setPages(this.numPages);
        this.pagination.fireOnChange(new CustomEvent("OnChange"));
    }
    setValue(total, pageSize) {
        if (((typeof total === 'number') || total === null) && ((typeof pageSize === 'number') || pageSize === null)) {
            return this.setValue$int$int(total, pageSize);
        }
        else if (((typeof total === 'number') || total === null) && pageSize === undefined) {
            return this.setValue$int(total);
        }
        else
            throw new Error('invalid overload');
    }
    getPagination() {
        return this.pagination;
    }
    getPageSize() {
        return this.pageSize;
    }
    getTotal() {
        return this.total;
    }
    getPage() {
        return this.page;
    }
    getNumPages() {
        return this.numPages;
    }
}
ProductPaginator.Event_OnChange = "OnChange";
ProductPaginator["__class"] = "com.archnet.ui.front.ProductPaginator";
ProductPaginator["__interfaces"] = ["framework.components.api.Renderable"];
(function (ProductPaginator) {
    class Pagination extends JSContainer {
        constructor(__parent, name) {
            super(name, "ul");
            this.__parent = __parent;
            this.__previous = new JSContainer("previous", "a").setAttribute("href", "javascript:void(0);");
            this.__next = new JSContainer("next", "a").setAttribute("href", "javascript:void(0);");
            this.currentPage = 1;
            this.pages = -1;
            this.addClass("pagination");
            this.__previous.setHtml("<span aria-hidden=\"true\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> <span class=\"sr-only\">Previous</span>");
            this.__previous.addClass("page-link").setAttribute("aria-label", "Previous");
            this.__previous.addEventListener(new Pagination.Pagination$0(this), "click");
            this.__next.setHtml("<span aria-hidden=\"true\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></span> <span class=\"sr-only\">Next</span>");
            this.__next.addClass("page-link").setAttribute("aria-label", "Next");
            this.__next.addEventListener(new Pagination.Pagination$1(this), "click");
        }
        setPages(pages) {
            this.refresh(pages);
        }
        addItem$framework_components_JSContainer(item) {
            const li = new JSContainer("li").addClass("page-item");
            this.addChild(li);
            li.addChild(item);
            return this;
        }
        addItem(item) {
            if (((item != null && item instanceof JSContainer) || item === null)) {
                return this.addItem$framework_components_JSContainer(item);
            }
            else if (((typeof item === 'number') || item === null)) {
                return this.addItem$int(item);
            }
            else
                throw new Error('invalid overload');
        }
        addItem$int(page) {
            const link = new JSContainer(page + "", "a").addClass("page-link").setHtml(page + "");
            link.addEventListener(new Pagination.Pagination$2(this, page), "click");
            return this.addItem$framework_components_JSContainer(link);
        }
        fireOnChange(evt) {
            evt["page"] = this.currentPage;
            this.fireListener("OnChange", evt);
        }
        next() {
            if (this.currentPage < this.pages) {
                this.currentPage = this.currentPage + 1;
                this.setCurrentPage(this.currentPage);
            }
        }
        previous() {
            if (this.currentPage > 1) {
                this.currentPage = this.currentPage - 1;
                this.setCurrentPage(this.currentPage);
            }
        }
        refresh(pages) {
            this.pages = pages;
            this.clearChildren();
            this.setRendered(false);
            this.__previous.setRendered(false);
            this.__next.setRendered(false);
            this.addItem$framework_components_JSContainer(this.__previous);
            for (let i = 1; i <= pages; i++) {
                {
                    this.addItem$int(i);
                }
                ;
            }
            this.addItem$framework_components_JSContainer(this.__next);
            this.setCurrentPage(1);
        }
        setCurrentPage(pageNumber) {
            {
                let array147 = this.getChildren();
                for (let index146 = 0; index146 < array147.length; index146++) {
                    let r = array147[index146];
                    {
                        r.removeClass("active");
                    }
                }
            }
            const li = this.getChildren()[pageNumber];
            li.addClass("active");
            this.currentPage = pageNumber;
        }
        getPages() {
            return this.pages;
        }
        getCurrentPage() {
            return this.currentPage;
        }
    }
    ProductPaginator.Pagination = Pagination;
    Pagination["__class"] = "com.archnet.ui.front.ProductPaginator.Pagination";
    Pagination["__interfaces"] = ["framework.components.api.Renderable"];
    (function (Pagination) {
        class Pagination$0 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.previous();
                this.__parent.fireOnChange(evt);
            }
        }
        Pagination.Pagination$0 = Pagination$0;
        Pagination$0["__interfaces"] = ["framework.components.api.EventListener"];
        class Pagination$1 {
            constructor(__parent) {
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.next();
                this.__parent.fireOnChange(evt);
            }
        }
        Pagination.Pagination$1 = Pagination$1;
        Pagination$1["__interfaces"] = ["framework.components.api.EventListener"];
        class Pagination$2 {
            constructor(__parent, page) {
                this.page = page;
                this.__parent = __parent;
            }
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source, evt) {
                this.__parent.setCurrentPage(this.page);
                this.__parent.fireOnChange(evt);
            }
        }
        Pagination.Pagination$2 = Pagination$2;
        Pagination$2["__interfaces"] = ["framework.components.api.EventListener"];
    })(Pagination = ProductPaginator.Pagination || (ProductPaginator.Pagination = {}));
    class ProductPaginator$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const page = evt["page"];
            this.__parent.setCurrentPage(page);
            this.__parent.fireOnChange(evt);
        }
    }
    ProductPaginator.ProductPaginator$0 = ProductPaginator$0;
    ProductPaginator$0["__interfaces"] = ["framework.components.api.EventListener"];
})(ProductPaginator || (ProductPaginator = {}));
class ProductTopFilter extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.count = new JSContainer("count", "h5");
        this.searchCount = new JSContainer("searchCount", "div").addClass("search-count");
        this.collectionView = new JSContainer("collectionView", "div").addClass("collection-view");
        this.collectionGridView = new JSContainer("collectionGridView", "div").addClass("collection-grid-view");
        this.productPerPageView = new JSContainer("productPerPageView", "div").addClass("product-page-per-view");
        this.productPageFilter = new JSContainer("productPageFilter", "div").addClass("product-page-filter");
        this.gridView = new JSContainer("gridView", "i").addClass("fa fa-th grid-layout-view");
        this.listView = new JSContainer("listView", "i").addClass("fa fa-list-ul list-layout-view");
        this.addClass("product-top-filter");
        const col12 = new JSContainer("div").addClass("col-12");
        const content = new JSContainer("div").addClass("product-filter-content");
        col12.addChild(content);
        this.addChild(new JSContainer("div").addClass("container-fluid p-0").addChild(new JSContainer("div").addClass("row").addChild(col12)));
        this.searchCount.addChild(this.count);
        content.addChild(this.searchCount);
        content.addChild(this.collectionView).addChild(this.collectionGridView).addChild(this.productPerPageView).addChild(this.productPageFilter);
        const views = new JSContainer("ul");
        views.addChild(new JSContainer("li").addChild(this.gridView));
        views.addChild(new JSContainer("li").addChild(this.listView));
        this.collectionView.addChild(views);
        this.gridView.addEventListener(new ProductTopFilter.ProductTopFilter$0(this), "click");
        this.listView.addEventListener(new ProductTopFilter.ProductTopFilter$1(this), "click");
        const size = new JSContainer("ul");
        this.collectionGridView.addChild(size);
        for (let i = 2; i <= 6; i++) {
            {
                if (i !== 5) {
                    const li = new JSContainer("li");
                    const img = new JSContainer("" + i, "img");
                    img.addEventListener(new ProductTopFilter.ProductTopFilter$2(this), "click");
                    img.addClass("product-" + i + "-layout-view");
                    img.setAttribute("src", "https://themes.pixelstrap.com/multikart/assets/images/icon/" + i + ".png");
                    li.addChild(img);
                    size.addChild(li);
                }
            }
            ;
        }
        const pageSize = new input.JSSelect("productPerPage");
        pageSize.addOption("25 Products Per Page", "25").addOption("50 Products Per Page", "50").addOption("100 Products Per Page", "100");
        pageSize.addEventListener(new ProductTopFilter.ProductTopFilter$3(this, pageSize), "change");
        pageSize.setValue("25");
        this.productPerPageView.addChild(pageSize);
        const sort = new input.JSSelect("sort").addOption("Sort By Price", "price").addOption("Sort By Date Added", "sort");
        this.productPageFilter.addChild(sort);
        sort.addEventListener(new ProductTopFilter.ProductTopFilter$4(this, sort), "change");
        sort.setValue("sort");
    }
    setCount(start, end, total) {
        const txt = "Showing Products " + start + " - " + end + " Of " + total + " Results";
        this.count.setHtml(txt);
    }
}
ProductTopFilter.Event_OnChangeView = "OnChangeView";
ProductTopFilter.Event_OnChangeRowSize = "OnChangeRowSize";
ProductTopFilter.Event_OnChangePageSize = "OnChangePageSize";
ProductTopFilter.Event_OnChangeSortBy = "OnChangeSortBy";
ProductTopFilter["__class"] = "com.archnet.ui.front.ProductTopFilter";
ProductTopFilter["__interfaces"] = ["framework.components.api.Renderable"];
(function (ProductTopFilter) {
    class ProductTopFilter$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["viewtype"] = "grid";
            this.__parent.fireListener("OnChangeView", evt);
        }
    }
    ProductTopFilter.ProductTopFilter$0 = ProductTopFilter$0;
    ProductTopFilter$0["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductTopFilter$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["viewtype"] = "list";
            this.__parent.fireListener("OnChangeView", evt);
        }
    }
    ProductTopFilter.ProductTopFilter$1 = ProductTopFilter$1;
    ProductTopFilter$1["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductTopFilter$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["size"] = /* parseInt */ parseInt(source.getName());
            this.__parent.fireListener("OnChangeRowSize", evt);
        }
    }
    ProductTopFilter.ProductTopFilter$2 = ProductTopFilter$2;
    ProductTopFilter$2["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductTopFilter$3 {
        constructor(__parent, pageSize) {
            this.pageSize = pageSize;
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const ipageSize = parseInt(this.pageSize.getValue() + "");
            evt["pageSize"] = ipageSize;
            this.__parent.fireListener("OnChangePageSize", evt);
        }
    }
    ProductTopFilter.ProductTopFilter$3 = ProductTopFilter$3;
    ProductTopFilter$3["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductTopFilter$4 {
        constructor(__parent, sort) {
            this.sort = sort;
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const sortBy = this.sort.getValue() + "";
            evt["sortBy"] = sortBy;
            this.__parent.fireListener("OnChangeSortBy", evt);
        }
    }
    ProductTopFilter.ProductTopFilter$4 = ProductTopFilter$4;
    ProductTopFilter$4["__interfaces"] = ["framework.components.api.EventListener"];
})(ProductTopFilter || (ProductTopFilter = {}));
class Setting {
    constructor() {
        if (this.pageTitle === undefined) {
            this.pageTitle = null;
        }
        if (this.logo === undefined) {
            this.logo = null;
        }
        if (this.storeName === undefined) {
            this.storeName = null;
        }
        if (this.phoneNumber === undefined) {
            this.phoneNumber = null;
        }
        if (this.menu === undefined) {
            this.menu = null;
        }
        if (this.fax === undefined) {
            this.fax = null;
        }
        if (this.email === undefined) {
            this.email = null;
        }
        if (this.address === undefined) {
            this.address = null;
        }
        if (this.storeDescription === undefined) {
            this.storeDescription = null;
        }
        if (this.facebook === undefined) {
            this.facebook = null;
        }
        if (this.twitter === undefined) {
            this.twitter = null;
        }
        if (this.googleplus === undefined) {
            this.googleplus = null;
        }
        if (this.instagram === undefined) {
            this.instagram = null;
        }
        if (this.rss === undefined) {
            this.rss = null;
        }
        if (this.categories === undefined) {
            this.categories = null;
        }
    }
}
Setting["__class"] = "com.archnet.ui.front.Setting";
class TopHeader extends JSContainer {
    constructor(name) {
        super(name, "div");
        this.left = new ui.Col("left");
        this.right = new ui.Col("right");
        this.storeName = new JSContainer("storeName", "span");
        this.phoneNumber = new JSContainer("phoneNumber", "span");
        this.headerDropdown = new ui.List("headerDropdown", "ul");
        this.wishList = new JSContainer("wishlist", "a");
        this.accountMenu = new ui.List("accountMenu", "ul");
        this.addClass("top-header");
        const grid = new ui.Grid("grid");
        this.addChild(grid);
        grid.addCol(this.left).addCol(this.right);
        this.left.setWidth(ui.Size.LARGE, 6);
        this.right.setWidth(ui.Size.LARGE, 6);
        const headerContact = new JSContainer("header-contact", "div");
        headerContact.addClass("header-contact");
        this.left.addChild(headerContact);
        const list = new ui.List("contact", "ul");
        headerContact.addChild(list);
        list.addItem(this.storeName);
        const phone = new JSContainer("i").addClass("fa fa-phone").setAttribute("aria-hidden", "true");
        list.addItem(phone);
        phone.getParent().addChild(this.phoneNumber);
        this.right.addClass("text-end");
        this.headerDropdown.addClass("header-dropdown");
        this.right.addChild(this.headerDropdown);
        this.wishList.setAttribute("href", "javascript:void(0);").setHtml("<i class=\"fa fa-heart\" aria-hidden=\"true\"></i>");
        this.headerDropdown.addItem(this.wishList);
        this.wishList.getParent().addClass("mobile-wishlist");
        this.wishList.addEventListener(new TopHeader.TopHeader$0(this), "click");
        const iconUser = new JSContainer("i").addClass("fa fa-user").setAttribute("aria-hidden", "true");
        this.headerDropdown.addItem(iconUser);
        const li = iconUser.getParent();
        li.addClass("onhover-dropdown mobile-account");
        li.addChild(new JSContainer("span").setHtml("My Account").addEventListener(new TopHeader.TopHeader$1(this), "click"));
        li.addChild(this.accountMenu);
        this.accountMenu.addClass("onhover-show-div");
        const login = new JSContainer("login", "a").setAttribute("href", "javascript:void(0);").setHtml("Login");
        const register = new JSContainer("register", "a").setAttribute("href", "javascript:void(0);").setHtml("Register");
        this.accountMenu.addItem(login);
        this.accountMenu.addItem(register);
        login.addEventListener(new TopHeader.TopHeader$2(this), "click");
        register.addEventListener(new TopHeader.TopHeader$3(this), "click");
    }
    setLoggedUser(o) {
        if (o != null) {
            this.accountMenu.setStyle("display", "none");
        }
        else {
            this.accountMenu.setStyle("display", null);
        }
    }
    setStoreName(name) {
        this.storeName.setHtml("Welcome to Our store " + name);
    }
    setPhoneNumber(phone) {
        this.phoneNumber.setHtml("Call Us: " + phone);
    }
}
TopHeader["__class"] = "com.archnet.ui.front.TopHeader";
TopHeader["__interfaces"] = ["framework.components.api.Renderable"];
(function (TopHeader) {
    class TopHeader$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "wishlist";
            evt["label"] = "Wish List";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    TopHeader.TopHeader$0 = TopHeader$0;
    TopHeader$0["__interfaces"] = ["framework.components.api.EventListener"];
    class TopHeader$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "profile";
            evt["label"] = "Profile";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    TopHeader.TopHeader$1 = TopHeader$1;
    TopHeader$1["__interfaces"] = ["framework.components.api.EventListener"];
    class TopHeader$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "login";
            evt["label"] = "Login";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    TopHeader.TopHeader$2 = TopHeader$2;
    TopHeader$2["__interfaces"] = ["framework.components.api.EventListener"];
    class TopHeader$3 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "register";
            evt["label"] = "Register";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    TopHeader.TopHeader$3 = TopHeader$3;
    TopHeader$3["__interfaces"] = ["framework.components.api.EventListener"];
})(TopHeader || (TopHeader = {}));
(function (ui) {
    class Grid extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.row = new ui.Row("row");
            this.addClass("container");
            this.addChild(this.row);
        }
        getRow() {
            return this.row;
        }
        addCol(col) {
            this.row.addChild(col);
            return this;
        }
        getCol(index) {
            return this.row.getChildren()[index];
        }
    }
    ui.Grid = Grid;
    Grid["__class"] = "com.archnet.ui.Grid";
    Grid["__interfaces"] = ["framework.components.api.Renderable"];
})(ui || (ui = {}));
(function (ui) {
    class List extends JSContainer {
        constructor(name, tag) {
            super(name, tag);
        }
        addItem(item) {
            const li = new JSContainer("li");
            li.addChild(item);
            this.addChild(li);
            return li;
        }
        addItems(...items) {
            for (let index148 = 0; index148 < items.length; index148++) {
                let item = items[index148];
                {
                    this.addItem(item);
                }
            }
            return this;
        }
    }
    ui.List = List;
    List["__class"] = "com.archnet.ui.List";
    List["__interfaces"] = ["framework.components.api.Renderable"];
})(ui || (ui = {}));
(function (ui) {
    class Row extends JSContainer {
        constructor(name) {
            super(name, "div");
            this.addClass("row");
        }
    }
    ui.Row = Row;
    Row["__class"] = "com.archnet.ui.Row";
    Row["__interfaces"] = ["framework.components.api.Renderable"];
})(ui || (ui = {}));
(function (ui) {
    let Size;
    (function (Size) {
        Size[Size["SMALL"] = 0] = "SMALL";
        Size[Size["MEDIUM"] = 1] = "MEDIUM";
        Size[Size["LARGE"] = 2] = "LARGE";
        Size[Size["EXTRA_LARGE"] = 3] = "EXTRA_LARGE";
        Size[Size["EXTRA_EXTRA_LARGE"] = 4] = "EXTRA_EXTRA_LARGE";
        Size[Size["NONE"] = 5] = "NONE";
    })(Size = ui.Size || (ui.Size = {}));
    /** @ignore */
    class Size_$WRAPPER {
        constructor(_$ordinal, _$name, value) {
            this._$ordinal = _$ordinal;
            this._$name = _$name;
            if (this.value === undefined) {
                this.value = null;
            }
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        name() { return this._$name; }
        ordinal() { return this._$ordinal; }
        compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
    }
    ui.Size_$WRAPPER = Size_$WRAPPER;
    Size["__class"] = "com.archnet.ui.Size";
    Size["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
    Size["_$wrappers"] = { 0: new Size_$WRAPPER(0, "SMALL", "sm"), 1: new Size_$WRAPPER(1, "MEDIUM", "md"), 2: new Size_$WRAPPER(2, "LARGE", "lg"), 3: new Size_$WRAPPER(3, "EXTRA_LARGE", "xl"), 4: new Size_$WRAPPER(4, "EXTRA_EXTRA_LARGE", "xxl"), 5: new Size_$WRAPPER(5, "NONE", "none") };
})(ui || (ui = {}));
class LocalStorageCart extends AbstractLocalStorageProductList {
    getDbKey() {
        return "cart";
    }
    constructor() {
        super();
    }
}
LocalStorageCart["__class"] = "com.archnet.LocalStorageCart";
LocalStorageCart["__interfaces"] = ["com.archnet.ICart", "com.archnet.IProductList"];
class LocalStorageWishList extends AbstractLocalStorageProductList {
    /**
     *
     * @return {string}
     */
    getDbKey() {
        return "wishlist";
    }
    constructor() {
        super();
    }
}
LocalStorageWishList["__class"] = "com.archnet.LocalStorageWishList";
LocalStorageWishList["__interfaces"] = ["com.archnet.IWishsList", "com.archnet.IProductList"];
class ProductBox extends ui.Col {
    constructor(name) {
        super(name);
        this.box = new JSContainer("box", "div");
        this.front = new JSContainer("front", "img");
        this.back = new JSContainer("back", "img");
        this.title = new JSContainer("title", "h6");
        this.description = new JSContainer("description", "p");
        this.price = new JSContainer("price", "h4");
        this.product = null;
        this.addChild(this.box);
        this.setWidth$int(4);
        const imgWrapper = new JSContainer("div").addClass("img-wrapper");
        imgWrapper.addChild("front", "div", "front").addChild(this.front);
        imgWrapper.addChild("back", "div", "back").addChild(this.back);
        this.front.addClass("img-fluid blur-up lazyload bg-img");
        this.back.addClass("img-fluid blur-up lazyload bg-img");
        this.box.addChild(imgWrapper);
        this.box.addClass("product-box");
        const cartInfo = new JSContainer("div").addClass("cart-info cart-wrap");
        imgWrapper.addChild(cartInfo);
        const addToCart = new JSContainer("addToCart", "button").setAttribute("title", "Add to cart");
        addToCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("data-bs-toggle", "modal").setAttribute("data-bs-target", "#addtocart");
        cartInfo.addChild(addToCart);
        addToCart.addEventListener(new ProductBox.ProductBox$0(this), "click");
        const addToWishlist = new JSContainer("addToWishList", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Add to Wishlist");
        addToWishlist.setHtml("<i class=\"ti-heart\" aria-hidden=\"true\"></i>");
        cartInfo.addChild(addToWishlist);
        addToWishlist.addEventListener(new ProductBox.ProductBox$1(this), "click");
        const quickView = new JSContainer("quickView", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Quick View");
        quickView.setHtml("<i class=\"ti-search\"></i>").setAttribute("data-bs-toggle", "modal").setAttribute("data-bs-target", "#quickview");
        cartInfo.addChild(quickView);
        const compare = new JSContainer("compare", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Compare");
        compare.setHtml("<i class=\"ti-reload\" aria-hidden=\"true\"></i>");
        cartInfo.addChild(compare);
        const detail = new JSContainer("div").addClass("product-detail");
        this.box.addChild(detail);
        const rating = new JSContainer("rating", "div").addClass("rating");
        for (let i = 1; i <= 5; i++) {
            {
                const star = new JSContainer(i + "", "i").addClass("fa fa-star");
                rating.addChild(star);
            }
            ;
        }
        detail.addChild(rating);
        const titleLink = new JSContainer("a").setAttribute("href", "javascript:void(0);");
        titleLink.addChild(this.title);
        detail.addChild(titleLink);
        titleLink.addEventListener(new ProductBox.ProductBox$2(this), "click");
        detail.addChild(this.description);
        detail.addChild(this.price);
    }
    setDescription(description) {
        this.description.setHtml(description);
    }
    setPrice(price) {
        this.price.setHtml(price);
    }
    setTitle(title) {
        this.title.setHtml(title);
    }
    setImageBack(url) {
        this.back.setAttribute("src", url);
    }
    setImageFront(url) {
        this.front.setAttribute("src", url);
    }
    setProduct(p) {
        this.product = p;
        const price = p["price"];
        const front = p["front"];
        const back = p["back"];
        const title = p["title"];
        const description = p["description"];
        const name = p["name"];
        this.setName(name);
        this.setPrice(price);
        this.setImageBack(back);
        this.setImageFront(front);
        this.setTitle(title);
        this.setDescription(description);
    }
    getProduct() {
        return this.product;
    }
    static createInstance(p) {
        const box = new ProductBox("");
        box.setProduct(p);
        return box;
    }
    setWidth(size, width) {
        if (((typeof size === 'number') || size === null) && ((typeof width === 'number') || width === null)) {
            return super.setWidth(size, width);
        }
        else if (((typeof size === 'number') || size === null) && width === undefined) {
            return this.setWidth$int(size);
        }
        else
            throw new Error('invalid overload');
    }
    setWidth$int(width) {
        this.clearSizes();
        if (width === 6) {
            this.setWidth(ui.Size.LARGE, 2);
        }
        else if (width === 4) {
            this.setWidth(ui.Size.EXTRA_LARGE, 3);
            this.setWidth(ui.Size.NONE, 6);
        }
        else if (width === 3) {
            this.setWidth(ui.Size.LARGE, 4);
            this.setWidth(ui.Size.NONE, 6);
        }
        else if (width === 2) {
            this.setWidth(ui.Size.LARGE, 6);
        }
        else if (width === 1) {
            this.setWidth(ui.Size.LARGE, 12);
        }
        return this;
    }
    showDescription(b) {
        if (b) {
            this.description.setStyle("display", null);
        }
        else {
            this.description.setStyle("display", "none");
        }
    }
}
ProductBox["__class"] = "com.archnet.ui.front.ProductBox";
ProductBox["__interfaces"] = ["framework.components.api.Renderable"];
(function (ProductBox) {
    class ProductBox$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["product"] = this.__parent.product;
            this.__parent.fireListener("OnAddCart", evt);
        }
    }
    ProductBox.ProductBox$0 = ProductBox$0;
    ProductBox$0["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductBox$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["product"] = this.__parent.product;
            this.__parent.fireListener("OnAddWishList", evt);
        }
    }
    ProductBox.ProductBox$1 = ProductBox$1;
    ProductBox$1["__interfaces"] = ["framework.components.api.EventListener"];
    class ProductBox$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            const pageName = "product-detail/" + this.__parent.getName();
            const label = this.__parent.title.getHtml();
            evt["label"] = label;
            evt["pageName"] = pageName;
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    ProductBox.ProductBox$2 = ProductBox$2;
    ProductBox$2["__interfaces"] = ["framework.components.api.EventListener"];
})(ProductBox || (ProductBox = {}));
class FormPanel extends ui.Grid {
    constructor(name) {
        super(name);
        this.legend = new JSContainer("legend", "h3");
        this.form = new Form("form");
        const c = new ui.Col("c");
        c.setWidth(ui.Size.SMALL, 12);
        this.addCol(c);
        c.addChild(this.legend);
        c.addChild(this.form);
    }
    getForm() {
        return this.form;
    }
    setLegend(le) {
        this.legend.setHtml(le);
    }
}
FormPanel["__class"] = "com.archnet.ui.front.FormPanel";
FormPanel["__interfaces"] = ["framework.components.api.Renderable"];
class Header extends ui.Grid {
    constructor(name) {
        super(name);
        this.col = new ui.Col("col");
        this.mainMenu = new JSContainer("div");
        this.menuLeft = new JSContainer("menu-left", "div");
        this.menuRight = new JSContainer("menu-right", "div");
        this.logo = new JSContainer("logo", "img");
        this.menu = new MainMenu("mainMenu");
        this.iconMenu = new ui.List("iconMenu", "ul");
        this.col.setWidth(ui.Size.SMALL, 12);
        this.addCol(this.col);
        this.mainMenu.addClass("main-menu");
        this.col.addChild(this.mainMenu);
        this.mainMenu.addChild(this.menuLeft).addChild(this.menuRight);
        this.menuLeft.addClass("menu-left");
        this.menuRight.addClass("menu-right pull-right");
        const brandLogo = new JSContainer("div").addClass("brand-logo");
        const logoLink = new JSContainer("home", "a").setAttribute("href", "javascript:void(0);");
        this.menuLeft.addChild(brandLogo.addChild(logoLink));
        this.logo.addClass("img-fluid blur-up lazyloaded");
        logoLink.addChild(this.logo);
        logoLink.addEventListener(new Header.Header$0(this), "click");
        this.menuRight.addChild(new JSContainer("div").addChild(new JSContainer("nav").addChild(this.menu)));
        this.menuRight.addChild(new JSContainer("div").addChild(new JSContainer("div").addClass("icon-nav").addChild(this.iconMenu)));
        const icons = ["search", "setting", "cart"];
        const names = ["Search", "Setting", "Cart"];
        let index = 0;
        for (let index149 = 0; index149 < icons.length; index149++) {
            let icon = icons[index149];
            {
                const img = new JSContainer(icon, "img").setAttribute("src", "https://themes.pixelstrap.com/multikart/assets/images/icon/" + icon + ".png");
                this.iconMenu.addItem(img);
                img.getParent().addClass("onhover-div mobile-search");
                img.setAttribute("title", names[index]);
                img.addEventListener(new Header.Header$1(this), "click");
                index++;
            }
        }
        this.menu.addEventListener(new Header.Header$2(this), "OnChangePage");
    }
    setLogo(logo) {
        this.logo.setAttribute("src", logo);
    }
    addMenu$java_lang_String$java_lang_String$java_lang_String(name, label, tag) {
        this.menu.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
        return this;
    }
    addMenu(name, label, tag) {
        if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof tag === 'string') || tag === null)) {
            return this.addMenu$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
        }
        else if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && tag === undefined) {
            return this.addMenu$java_lang_String$java_lang_String(name, label);
        }
        else
            throw new Error('invalid overload');
    }
    setMenu(menu) {
        this.menu.clearChildren();
        this.menu.setRendered(false);
        for (let index150 = 0; index150 < menu.length; index150++) {
            let o = menu[index150];
            {
                const name = o["name"];
                const label = o["label"];
                let tag = null;
                if (o.hasOwnProperty("tag")) {
                    tag = o["tag"];
                }
                this.addMenu$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
            }
        }
    }
    addMenu$java_lang_String$java_lang_String(name, label) {
        this.menu.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, null);
        return this;
    }
}
Header.Event_OnChangePage = "OnChangePage";
Header["__class"] = "com.archnet.ui.front.Header";
Header["__interfaces"] = ["framework.components.api.Renderable"];
(function (Header) {
    class Header$0 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = "home";
            evt["label"] = "Home";
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    Header.Header$0 = Header$0;
    Header$0["__interfaces"] = ["framework.components.api.EventListener"];
    class Header$1 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["pageName"] = source.getName();
            evt["label"] = source.getAttribute("title");
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    Header.Header$1 = Header$1;
    Header$1["__interfaces"] = ["framework.components.api.EventListener"];
    class Header$2 {
        constructor(__parent) {
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    Header.Header$2 = Header$2;
    Header$2["__interfaces"] = ["framework.components.api.EventListener"];
})(Header || (Header = {}));
class MainMenu extends ui.List {
    constructor(name) {
        super(name, "ul");
        this.addClass("sm pixelstrap sm-horizontal");
    }
    addItem$java_lang_String$java_lang_String$java_lang_String(name, label, tag) {
        const item = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
        this.addItem(item);
        if (tag != null && tag !== "") {
            const utag = new JSContainer("div").addClass("lable-nav").setHtml(tag);
            item.getParent().addChild(utag);
        }
        item.addEventListener(new MainMenu.MainMenu$0(this, label, name), "click");
        return this;
    }
    addItem(name, label, tag) {
        if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof tag === 'string') || tag === null)) {
            return this.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
        }
        else if (((name != null && name instanceof JSContainer) || name === null) && label === undefined && tag === undefined) {
            return super.addItem(name);
        }
        else
            throw new Error('invalid overload');
    }
}
MainMenu["__class"] = "com.archnet.ui.front.MainMenu";
MainMenu["__interfaces"] = ["framework.components.api.Renderable"];
(function (MainMenu) {
    class MainMenu$0 {
        constructor(__parent, label, name) {
            this.label = label;
            this.name = name;
            this.__parent = __parent;
        }
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source, evt) {
            evt["label"] = this.label;
            evt["pageName"] = this.name;
            this.__parent.fireListener("OnChangePage", evt);
        }
    }
    MainMenu.MainMenu$0 = MainMenu$0;
    MainMenu$0["__interfaces"] = ["framework.components.api.EventListener"];
})(MainMenu || (MainMenu = {}));
ui.back.Header.CHANGE_PAGE_$LI$();
Boot.main(null);
