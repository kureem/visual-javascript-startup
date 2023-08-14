/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
abstract class AbstractLocalStorageProductList implements IProductList {
    public abstract getDbKey(): string;

    public setProduct(product: Object) {
        const prds: Array<Object> = this.getProducts_();
        const name: string = <string>product["name"];
        let added: boolean = false;
        const clo: Array<Object> = <any>(new Array<Object>());
        for(let index121=0; index121 < prds.length; index121++) {
            let p = prds[index121];
            {
                const pname: string = <string>p["name"];
                if (pname === name){
                    clo.push(product);
                    added = true;
                } else {
                    clo.push(p);
                }
            }
        }
        if (!added){
            clo.push(product);
        }
        localStorage.setItem(this.getDbKey(), JSON.stringify(clo));
    }

    /*private*/ toPromise(result: Array<Object>): Promise<Array<Object>> {
        const tmp: Array<Object> = <any>(new Array<Object>());
        for(let index122=0; index122 < tmp.length; index122++) {
            let o = tmp[index122];
            {
                result.push(o);
            }
        }
        const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
            (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
        };
        return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
    }

    public getProducts(): Promise<Array<Object>> {
        return this.toPromise(this.getProducts_());
    }

    /*private*/ getProducts_(): Array<Object> {
        const js: string = <string>localStorage.getItem(this.getDbKey());
        let result: Array<Object> = <any>(new Array<Object>());
        if (js != null){
            result = <Array<Object>>JSON.parse(js);
        }
        return result;
    }

    public deleteProduct(name: string) {
        const prds: Array<Object> = this.getProducts_();
        const clo: Array<Object> = <any>(new Array<Object>());
        for(let index123=0; index123 < prds.length; index123++) {
            let p = prds[index123];
            {
                const pname: string = <string>p["name"];
                if (pname !== name){
                    clo.push(p);
                }
            }
        }
        localStorage.setItem(this.getDbKey(), JSON.stringify(clo));
    }

    public getProduct(name: string): Promise<Object> {
        const buc: (p1: (p1: Object) => void, p2: (p1: Object) => void) => void = (t: (p1: Object) => void, u: (p1: Object) => void) => {
            const prds: Array<Object> = this.getProducts_();
            for(let index124=0; index124 < prds.length; index124++) {
                let p = prds[index124];
                {
                    const pname: string = <string>p["name"];
                    if (pname === name){
                        (target => (typeof target === 'function') ? target(p) : (<any>target).accept(p))(t);
                    }
                }
            }
        };
        return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(buc))));
    }

    constructor() {
    }
}
AbstractLocalStorageProductList["__class"] = "com.archnet.AbstractLocalStorageProductList";
AbstractLocalStorageProductList["__interfaces"] = ["com.archnet.IProductList"];



interface ICart extends IProductList {}

interface IProductList {
    setProduct(product: Object);

    getProducts(): Promise<Array<Object>>;

    deleteProduct(name: string);

    getProduct(name: string): Promise<Object>;
}

interface IWishsList extends IProductList {}

namespace ui.back {
    export class Body extends JSContainer {
        /*private*/ sideMenu: ui.back.SideMenu;

        public constructor(name: string) {
            super(name, "div");
            this.sideMenu = new ui.back.SideMenu("sideMenu");
            this.addClass("page-body-wrapper");
            this.addClass("Body");
            this.addChild(this.sideMenu);
        }
    }
    Body["__class"] = "com.archnet.ui.back.Body";
    Body["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace ui.back {
    export class Header extends JSContainer {
        /*private*/ logoLink: JSContainer;

        /*private*/ slideButton: HTMLTemplateContainer;

        /*private*/ logo: JSContainer;

        /*private*/ nav: ui.List;

        /*private*/ searchLayout: HTMLTemplateContainer;

        /*private*/ search: input.JSTextInput;

        /*private*/ fullscreen: JSContainer;

        /*private*/ currentLanguageLink: JSContainer;

        /*private*/ currentLanguage: JSContainer;

        /*private*/ languages: ui.List;

        /*private*/ notif: JSContainer;

        /*private*/ numnotifs: JSContainer;

        /*private*/ notifications: ui.List;

        /*private*/ settingMenu: JSContainer;

        /*private*/ myImage: JSContainer;

        /*private*/ dotanim: JSContainer;

        /*private*/ editprofile: JSContainer;

        /*private*/ inbox: JSContainer;

        /*private*/ lockscreen: JSContainer;

        /*private*/ settings: JSContainer;

        /*private*/ logout: JSContainer;

        static CHANGE_PAGE: api.EventListener; public static CHANGE_PAGE_$LI$(): api.EventListener { if (Header.CHANGE_PAGE == null) { Header.CHANGE_PAGE = new Header.Header$0(this); }  return Header.CHANGE_PAGE; }

        public constructor(name: string) {
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
            const row: JSContainer = new JSContainer("div").addClass("main-header-right row");
            this.addChild(row);
            const left: JSContainer = new JSContainer("div").addClass("main-header-left d-lg-none w-auto");
            row.addChild(left);
            const logoWrapper: JSContainer = new JSContainer("div").addClass("logo-wrapper");
            left.addChild(logoWrapper);
            logoWrapper.addChild(this.logoLink.addChild(this.logo));
            this.logoLink.setAttribute("href", "javascript:void(0);");
            this.logo.addClass("blur-up lazyloaded d-block d-lg-none");
            this.logoLink.addEventListener(new Header.Header$1(this), "click");
            row.addChild(this.slideButton);
            this.slideButton.addEventListener(new Header.Header$2(this), "click");
            const right: JSContainer = new JSContainer("div").addClass("nav-right col");
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
            const settingM: ui.List = new ui.List("setting", "ul");
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

        public setNotifications(notifs: Array<Object>) {
            this.setNumNotifs(notifs.length);
            this.notifications.clearChildren();
            this.notifications.setRendered(false);
            const label: JSContainer = new JSContainer("span").setHtml("Notifications");
            const num: JSContainer = new JSContainer("span").addClass("badge badge-pill badge-primary pull-right");
            num.setHtml(notifs.length + "");
            this.notifications.addItem(label);
            label.getParent().addChild(num);
            for(let index125=0; index125 < notifs.length; index125++) {
                let o = notifs[index125];
                {
                    const type: string = <string>o["type"];
                    const title: string = <string>o["title"];
                    const text: string = <string>o["text"];
                    const notifId: string = <string>o["id"];
                    const media: JSContainer = new JSContainer("div").addClass("media");
                    media.setAttribute("data-id", notifId);
                    const body: JSContainer = new JSContainer("div").addClass("media-body");
                    media.addChild(body);
                    const uiTitle: JSContainer = new JSContainer("h6").addClass("m-0").addClass("txt-" + type);
                    uiTitle.setHtml(title);
                    body.addChild(uiTitle);
                    const uiText: JSContainer = new JSContainer("p").addClass("m-0").setHtml(text);
                    body.addChild(uiText);
                    this.notifications.addItem(media);
                    media.addEventListener(new Header.Header$5(this), "click");
                }
            }
            const all: JSContainer = new JSContainer("a").setAttribute("href", "javascript:void(0);").setHtml("All");
            this.notifications.addItem(all);
            all.getParent().addChild(new JSContainer("span").setHtml("Notification"));
            all.getParent().addEventListener(new Header.Header$6(this), "click");
        }

        public setNumNotifs(num: number) {
            this.numnotifs.setHtml(num + "");
        }

        public addLanguage(lang: string, abbr: string, flag: string) {
            const l: string = "<i class=\"flag-icon flag-icon-" + flag + "\"></i>" + lang + "</a>";
            const link: JSContainer = new JSContainer(lang, "a").setAttribute("href", "javascript:void(0);");
            link.setAttribute("data-lng", abbr);
            link.setHtml(l);
            this.languages.addItem(link);
            link.addEventListener(new Header.Header$7(this, lang, abbr, flag), "click");
        }

        public setCurrentLanguage(lang: string) {
            this.currentLanguage.setHtml(lang);
        }

        public setLogo(src: string) {
            this.logo.setAttribute("src", src);
        }
    }
    Header["__class"] = "com.archnet.ui.back.Header";
    Header["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Header {

        export class Header$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["pageName"] = source.getName();
                evt["label"] = source.getAttribute("data-label");
                const header: JSContainer = <any>(source.getAncestorWithClass<any>("Header"));
                header.fireListener("OnChangePage", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["pageName"] = "home";
                evt["label"] = "Home";
                this.__parent.fireListener("OnChangePage", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (this.__parent.hasClass("open")){
                    this.__parent.removeClass("open");
                } else {
                    this.__parent.addClass("open");
                }
                this.__parent.fireListener("OnToggle", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.fireListener("OnLockScreen", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.fireListener("OnLogOut", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$4["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$5 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const notifId: string = source.getAttribute("data-id");
                evt["recordId"] = notifId;
                this.__parent.fireListener("OnShowRecord", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$5["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$6 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["pageName"] = "notifications";
                evt["label"] = "Notifications";
                this.__parent.fireListener("OnChangePage", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Header$6["__interfaces"] = ["framework.components.api.EventListener"];



        export class Header$7 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["language"] = this.lang;
                evt["abbr"] = this.abbr;
                evt["flag"] = this.flag;
                this.__parent.fireListener("OnChangeLanguage", evt);
                this.__parent.setCurrentLanguage(this.abbr);
            }

            constructor(__parent: any, private lang: any, private abbr: any, private flag: any) {
                this.__parent = __parent;
            }
        }
        Header$7["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace ui.back {
    export class Portal extends JSContainer {
        /*private*/ header: ui.back.Header;

        /*private*/ body: ui.back.Body;

        public constructor(name: string) {
            super(name, "div");
            this.header = new ui.back.Header("header");
            this.body = new ui.back.Body("body");
            this.addClass("page-wrapper");
            this.addClass("Portal");
            this.addChild(this.header);
            this.addChild(this.body);
        }
    }
    Portal["__class"] = "com.archnet.ui.back.Portal";
    Portal["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace ui.back {
    export class SideMenu extends JSContainer {
        /*private*/ logoLink: JSContainer;

        /*private*/ logo: JSContainer;

        /*private*/ user: JSContainer;

        /*private*/ username: JSContainer;

        /*private*/ userrole: JSContainer;

        /*private*/ menu: ui.List;

        public constructor(name: string) {
            super(name, "div");
            this.logoLink = new JSContainer("logo-link", "a");
            this.logo = new JSContainer("logo", "img");
            this.user = new JSContainer("user", "img");
            this.username = new JSContainer("username", "h6");
            this.userrole = new JSContainer("userrole", "p");
            this.menu = new ui.List("menu", "ul");
            this.addClass("page-sidebar");
            this.addClass("SideMenu");
            const top: JSContainer = new JSContainer("div").addClass("main-header-left d-none d-lg-block");
            top.addChild(new JSContainer("div").addClass("logo-wrapper").addChild(this.logoLink.addChild(this.logo)));
            this.logoLink.setAttribute("href", "javascript:void(0);");
            this.logo.setAttribute("src", "https://themes.pixelstrap.com/multikart/back-end/assets/images/dashboard/multikart-logo.png");
            this.addChild(top);
            const scroll: JSContainer = new JSContainer("div").addClass("sidebar custom-scrollbar");
            this.addChild(scroll);
            const mob: JSContainer = new JSContainer("mob", "a").addClass("sidebar-back d-lg-none d-block").setAttribute("href", "javascript:void(0);");
            mob.setHtml("<i class=\"fa fa-times\" aria-hidden=\"true\"></i>");
            scroll.addChild(mob);
            const userw: JSContainer = new JSContainer("div").addClass("sidebar-user");
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

        public setMenu(nav: Array<Object>) {
            for(let index126=0; index126 < nav.length; index126++) {
                let o = nav[index126];
                {
                    const menuitem: JSContainer = this.addMenu$jsweet_lang_Object$com_archnet_ui_List(o, this.menu);
                    const children: Array<Object> = <Array<Object>>nav["children"];
                    if (children != null && children.length > 0){
                        const pullright: JSContainer = new JSContainer("i").addClass("fa fa-angle-right pull-right");
                        menuitem.addChild(pullright);
                        const menul2: ui.List = new ui.List("level2", "ul");
                        menul2.addClass("sidebar-submenu");
                        menuitem.getParent().addChild(menul2);
                        for(let index127=0; index127 < children.length; index127++) {
                            let child = children[index127];
                            {
                                const menuiteml2: JSContainer = this.addMenu$jsweet_lang_Object$com_archnet_ui_List(child, menul2);
                                const childrenl2: Array<Object> = <Array<Object>>child["children"];
                                if (childrenl2 != null && childrenl2.length > 0){
                                    const pullrightl2: JSContainer = new JSContainer("i").addClass("fa fa-angle-right pull-right");
                                    menuiteml2.addChild(pullrightl2);
                                    const menul3: ui.List = new ui.List("level3", "ul");
                                    menul3.addClass("sidebar-submenu");
                                    menuiteml2.getParent().addChild(menul2);
                                    for(let index128=0; index128 < childrenl2.length; index128++) {
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

        public addMenu$jsweet_lang_Object$com_archnet_ui_List(o: Object, men: ui.List): JSContainer {
            const name: string = <string>o["name"];
            const icon: string = <string>o["icon"];
            const label: string = <string>o["label"];
            return this.addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name, label, icon, men);
        }

        public addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name: string, label: string, icon: string, men: ui.List): JSContainer {
            const a: JSContainer = new JSContainer(name, "a");
            const uiicon: JSContainer = new JSContainer("i").setAttribute("data-feather", icon);
            const uilabel: JSContainer = new JSContainer("span").setHtml(label);
            a.addChild(uiicon).addChild(uilabel);
            a.setAttribute("href", "javascript:void(0);");
            a.addEventListener(new SideMenu.SideMenu$0(this, name, label), "click");
            men.addItem(a);
            return a;
        }

        public addMenu(name?: any, label?: any, icon?: any, men?: any): any {
            if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof icon === 'string') || icon === null) && ((men != null && men instanceof <any>ui.List) || men === null)) {
                return <any>this.addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name, label, icon, men);
            } else if (((name != null && name instanceof <any>Object) || name === null) && ((label != null && label instanceof <any>ui.List) || label === null) && icon === undefined && men === undefined) {
                return <any>this.addMenu$jsweet_lang_Object$com_archnet_ui_List(name, label);
            } else throw new Error('invalid overload');
        }

        public setLogo(lo: string) {
            this.logo.setAttribute("src", lo);
        }

        public setUserName(name: string) {
            this.username.setHtml(name);
        }

        public setUserRole(rol: string) {
            this.userrole.setHtml(rol);
        }

        public setUserAvatar(ava: string) {
            this.user.setAttribute("src", ava);
        }
    }
    SideMenu["__class"] = "com.archnet.ui.back.SideMenu";
    SideMenu["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace SideMenu {

        export class SideMenu$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["pageName"] = this.name;
                evt["label"] = this.label;
                this.__parent.fireListener("OnChangePage", evt);
            }

            constructor(__parent: any, private name: any, private label: any) {
                this.__parent = __parent;
            }
        }
        SideMenu$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace ui {
    export class Col extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
        }

        public clearSizes() {
            for(let i: number = 1; i <= 12; i++) {{
                {
                    let array130 = /* Enum.values */function() { let result: ui.Size[] = []; for(let val in ui.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                    for(let index129=0; index129 < array130.length; index129++) {
                        let size = array130[index129];
                        {
                            let cls: string = "col-" + ui.Size["_$wrappers"][size].getValue() + "-" + i;
                            if (size === ui.Size.NONE){
                                cls = "col-" + i;
                            }
                            this.removeClass(cls);
                        }
                    }
                }
            };}
        }

        public setWidth(size: ui.Size, width: number): Col {
            for(let i: number = 1; i <= 12; i++) {{
                let cls: string = "col-" + ui.Size["_$wrappers"][size].getValue() + "-" + i;
                if (size === ui.Size.NONE){
                    cls = "col-" + i;
                }
                this.removeClass(cls);
            };}
            let cls: string = "col-" + ui.Size["_$wrappers"][size].getValue() + "-" + width;
            if (size === ui.Size.NONE){
                cls = "col-" + width;
            }
            this.addClass(cls);
            return this;
        }
    }
    Col["__class"] = "com.archnet.ui.Col";
    Col["__interfaces"] = ["framework.components.api.Renderable"];


}
class Boot {
    public static renderBack() {
        const po: ui.back.Portal = new ui.back.Portal("po");
        po.render();
    }

    public static main(args: string[]) {
        Boot.renderFront();
    }

    public static renderFront() {
        const portal: Portal = new Portal("portal");
        const set: Setting = new Setting();
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
        const menu: Array<Object> = <any>(new Array<Object>());
        Boot.addMenu("home", "Home", null, menu);
        Boot.addMenu("featured", "Featured", null, menu);
        Boot.addMenu("newarrivals", "New Arrivals", "new", menu);
        Boot.addMenu("mens", "Men", null, menu);
        Boot.addMenu("women", "Women", null, menu);
        Boot.addMenu("clothings", "Clothings", null, menu);
        Boot.addMenu("accessories", "Accessories", "50% Off", menu);
        set.menu = menu;
        const categories: Array<Object> = <any>(new Array<Object>());
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

    public static addMenu(name: string, label: string, tag: string, menu: Array<Object>) {
        const obj: Object = <Object>new Object();
        obj["name"] = name;
        obj["label"] = label;
        obj["tag"] = tag;
        menu.push(obj);
    }
}
Boot["__class"] = "com.archnet.ui.front.Boot";


class Breadcrumb extends JSContainer {
    /*private*/ items: ui.List;

    public static Event_OnChangePage: string = "OnChangePage";

    public constructor(name: string) {
        super(name, "nav");
        this.items = new ui.List("breadcrumb", "ol");
        this.addClass("theme-breadcrumb");
        this.setAttribute("aria-label", "breadcrumb");
        this.addChild(this.items);
        this.items.addClass("breadcrumb");
    }

    public addItem(name: string, label: string): Breadcrumb {
        const link: JSContainer = new JSContainer(name, "a").setHtml(label);
        this.items.addItem(link).addClass("breadcrumb-item").setName(name);
        link.addEventListener(new Breadcrumb.Breadcrumb$0(this), "click");
        if (this.items.getChildren().length === 1){
            this.activate(name);
        }
        return this;
    }

    public setBreadcrumbs(items: Array<Object>) {
        this.items.clearChildren();
        this.items.setRendered(false);
        for(let index131=0; index131 < items.length; index131++) {
            let o = items[index131];
            {
                const name: string = <string>o["name"];
                const label: string = <string>o["label"];
                this.addItem(name, label);
            }
        }
    }

    public activate(name: string) {
        {
            let array133 = this.items.getChildren();
            for(let index132=0; index132 < array133.length; index132++) {
                let item = array133[index132];
                {
                    item.removeClass("active").setAttribute("aria-current", null);
                }
            }
        }
        this.items.getChild(name).addClass("active").setAttribute("aria-current", "page");
    }
}
Breadcrumb["__class"] = "com.archnet.ui.front.Breadcrumb";
Breadcrumb["__interfaces"] = ["framework.components.api.Renderable"];



namespace Breadcrumb {

    export class Breadcrumb$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.activate(source.getName());
            evt["item"] = source.getName();
            evt["label"] = source.getHtml();
            evt["pageName"] = source.getName();
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Breadcrumb$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class BreadCrumbSection extends JSContainer {
    /*private*/ left: ui.Col;

    /*private*/ right: ui.Col;

    /*private*/ grid: ui.Grid;

    /*private*/ title: JSContainer;

    /*private*/ breadcrumb: Breadcrumb;

    public static Event_OnChangePage: string = "OnChangePage";

    public constructor(name: string) {
        super(name, "div");
        this.left = new ui.Col("left").setWidth(ui.Size.SMALL, 6);
        this.right = new ui.Col("right").setWidth(ui.Size.SMALL, 6);
        this.grid = new ui.Grid("container");
        this.title = new JSContainer("title", "h2");
        this.breadcrumb = new Breadcrumb("breadcrumb");
        this.addClass("breadcrumb-section");
        this.addChild(this.grid);
        this.grid.addCol(this.left).addCol(this.right);
        const pageTitle: JSContainer = new JSContainer("div").addClass("page-title");
        this.left.addChild(pageTitle);
        pageTitle.addChild(this.title);
        this.right.addChild(this.breadcrumb);
        this.breadcrumb.addEventListener(new BreadCrumbSection.BreadCrumbSection$0(this), Breadcrumb.Event_OnChangePage);
        this.setPageTitle("Home");
    }

    public setPageTitle(txt: string): BreadCrumbSection {
        this.title.setHtml(txt);
        return this;
    }

    public getBreadcrumb(): Breadcrumb {
        return this.breadcrumb;
    }
}
BreadCrumbSection["__class"] = "com.archnet.ui.front.BreadCrumbSection";
BreadCrumbSection["__interfaces"] = ["framework.components.api.Renderable"];



namespace BreadCrumbSection {

    export class BreadCrumbSection$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener(BreadCrumbSection.Event_OnChangePage, evt);
            const label: string = <string>evt["label"];
            this.__parent.setPageTitle(label);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    BreadCrumbSection$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class Catalogue extends JSContainer {
    /*private*/ filter: ProductTopFilter;

    /*private*/ view: ProductListView;

    /*private*/ paginator: ProductPaginator;

    public constructor(name: string) {
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

    /*private*/ fireListenerOnPage(name: string, evt: Event) {
        const p: Page = <any>(this.getAncestorWithClass<any>("Page"));
        if (p != null){
            p.fireListener(name, evt);
        }
    }

    public setTotal(total: number) {
        this.paginator.setValue$int(total);
    }

    public setProducts(products: Array<Object>) {
        this.view.setProducts(products);
    }

    public start() {
        this.paginator.start();
    }
}
Catalogue["__class"] = "com.archnet.ui.front.Catalogue";
Catalogue["__interfaces"] = ["framework.components.api.Renderable"];



namespace Catalogue {

    export class Catalogue$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const size: number = <number>evt["pageSize"];
            this.__parent.paginator.setPageSize(size);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const sview: string = <string>evt["viewtype"];
            this.__parent.view.setView(sview);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const size: number = <number>evt["size"];
            this.__parent.view.setRowSize(size);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const start: number = <number>evt["start"];
            const end: number = <number>evt["end"];
            const total: number = <number>evt["total"];
            this.__parent.filter.setCount(start, end, total);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$3["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$4 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$4["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$5 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnAddWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$5["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$6 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$6["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$7 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$7["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$8 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$8["__interfaces"] = ["framework.components.api.EventListener"];



    export class Catalogue$9 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnAddWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Catalogue$9["__interfaces"] = ["framework.components.api.EventListener"];


}


class Footer extends JSContainer {
    /*private*/ email: input.JSInput<string>;

    /*private*/ logo: JSContainer;

    /*private*/ description: JSContainer;

    /*private*/ categories: ui.List;

    /*private*/ address: JSContainer;

    /*private*/ phone: JSContainer;

    /*private*/ storeemail: JSContainer;

    /*private*/ fax: JSContainer;

    /*private*/ facebook: JSContainer;

    /*private*/ googleplus: JSContainer;

    /*private*/ twitter: JSContainer;

    /*private*/ instagram: JSContainer;

    /*private*/ rss: JSContainer;

    /*private*/ socials: ui.List;

    public constructor(name: string) {
        super(name, "footer");
        this.email = <any>(new input.JSInput<string>("email"));
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
        const lightLayout: JSContainer = new JSContainer("div").addClass("light-layout");
        this.addChild(lightLayout);
        const ctn: JSContainer = new JSContainer("div").addClass("container");
        lightLayout.addChild(ctn);
        const section: JSContainer = new JSContainer("section").addClass("small-section border-section border-top-0");
        ctn.addChild(section);
        const row: JSContainer = new JSContainer("div").addClass("row");
        section.addChild(row);
        const left: JSContainer = new JSContainer("left", "div").addClass("col-lg-6");
        row.addChild(left);
        const right: JSContainer = new JSContainer("right", "div").addClass("col-lg-6");
        row.addChild(right);
        const subscribe: JSContainer = new JSContainer("div").addClass("subscribe");
        left.addChild(subscribe);
        const c: JSContainer = new JSContainer("div");
        subscribe.addChild(c);
        const know: JSContainer = new JSContainer("h4").setHtml("KNOW IT ALL FIRST!");
        c.addChild(know);
        const subscribeMsg: JSContainer = new JSContainer("p");
        c.addChild(subscribeMsg);
        subscribeMsg.setHtml("Never Miss Anything From Us By Signing Up To Our Newsletter.");
        const frm: JSContainer = new JSContainer("div").addClass("form-inline subscribe-form auth-form needs-validation");
        const ifrm: JSContainer = new JSContainer("div").addClass("form-group mx-sm-3");
        frm.addChild(ifrm);
        right.addChild(frm);
        this.email.addClass("form-control");
        this.email.setPlaceHolder("Enter your email");
        this.email.setRequired(true);
        this.email.setStyle("float", "left");
        ifrm.addChild(this.email);
        const btnSubscribe: JSContainer = new JSContainer("subscribe", "button").addClass("btn btn-solid").setHtml("Subscribe");
        ifrm.addChild(btnSubscribe);
        btnSubscribe.addEventListener(new Footer.Footer$0(this), "click");
        const sectionb: JSContainer = new JSContainer("section").addClass("section-b-space light-layout");
        this.addChild(sectionb);
        const gr: ui.Grid = new ui.Grid("gr");
        sectionb.addChild(gr);
        gr.getRow().addClass("footer-theme partition-f");
        const col1: ui.Col = new ui.Col("1");
        col1.setWidth(ui.Size.LARGE, 4).setWidth(ui.Size.MEDIUM, 6);
        const col2: ui.Col = new ui.Col("2");
        col2.setWidth(ui.Size.LARGE, 4).setWidth(ui.Size.MEDIUM, 6);
        col2.addClass("offset-xl-1");
        const col3: ui.Col = new ui.Col("3");
        col3.addClass("col");
        gr.addCol(col1).addCol(col2).addCol(col3);
        const footerContent: JSContainer = new JSContainer("div").addClass("footer-contant");
        const footerlogo: JSContainer = new JSContainer("div").addClass("footer-logo");
        footerContent.addChild(footerlogo);
        footerlogo.addChild(this.logo);
        footerContent.addChild(this.description);
        const footersocial: JSContainer = new JSContainer("div").addClass("footer-social");
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

    /*private*/ setCol2(col2: ui.Col) {
        const subtitle: JSContainer = new JSContainer("div").addClass("sub-title");
        const footertitle: JSContainer = new JSContainer("div").addClass("footer-title");
        footertitle.addChild(new JSContainer("h4").setHtml("Categories"));
        subtitle.addChild(footertitle);
        col2.addChild(subtitle);
        const content: JSContainer = new JSContainer("div").addClass("footer-contant");
        subtitle.addChild(content);
        content.addChild(this.categories);
    }

    /*private*/ setCol3(col3: ui.Col) {
        const subtitle: JSContainer = new JSContainer("div").addClass("sub-title");
        const footertitle: JSContainer = new JSContainer("div").addClass("footer-title");
        footertitle.addChild(new JSContainer("h4").setHtml("Store Information"));
        subtitle.addChild(footertitle);
        col3.addChild(subtitle);
        const content: JSContainer = new JSContainer("div").addClass("footer-contant");
        subtitle.addChild(content);
        const info: ui.List = new ui.List("info", "ul");
        content.addChild(info);
        const iconadd: JSContainer = new JSContainer("i").addClass("fa fa-map-marker");
        info.addItem(iconadd);
        iconadd.getParent().addChild(this.address);
        const iconphone: JSContainer = new JSContainer("i").addClass("fa fa-phone");
        info.addItem(iconphone);
        iconphone.getParent().addChild(this.phone);
        const iconemail: JSContainer = new JSContainer("i").addClass("fa fa-envelope");
        info.addItem(iconemail);
        iconemail.getParent().addChild(new JSContainer("span").setHtml("Email Us: "));
        iconemail.getParent().addChild(this.storeemail);
        const iconfax: JSContainer = new JSContainer("i").addClass("fa fa-fax");
        info.addItem(iconfax);
        iconfax.getParent().addChild(this.fax);
    }

    public setFacebook(fb: string) {
        this.facebook.setAttribute("href", fb);
    }

    public setTwitter(tw: string) {
        this.twitter.setAttribute("href", tw);
    }

    public setGooglePlus(gp: string) {
        this.googleplus.setAttribute("href", gp);
    }

    public setInstagram(ins: string) {
        this.instagram.setAttribute("href", ins);
    }

    public setRss(rs: string) {
        this.rss.setAttribute("href", rs);
    }

    public setAddress(addr: string) {
        this.address.setHtml(addr);
    }

    public setPhone(phone: string) {
        this.phone.setHtml("Call Us: " + phone);
    }

    public setEmail(em: string) {
        this.storeemail.setHtml(em).setAttribute("href", "mailto:" + em);
    }

    public setFax(fx: string) {
        this.fax.setHtml(fx);
    }

    public setLogo(lo: string) {
        this.logo.setAttribute("src", lo);
    }

    public setDescription(desc: string) {
        this.description.setHtml(desc);
    }

    public setCategories(cats: Array<Object>) {
        this.categories.clearChildren();
        this.setRendered(false);
        for(let index134=0; index134 < cats.length; index134++) {
            let o = cats[index134];
            {
                const name: string = <string>o["name"];
                const label: string = <string>o["label"];
                const link: JSContainer = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
                this.categories.addItem(link);
                link.addEventListener(new Footer.Footer$1(this), "click");
            }
        }
    }

    public setSetting(set: Setting) {
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



namespace Footer {

    export class Footer$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const semail: string = this.__parent.email.getValue();
            if (semail != null && semail !== ""){
                evt["email"] = semail;
                this.__parent.fireListener("OnSubscribe", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Footer$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Footer$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["label"] = source.getHtml();
            evt["pageName"] = source.getName();
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Footer$1["__interfaces"] = ["framework.components.api.EventListener"];


}


class Form extends JSContainer {
    /*private*/ body: JSContainer;

    /*private*/ fields: Object;

    public constructor(name: string) {
        super(name, "form");
        this.body = new JSContainer("body", "div");
        this.fields = <Object>new Object();
        this.addClass("theme-form");
        this.addChild(this.body);
        this.body.addClass("form-row row");
    }

    public clear() {
        this.body.clearChildren();
        this.body.setRendered(false);
        this.fields = <Object>new Object();
    }

    public validate() {
        {
            let array136 = Object.keys(this.fields);
            for(let index135=0; index135 < array136.length; index135++) {
                let key = array136[index135];
                {
                    const field: api.InputField<any> = <api.InputField<any>><any>this.fields[key];
                    field.validate();
                }
            }
        }
    }

    public addField$java_lang_String$framework_components_api_InputField$boolean(label: string, field: api.InputField<any>, fullwidth: boolean) {
        const col: JSContainer = new JSContainer("div").addClass(fullwidth ? "col-md-12" : "col-md-6");
        const uilabel: JSContainer = new JSContainer("lab", "label");
        uilabel.setAttribute("for", field.getName());
        this.body.addChild(col);
        col.addChild(uilabel).addChild(field);
        this.fields[field.getName()] = field;
    }

    public addField(label?: any, field?: any, fullwidth?: any) {
        if (((typeof label === 'string') || label === null) && ((field != null && (field.constructor != null && field.constructor["__interfaces"] != null && field.constructor["__interfaces"].indexOf("framework.components.api.InputField") >= 0)) || field === null) && ((typeof fullwidth === 'boolean') || fullwidth === null)) {
            return <any>this.addField$java_lang_String$framework_components_api_InputField$boolean(label, field, fullwidth);
        } else if (((typeof label === 'string') || label === null) && ((field != null && (field.constructor != null && field.constructor["__interfaces"] != null && field.constructor["__interfaces"].indexOf("framework.components.api.InputField") >= 0)) || field === null) && fullwidth === undefined) {
            return <any>this.addField$java_lang_String$framework_components_api_InputField(label, field);
        } else throw new Error('invalid overload');
    }

    public addField$java_lang_String$framework_components_api_InputField(label: string, field: api.InputField<any>) {
        this.addField$java_lang_String$framework_components_api_InputField$boolean(label, field, false);
    }

    public setValue(vals: Object) {
        {
            let array138 = Object.keys(this.fields);
            for(let index137=0; index137 < array138.length; index137++) {
                let key = array138[index137];
                {
                    const field: api.InputField<any> = <api.InputField<any>><any>this.fields[key];
                    const val: any = vals[key];
                    field.setValue(val);
                }
            }
        }
    }

    public getValue(): Object {
        const result: Object = <Object>new Object();
        {
            let array140 = Object.keys(this.fields);
            for(let index139=0; index139 < array140.length; index139++) {
                let key = array140[index139];
                {
                    const field: api.InputField<any> = <api.InputField<any>><any>this.fields[key];
                    const val: any = field.getValue();
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
    public constructor(name: string) {
        super(name, "        <header>\r\n            <div class=\"top-header d-none d-sm-block\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                            <div class=\"header-contact\">\r\n                                <ul>\r\n                                    <li>Welcome to Our store Multikart</li>\r\n                                    <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>Call Us: 123 - 456 - 7890</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 text-end\">\r\n                            <ul class=\"header-dropdown\">\r\n                                <li class=\"mobile-wishlist\"><a href=\"#\"><i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"onhover-dropdown mobile-account\">\r\n                                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i> My Account\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"main-menu\">\r\n                            <div class=\"menu-left\">\r\n                                <div class=\"navbar\">\r\n                                    <a href=\"javascript:void(0)\">\r\n                                        <div class=\"bar-style\"><i class=\"fa fa-bars sidebar-bar\" aria-hidden=\"true\"></i>\r\n                                        </div>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"brand-logo\">\r\n                                    <a href=\"index.html\"><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"></a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"menu-right pull-right\">\r\n                                <div>\r\n                                    <nav class=\"\">\r\n                                        <div class=\"toggle-nav\"><i class=\"fa fa-bars sidebar-bar\"></i></div>\r\n                                        <ul class=\"sm pixelstrap sm-horizontal hover-unset\">\r\n                                            <li>\r\n                                                <div class=\"mobile-back text-end\">Back<i class=\"fa fa-angle-right ps-2\" aria-hidden=\"true\"></i></div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"index.html\">Home</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">feature<div class=\"lable-nav\">new</div></a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">shop</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">product</a>\r\n                                            </li>\r\n                                            <li>\r\n                                                <a href=\"#\">pages</a>\r\n                                            </li>\r\n                                            <li><a href=\"#\">blog</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </nav>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"icon-nav d-none d-sm-block\">\r\n                                        <ul>\r\n                                            <li class=\"onhover-div mobile-search\">\r\n                                                <div><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/search.png\" onclick=\"openSearch()\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"> <i class=\"ti-search\" onclick=\"openSearch()\"></i></div>\r\n                                            </li>\r\n                                            <li class=\"onhover-div mobile-setting\">\r\n                                                <div><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/setting.png\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"> <i class=\"ti-settings\"></i></div>\r\n                                            </li>\r\n                                            <li class=\"onhover-div mobile-cart\">\r\n                                                <div><img src=\"https://themes.pixelstrap.com/multikart/assets/images/icon/cart.png\" class=\"img-fluid blur-up lazyloaded\" alt=\"\"> <i class=\"ti-shopping-cart\"></i></div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <div class=\"breadcrumb-section\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"page-title\">\r\n                            <h2>collection</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <nav aria-label=\"breadcrumb\" class=\"theme-breadcrumb\">\r\n                            <ol class=\"breadcrumb\">\r\n                                <li class=\"breadcrumb-item\"><a href=\"index.html\">home</a></li>\r\n                                <li class=\"breadcrumb-item active\" aria-current=\"page\">collection</li>\r\n                            </ol>\r\n                        </nav>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <section class=\"section-b-space ratio_asos\">\r\n            <div class=\"collection-wrapper\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"collection-content col\">\r\n                            <div class=\"page-main-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"top-banner-wrapper\">\r\n                                            <div class=\"img-ldr-top\"></div>\r\n                                            <div class=\"top-banner-content small-section\">\r\n                                                <h4></h4>\r\n                                                <h5></h5>\r\n                                                <p></p>\r\n                                                <p></p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"collection-product-wrapper\">\r\n                                            <div class=\"product-top-filter\">\r\n                                                <div class=\"row m-0 w-100\">\r\n                                                    <div class=\"col-xl-4\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-4 col-lg-4 col-6\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-2 col-lg-4 col-6\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-2 col-lg-4 d-none d-lg-block\">\r\n                                                        <div class=\"filter-panel\">\r\n                                                            <h6 class=\"ldr-text\"></h6>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"product-wrapper-grid\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xl-3 col-md-6 col-grid-box\">\r\n                                                        <div class=\"product-box\">\r\n                                                            <div class=\"img-wrapper\"></div>\r\n                                                            <div class=\"product-detail\">\r\n                                                                <h4></h4>\r\n                                                                <h5></h5>\r\n                                                                <h6></h6>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n");
        this.addClass("loader_skeleton");
    }
}
LoaderSkeletor["__class"] = "com.archnet.ui.front.LoaderSkeletor";
LoaderSkeletor["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



class MainBanner extends JSContainer {
    /*private*/ title: JSContainer;

    /*private*/ description: JSContainer;

    /*private*/ img: JSContainer;

    public constructor(name: string) {
        super(name, "div");
        this.title = new JSContainer("title", "h4");
        this.description = new JSContainer("description", "p");
        this.img = new JSContainer("img", "img").addClass("img-fluid blur-up lazyloaded");
        this.addClass("top-banner-wrapper");
        const link: JSContainer = new JSContainer("link", "a").setAttribute("href", "javascript:void(0);");
        link.addEventListener(new MainBanner.MainBanner$0(this), "click");
        link.addChild(this.img);
        this.addChild(link);
        const content: JSContainer = new JSContainer("content", "div").addClass("top-banner-content small-section");
        this.addChild(content);
        content.addChild(this.title).addChild(this.description);
        this.setImg("https://themes.pixelstrap.com/multikart/assets/images/mega-menu/2.jpg");
        this.setTitle("BIGGEST DEALS ON TOP BRANDS");
        this.setDescription("The trick to choosing the best wear for yourself is to keep in mind your body type, individual style, occasion and also the time of day or weather. In addition to eye-catching products from top brands, we also offer an easy 30-day return and exchange policy, free and fast shipping across all pin codes, cash or card on delivery option, deals and discounts, among other perks. So, sign up now and shop for westarn wear to your heart\u2019s content on Multikart.");
        this.addEventListener(new MainBanner.MainBanner$1(this), "OnChangePage");
    }

    public setImg(img: string): MainBanner {
        this.img.setAttribute("src", img);
        return this;
    }

    public setTitle(title: string): MainBanner {
        this.title.setHtml(title);
        return this;
    }

    public setDescription(description: string): MainBanner {
        this.description.setHtml(description);
        return this;
    }
}
MainBanner["__class"] = "com.archnet.ui.front.MainBanner";
MainBanner["__interfaces"] = ["framework.components.api.Renderable"];



namespace MainBanner {

    export class MainBanner$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "product-detail/" + this.__parent.getName();
            evt["label"] = this.__parent.getName();
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    MainBanner$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class MainBanner$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnChangePage", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    MainBanner$1["__interfaces"] = ["framework.components.api.EventListener"];


}


class Page extends JSContainer {
    public static EVENT_OnChangePage: string = "OnChangePage";

    public static EVENT_OnAddWishList: string = "OnAddWishList";

    public static EVENT_OnAddCart: string = "OnAddCart";

    public static Event_OnRemoveWishList: string = "OnRemoveWishList";

    public static Event_OnLogin: string = "OnLogin";

    public constructor(name: string) {
        super(name, "section");
        this.addClass("Page");
        this.addClass("section-b-space ratio_asos");
        this.addEventListener(new Page.Page$0(this), Page.EVENT_OnChangePage);
        this.addEventListener(new Page.Page$1(this), Page.EVENT_OnAddCart);
        this.addEventListener(new Page.Page$2(this), Page.EVENT_OnAddWishList);
        this.addEventListener(new Page.Page$3(this), Page.Event_OnRemoveWishList);
        this.addEventListener(new Page.Page$4(this), Page.Event_OnLogin);
    }

    public setBody(ctn: JSContainer) {
        this.clearChildren();
        this.setRendered(false);
        if (ctn != null){
            this.addChild(ctn);
        }
    }
}
Page["__class"] = "com.archnet.ui.front.Page";
Page["__interfaces"] = ["framework.components.api.Renderable"];



namespace Page {

    export class Page$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Portal = <any>(source.getAncestorWithClass<any>("Portal"));
            if (p != null){
                p.fireChangePage(evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Page$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Page$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Portal = <any>(source.getAncestorWithClass<any>("Portal"));
            if (p != null){
                p.fireAddCart(evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Page$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class Page$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Portal = <any>(source.getAncestorWithClass<any>("Portal"));
            if (p != null){
                p.fireAddWishList(evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Page$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class Page$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Portal = <any>(source.getAncestorWithClass<any>("Portal"));
            if (p != null){
                p.fireRemoveWishList(evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Page$3["__interfaces"] = ["framework.components.api.EventListener"];



    export class Page$4 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Portal = <any>(source.getAncestorWithClass<any>("Portal"));
            if (p != null){
                p.fireLogin(evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Page$4["__interfaces"] = ["framework.components.api.EventListener"];


}


class ForgotPassword extends HTMLTemplateContainer {
    /*private*/ email: input.JSInput<string>;

    /*private*/ change: JSContainer;

    public constructor(name: string) {
        super(name, "<div class=\"pwd-page container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 m-auto\">\r\n                    <h2>Forget Your Password</h2>\r\n                    <form class=\"theme-form\">\r\n                        <div class=\"form-row row\">\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Enter Your Email\"\r\n                                    required=\"\">\r\n                            </div><a href=\"#\" class=\"btn btn-solid w-auto\" name=\"change\">Submit</a>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>");
        this.email = <any>(new input.JSInput<string>("email"));
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
ForgotPassword["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



namespace ForgotPassword {

    export class ForgotPassword$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const semail: string = this.__parent.email.getValue();
            if (semail != null && semail !== ""){
                evt["email"] = semail;
                this.__parent.fireListener("OnChangePassword", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ForgotPassword$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class Home extends JSContainer {
    /*private*/ top: JSContainer;

    /*private*/ body: JSContainer;

    public constructor(name: string) {
        super(name, "div");
        this.top = new JSContainer("top", "div");
        this.body = new JSContainer("body", "div");
        this.addClass("collection-wrapper");
        const pageGrid: ui.Grid = new ui.Grid("page-grid");
        this.addChild(pageGrid);
        const collectioncol: ui.Col = new ui.Col("collection-col");
        collectioncol.addClass("collection-content");
        pageGrid.addCol(collectioncol);
        const pageMainContent: ui.Grid = new ui.Grid("page-main-content");
        collectioncol.addChild(pageMainContent);
        pageMainContent.removeClass("container");
        pageMainContent.addClass("page-main-content");
        const pageContainer: ui.Col = new ui.Col("pageContainer");
        pageContainer.setWidth(ui.Size.SMALL, 12);
        pageMainContent.addCol(pageContainer);
        pageContainer.addChild(this.top);
        pageContainer.addChild(this.body);
        const topBanner: MainBanner = new MainBanner("top-banner-wrapper");
        const cat: Catalogue = new Catalogue("catalogue");
        const products: Array<Object> = <any>(new Array<Object>());
        for(let i: number = 1; i <= 37; i++) {{
            const pr: Object = <Object>new Object();
            pr["availability"] = "in stock";
            pr["name"] = "product-" + i;
            pr["title"] = "Candy red solid tshirt";
            pr["description"] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book";
            pr["price"] = "200MUR";
            pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/35.jpg";
            pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/36.jpg";
            if (i % 2 === 0){
                pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg";
                pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg";
            } else if (i % 3 === 0){
                pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/27.jpg";
                pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg";
            } else if (i % 5 === 0){
                pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg";
                pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/34.jpg";
            }
            products.push(pr);
        };}
        cat.setProducts(products);
        cat.setTotal(/* parseInt */parseInt(products.length + ""));
        this.setTop(topBanner);
        this.setBody(cat);
        cat.start();
    }

    public getTop(): JSContainer {
        return this.top;
    }

    public getBody(): JSContainer {
        return this.body;
    }

    public setTop(ctn: JSContainer) {
        this.top.clearChildren();
        this.top.setRendered(false);
        if (ctn != null){
            this.top.addChild(ctn);
        }
    }

    public setBody(ctn: JSContainer) {
        this.body.clearChildren();
        this.body.setRendered(false);
        if (ctn != null){
            this.body.addChild(ctn);
        }
    }
}
Home["__class"] = "com.archnet.ui.front.pages.Home";
Home["__interfaces"] = ["framework.components.api.Renderable"];



class Login extends HTMLTemplateContainer {
    /*private*/ email: input.JSInput<string>;

    /*private*/ password: input.JSInput<string>;

    /*private*/ login: JSContainer;

    /*private*/ register: JSContainer;

    /*private*/ forgot: JSContainer;

    public constructor(name: string) {
        super(name, "        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <h3>Login</h3>\r\n                    <div class=\"theme-card\">\r\n                        <form class=\"theme-form\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Email</label>\r\n                                <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" required=\"\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"review\">Password</label>\r\n                                <input type=\"password\" name=\"password\" class=\"form-control\" id=\"review\"\r\n                                    placeholder=\"Enter your password\" required=\"\">\r\n                            </div><a href=\"#\" class=\"btn btn-solid\" name=\"login\">Login</a><a name=\"forgot\"></a>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 right-login\">\r\n                    <h3>New Customer</h3>\r\n                    <div class=\"theme-card authentication-right\">\r\n                        <h6 class=\"title-font\">Create A Account</h6>\r\n                        <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be\r\n                            able to order from our shop. To start shopping click register.</p><a href=\"#\"\r\n                            class=\"btn btn-solid\" name=\"register\">Create an Account</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    ");
        this.email = <any>(new input.JSInput<string>("email"));
        this.password = <any>(new input.JSInput<string>("password"));
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
Login["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



namespace Login {

    export class Login$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            try {
                this.__parent.email.validate();
                this.__parent.password.validate();
                const semail: string = this.__parent.email.getValue();
                const spassword: string = this.__parent.password.getValue();
                const nati: HTMLInputElement = <HTMLInputElement>this.__parent.email.getNative();
                if (semail != null && semail !== "" && spassword != null && spassword !== ""){
                    evt["email"] = semail;
                    evt["password"] = spassword;
                    this.__parent.fireListener("OnLogin", evt);
                }
            } catch(e) {
                const nat: HTMLInputElement = <HTMLInputElement>this.__parent.email.getNative();
                const fn: Function = <Function>nat["reportValidity"];
                fn.call(nat);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Login$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Login$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "register";
            evt["label"] = "Create an account";
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnChangePage", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Login$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class Login$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "forgot";
            evt["label"] = "Forgot Password";
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnChangePage", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Login$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class Login$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnLogin", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Login$3["__interfaces"] = ["framework.components.api.EventListener"];


}


class PageNotFound extends HTMLTemplateContainer {
    public constructor(name: string) {
        super(name, "<div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"error-section\">\r\n                        <h1>404</h1>\r\n                        <h2>page not found</h2>\r\n                        <a name=\"back\" class=\"btn btn-solid\">back to home</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>");
        const back: JSContainer = new JSContainer("back", "a").setAttribute("href", "javascript:void(0);");
        back.setHtml("Back to home");
        back.addClass("btn btn-solid");
        this.addChild(back);
        back.addEventListener(new PageNotFound.PageNotFound$0(this), "click");
    }
}
PageNotFound["__class"] = "com.archnet.ui.front.pages.PageNotFound";
PageNotFound["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



namespace PageNotFound {

    export class PageNotFound$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "home";
            evt["label"] = "Home";
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null)p.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    PageNotFound$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class Profile extends JSContainer {
    /*private*/ personal: FormPanel;

    /*private*/ shipping: FormPanel;

    public constructor(name: string) {
        super(name, "div");
        this.personal = new FormPanel("personal");
        this.shipping = new FormPanel("shipping");
        const top: JSContainer = new JSContainer("div").addClass("contact-page register-page");
        this.addChild(top.addChild(this.personal));
        const bottom: JSContainer = new JSContainer("section").addClass("contact-page register-page section-b-space");
        this.addChild(bottom.addChild(this.shipping));
        this.personal.setLegend("Personal Detail");
        const firstName: input.JSInput<string> = <any>(new input.JSInput<string>("firstName"));
        firstName.addClass("form-control");
        firstName.setPlaceHolder("Enter Your first name");
        const lastName: input.JSInput<string> = <any>(new input.JSInput<string>("lastName"));
        lastName.addClass("form-control");
        lastName.setPlaceHolder("Enter Your last name");
        const phone: input.JSInput<string> = <any>(new input.JSInput<string>("phone"));
        phone.addClass("form-control");
        phone.setPlaceHolder("Enter Your phone number");
        const email: input.JSInput<string> = <any>(new input.JSInput<string>("email"));
        email.addClass("form-control");
        email.setPlaceHolder("Enter Your phone email");
        const message: input.JSTextArea = new input.JSTextArea("message");
        message.addClass("form-control mb-0");
        message.setAttribute("placeholder", "Write Your Message");
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("First Name", firstName);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("Last Name", lastName);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("Phone", phone);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField("Email", email);
        this.personal.getForm().addField$java_lang_String$framework_components_api_InputField$boolean("Write your message", message, true);
        const saveBilling: JSContainer = new JSContainer("save", "button").addClass("btn btn-sm btn-solid");
        saveBilling.setHtml("Save setting");
        const btnRowBilling: JSContainer = new JSContainer("div").addClass("col-md-12");
        btnRowBilling.addChild(saveBilling);
        this.personal.getForm().addChild(btnRowBilling);
        this.shipping.setLegend("Shipping Details");
        const flat: input.JSInput<string> = <any>(new input.JSInput<string>("flat"));
        flat.addClass("form-control");
        flat.setPlaceHolder("Flat/Plot");
        const addressLine1: input.JSInput<string> = <any>(new input.JSInput<string>("addressLine1"));
        addressLine1.addClass("form-control");
        addressLine1.setPlaceHolder("Address Line 1");
        const addressLine2: input.JSInput<string> = <any>(new input.JSInput<string>("addressLine2"));
        addressLine2.addClass("form-control");
        addressLine2.setPlaceHolder("Address Line 2");
        const zipCode: input.JSInput<string> = <any>(new input.JSInput<string>("zipcode"));
        zipCode.addClass("form-control");
        zipCode.setPlaceHolder("Zip Code");
        const country: input.JSInput<string> = <any>(new input.JSInput<string>("country"));
        country.addClass("form-control");
        country.setPlaceHolder("Country");
        const city: input.JSInput<string> = <any>(new input.JSInput<string>("city"));
        city.addClass("form-control");
        city.setPlaceHolder("City");
        const state: input.JSInput<string> = <any>(new input.JSInput<string>("state"));
        state.addClass("form-control");
        state.setPlaceHolder("State");
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Flat/Plot", flat);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Address Line 1*", addressLine1);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Address Line 2", addressLine2);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Zip Code*", zipCode);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Country*", country);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("City*", city);
        this.shipping.getForm().addField$java_lang_String$framework_components_api_InputField("Region/State*", state);
        const saveShipping: JSContainer = new JSContainer("save", "button").addClass("btn btn-sm btn-solid");
        saveShipping.setHtml("Save setting");
        const btnRowShipping: JSContainer = new JSContainer("div").addClass("col-md-12");
        btnRowShipping.addChild(saveShipping);
        this.shipping.getForm().addChild(btnRowShipping);
        saveShipping.addEventListener(new Profile.Profile$0(this), "click");
        saveBilling.addEventListener(new Profile.Profile$1(this), "click");
    }
}
Profile["__class"] = "com.archnet.ui.front.pages.Profile";
Profile["__interfaces"] = ["framework.components.api.Renderable"];



namespace Profile {

    export class Profile$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.shipping.getForm().validate();
            const shipp: Object = this.__parent.shipping.getForm().getValue();
            evt["value"] = shipp;
            evt["data-type"] = "shipping";
            this.__parent.fireListener("OnSave", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Profile$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Profile$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.personal.getForm().validate();
            const shipp: Object = this.__parent.personal.getForm().getValue();
            evt["value"] = shipp;
            evt["data-type"] = "billing";
            this.__parent.fireListener("OnSave", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Profile$1["__interfaces"] = ["framework.components.api.EventListener"];


}


class Register extends HTMLTemplateContainer {
    /*private*/ firstName: input.JSInput<string>;

    /*private*/ lastName: input.JSInput<string>;

    /*private*/ email: input.JSInput<string>;

    /*private*/ password: input.JSInput<string>;

    /*private*/ register: JSContainer;

    public constructor(name: string) {
        super(name, "<div class=\"register-page container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <h3>create account</h3>\r\n                    <div class=\"theme-card\">\r\n                        <form class=\"theme-form\">\r\n                            <div class=\"form-row row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"email\">First Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\"\r\n                                        required=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"review\">Last Name</label>\r\n                                    <input type=\"password\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\"\r\n                                        required=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"email\">email</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label for=\"review\">Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" name=\"password\"\r\n                                        placeholder=\"Enter your password\" required=\"\">\r\n                                </div><a href=\"#\" class=\"btn btn-solid w-auto\" name=\"register\">create Account</a>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>");
        this.firstName = <any>(new input.JSInput<string>("firstName"));
        this.lastName = <any>(new input.JSInput<string>("lastName"));
        this.email = <any>(new input.JSInput<string>("email"));
        this.password = <any>(new input.JSInput<string>("password"));
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

    public isOk(val: string): boolean {
        if (val != null && val !== ""){
            return true;
        }
        return false;
    }
}
Register["__class"] = "com.archnet.ui.front.pages.Register";
Register["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



namespace Register {

    export class Register$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.firstName.validate();
            this.__parent.lastName.validate();
            this.__parent.password.validate();
            this.__parent.email.validate();
            if (this.__parent.isOk(this.__parent.firstName.getValue()) && this.__parent.isOk(this.__parent.lastName.getValue()) && this.__parent.isOk(this.__parent.password.getValue()) && this.__parent.isOk(this.__parent.email.getValue())){
                evt["firstName"] = this.__parent.firstName;
                evt["lastName"] = this.__parent.lastName;
                evt["password"] = this.__parent.password;
                evt["email"] = this.__parent.email;
                this.__parent.fireListener("OnRegister", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Register$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class Search extends JSContainer {
    static TEMPLATE_SEARCH_SECTION: string = "<section class=\"authentication-page\">\r\n        <div class=\"container\">\r\n            <section class=\"search-block\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 offset-lg-3\">\r\n                            <div class=\"form-header\">\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"text\" name=\"txtSearch\" class=\"form-control\" aria-label=\"Search Products\"\r\n                                        placeholder=\"Search Products......\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-solid\" name=\"btnSearch\"><i class=\"fa fa-search\"></i>Search</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    </section>";

    /*private*/ searchSection: HTMLTemplateContainer;

    /*private*/ results: JSContainer;

    /*private*/ txtSearch: input.JSInput<string>;

    /*private*/ btnSearch: JSContainer;

    public constructor(name: string) {
        super(name, "div");
        this.searchSection = new HTMLTemplateContainer("search-section", Search.TEMPLATE_SEARCH_SECTION);
        this.results = new JSContainer("results", "div");
        this.txtSearch = <any>(new input.JSInput<any>("txtSearch"));
        this.btnSearch = new JSContainer("btnSearch", "button");
        this.addChild(this.searchSection);
        const sectionb: JSContainer = new JSContainer("section-b", "section").addClass("section-b-space ratio_asos");
        this.addChild(sectionb);
        const ctn: JSContainer = new JSContainer("div").addClass("container");
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

    public setProducts(products: Array<Object>) {
        this.results.clearChildren();
        this.results.setRendered(false);
        for(let index141=0; index141 < products.length; index141++) {
            let p = products[index141];
            {
                const box: ProductBox = ProductBox.createInstance(p);
                box.showDescription(false);
                box.setWidth$int(6);
                this.results.addChild(box);
                box.addEventListener(new Search.Search$4(this), "OnChangePage");
                box.addEventListener(new Search.Search$5(this), "OnAddWishList");
                box.addEventListener(new Search.Search$6(this), "OnAddCart");
            }
        }
    }

    /*private*/ fireListenerOnPage(name: string, evt: Event) {
        const p: Page = <any>(this.getAncestorWithClass<any>("Page"));
        if (p != null){
            p.fireListener(name, evt);
        }
    }
}
Search["__class"] = "com.archnet.ui.front.pages.Search";
Search["__interfaces"] = ["framework.components.api.Renderable"];



namespace Search {

    export class Search$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const products: Array<Object> = <any>(new Array<Object>());
            for(let i: number = 1; i <= 37; i++) {{
                const pr: Object = <Object>new Object();
                pr["availability"] = "in stock";
                pr["name"] = "product-" + i;
                pr["title"] = "Candy red solid tshirt";
                pr["description"] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book";
                pr["price"] = "200MUR";
                pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/35.jpg";
                pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/36.jpg";
                if (i % 2 === 0){
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/1.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/2.jpg";
                } else if (i % 3 === 0){
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/27.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/28.jpg";
                } else if (i % 5 === 0){
                    pr["front"] = "https://themes.pixelstrap.com/multikart/assets/images/pro3/33.jpg";
                    pr["back"] = "\thttps://themes.pixelstrap.com/multikart/assets/images/pro3/34.jpg";
                }
                products.push(pr);
            };}
            this.__parent.setProducts(products);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Search$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class Search$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class Search$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnAddWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$3["__interfaces"] = ["framework.components.api.EventListener"];



    export class Search$4 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$4["__interfaces"] = ["framework.components.api.EventListener"];



    export class Search$5 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnAddWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$5["__interfaces"] = ["framework.components.api.EventListener"];



    export class Search$6 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListenerOnPage("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Search$6["__interfaces"] = ["framework.components.api.EventListener"];


}


class WishList extends HTMLTemplateContainer {
    /*private*/ body: JSContainer;

    /*private*/ contShopping: JSContainer;

    /*private*/ checkout: JSContainer;

    public constructor(name: string) {
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

    public setProducts(products: Array<Object>) {
        this.body.clearChildren();
        this.body.setRendered(false);
        for(let index142=0; index142 < products.length; index142++) {
            let p = products[index142];
            {
                const line: WishList.ProductLine = new WishList.ProductLine(this, <string>p["name"]);
                this.body.addChild(line);
                line.setProduct(p);
                line.addEventListener(new WishList.WishList$5(this), "OnAddCart");
                line.addEventListener(new WishList.WishList$6(this), "OnRemoveWishList");
            }
        }
    }
}
WishList["__class"] = "com.archnet.ui.front.pages.WishList";
WishList["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.TemplateRenderable"];



namespace WishList {

    export class ProductLine extends JSContainer {
        public __parent: any;
        image: JSContainer;

        title: JSContainer;

        availability: JSContainer;

        price: JSContainer;

        mavailability: JSContainer;

        mprice: JSContainer;

        remove: JSContainer;

        addCart: JSContainer;

        mremove: JSContainer;

        maddCart: JSContainer;

        product: Object;

        public constructor(__parent: any, name: string) {
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
            if (this.product === undefined) { this.product = null; }
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

        public setProduct(p: Object) {
            this.product = p;
            const img: string = this.getStringValue(p, "front");
            this.image.clearChildren();
            this.image.setRendered(false);
            const im: JSContainer = new JSContainer("img").setAttribute("src", img);
            this.image.addChild(im);
            this.title.setHtml(this.getStringValue(p, "title"));
            const avai: string = this.getStringValue(p, "availability");
            this.mavailability.setHtml(avai);
            this.availability.setHtml(avai);
            const prc: string = this.getStringValue(p, "price");
            this.price.setHtml(prc);
            this.mprice.setHtml(prc);
            const name: string = this.getStringValue(p, "name");
            this.setName(name);
        }

        getStringValue(o: Object, field: string): string {
            return <string>o[field];
        }
    }
    ProductLine["__class"] = "com.archnet.ui.front.pages.WishList.ProductLine";
    ProductLine["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ProductLine {

        export class ProductLine$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["pageName"] = "product-detail/" + this.__parent.getName();
                evt["label"] = this.__parent.getStringValue(this.__parent.product, "title");
                this.__parent.fireListener("OnChangePage", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ProductLine$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ProductLine$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnAddCart", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ProductLine$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class ProductLine$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnAddCart", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ProductLine$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class ProductLine$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnRemoveWishList", evt);
                this.__parent.setStyle("display", "none");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ProductLine$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class ProductLine$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["product"] = this.__parent.product;
                this.__parent.fireListener("OnRemoveWishList", evt);
                this.__parent.setStyle("display", "none");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ProductLine$4["__interfaces"] = ["framework.components.api.EventListener"];


    }


    export class WishList$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "home";
            evt["label"] = "Home";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class WishList$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "checkout";
            evt["label"] = "Checkout";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class WishList$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnChangePage", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class WishList$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnAddCart", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$3["__interfaces"] = ["framework.components.api.EventListener"];



    export class WishList$4 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const p: Page = <any>(source.getAncestorWithClass<any>("Page"));
            if (p != null){
                p.fireListener("OnRemoveWishList", evt);
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$4["__interfaces"] = ["framework.components.api.EventListener"];



    export class WishList$5 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$5["__interfaces"] = ["framework.components.api.EventListener"];



    export class WishList$6 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnRemoveWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    WishList$6["__interfaces"] = ["framework.components.api.EventListener"];


}


class Portal extends JSContainer {
    /*private*/ loader: LoaderSkeletor;

    /*private*/ headerContainer: JSContainer;

    /*private*/ header: Header;

    /*private*/ topHeader: TopHeader;

    /*private*/ breadcrumb: BreadCrumbSection;

    /*private*/ page: Page;

    /*private*/ footer: Footer;

    /*private*/ wishList: IWishsList;

    /*private*/ cart: ICart;

    /*private*/ user: Object;

    public constructor(name: string) {
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

    public getLoggedUser(): Object {
        return this.user;
    }

    public fireChangePage(evt: Event) {
        const label: string = <string>evt["label"];
        this.setPageTitle(label);
        const pageName: string = <string>evt["pageName"];
        this.open(pageName);
    }

    public fireAddCart(evt: Event) {
        const product: Object = <Object>evt["product"];
        this.cart.setProduct(product);
        this.notify("fa fa-check", "Success!", product["title"] + " Successfully added to your cart");
    }

    public fireAddWishList(evt: Event) {
        const product: Object = <Object>evt["product"];
        this.wishList.setProduct(product);
        this.notify("fa fa-check", "Success!", product["title"] + " Successfully added to your wishlist");
    }

    public fireRemoveWishList(evt: Event) {
        const pro: Object = <Object>evt["product"];
        this.wishList.deleteProduct(<string>pro["name"]);
        this.notify("fa fa-check", "Success!", pro["title"] + " Successfully removed from your wishlist");
    }

    public fireLogin(evt: Event) {
        this.user = <Object>new Object();
        this.user["email"] = evt["email"];
        this.topHeader.setLoggedUser(this.user);
        this.open("home");
    }

    public notify(icon: string, title: string, message: string) {
        const jq: Object = <Object>window["$"];
        const notif: Function = <Function>jq["notify"];
        const param: Object = <Object>new Object();
        param["icon"] = icon;
        param["title"] = title;
        param["message"] = message;
        notif.call(notif, param);
    }

    public open(pageName: string) {
        if (pageName === "login"){
            const login: Login = new Login("login");
            this.getPage().setBody(login);
        } else if (pageName === "home"){
            const home: Home = new Home("home");
            this.getPage().setBody(home);
        } else if (pageName === "register"){
            const register: Register = new Register("register");
            this.getPage().setBody(register);
        } else if (pageName === "search"){
            const search: Search = new Search("search");
            this.getPage().setBody(search);
        } else if (pageName === "forgot"){
            const forgot: ForgotPassword = new ForgotPassword("forgot");
            this.getPage().setBody(forgot);
        } else if (pageName === "wishlist"){
            const wishlist: WishList = new WishList("wishlist");
            this.wishList.getProducts().then(((wishlist) => {
                return (prods) => {
                    wishlist.setProducts(prods);
                    this.getPage().setBody(wishlist);
                    this.getPage().setRendered(false);
                    this.getPage().render();
                }
            })(wishlist));
        } else if (pageName === "profile"){
            if (this.getLoggedUser() != null){
                const prof: Profile = new Profile("profile");
                this.getPage().setBody(prof);
            }
        } else {
            const notfound: PageNotFound = new PageNotFound("notfound");
            this.getPage().setBody(notfound);
        }
    }

    public getPage(): Page {
        return this.page;
    }

    public getLoader(): LoaderSkeletor {
        return this.loader;
    }

    public getHeaderContainer(): JSContainer {
        return this.headerContainer;
    }

    public getBreadcrumb(): Breadcrumb {
        return this.breadcrumb.getBreadcrumb();
    }

    public setLoader(loader: LoaderSkeletor) {
        this.loader = loader;
    }

    public setHeader(header: JSContainer) {
        this.headerContainer = header;
    }

    public setPage(page: Page) {
        this.page = page;
    }

    public getHeader(): Header {
        return this.header;
    }

    public getTopHeader(): TopHeader {
        return this.topHeader;
    }

    public setBreadcrumbs(items: Array<Object>) {
        this.getBreadcrumb().setBreadcrumbs(items);
    }

    public setMainMenu(items: Array<Object>) {
        this.getHeader().setMenu(items);
        const breadc: Array<Object> = <any>(new Array<Object>());
        breadc.push(items[0]);
        this.setBreadcrumbs(breadc);
    }

    public setLogo(logo: string) {
        this.getHeader().setLogo(logo);
    }

    public setStoreName(name: string) {
        this.getTopHeader().setStoreName(name);
    }

    public setPhoneNumber(phone: string) {
        this.getTopHeader().setPhoneNumber(phone);
    }

    public setPageTitle(title: string) {
        this.breadcrumb.setPageTitle(title);
    }

    public setSetting(sett: Setting) {
        this.setPageTitle(sett.pageTitle);
        this.setLogo(sett.logo);
        this.setStoreName(sett.storeName);
        this.setPhoneNumber(sett.phoneNumber);
        this.setMainMenu(sett.menu);
        this.getFooter().setSetting(sett);
    }

    public getFooter(): Footer {
        return this.footer;
    }

    public getWishList(): IWishsList {
        return this.wishList;
    }

    public getCart(): ICart {
        return this.cart;
    }
}
Portal["__class"] = "com.archnet.ui.front.Portal";
Portal["__interfaces"] = ["framework.components.api.Renderable"];



namespace Portal {

    export class Portal$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireChangePage(evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Portal$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Portal$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireChangePage(evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Portal$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class Portal$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireChangePage(evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Portal$2["__interfaces"] = ["framework.components.api.EventListener"];


}


class ProductListView extends JSContainer {
    public static VIEW_GRID: string = "grid";

    public static VIEW_LIST: string = "list";

    /*private*/ view: string;

    /*private*/ rowSize: number;

    /*private*/ row: JSContainer;

    public constructor(name: string) {
        super(name, "div");
        this.view = "grid";
        this.rowSize = 4;
        this.row = new JSContainer("row");
        this.addClass("product-wrapper-grid");
        this.addChild(this.row.addClass("row margin-res"));
    }

    public setView(view: string) {
        if (this.view !== view){
            if (view === ProductListView.VIEW_GRID){
                this.removeClass("list-view");
                this.setRowSize(4);
            } else {
                this.addClass("list-view");
                this.setRowSize(1);
            }
            this.view = view;
        }
    }

    public getProducts(): Array<ProductBox> {
        const result: Array<any> = this.row.getChildren();
        return result;
    }

    public setProducts(products: Array<Object>) {
        this.row.clearChildren();
        this.row.setRendered(false);
        for(let index143=0; index143 < products.length; index143++) {
            let o = products[index143];
            {
                const box: ProductBox = new ProductBox("");
                box.setProduct(o);
                this.row.addChild(box);
                box.addEventListener(new ProductListView.ProductListView$0(this), "OnChangePage");
                box.addEventListener(new ProductListView.ProductListView$1(this), "OnAddCart");
                box.addEventListener(new ProductListView.ProductListView$2(this), "OnAddWishList");
            }
        }
    }

    public setRowSize(size: number) {
        this.rowSize = size;
        {
            let array145 = this.getProducts();
            for(let index144=0; index144 < array145.length; index144++) {
                let p = array145[index144];
                {
                    p.setWidth$int(size);
                }
            }
        }
    }
}
ProductListView["__class"] = "com.archnet.ui.front.ProductListView";
ProductListView["__interfaces"] = ["framework.components.api.Renderable"];



namespace ProductListView {

    export class ProductListView$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductListView$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductListView$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductListView$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductListView$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnAddWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductListView$2["__interfaces"] = ["framework.components.api.EventListener"];


}


class ProductPaginator extends JSContainer {
    /*private*/ pagination: ProductPaginator.Pagination;

    /*private*/ count: JSContainer;

    /*private*/ pageSize: number;

    /*private*/ total: number;

    /*private*/ page: number;

    /*private*/ numPages: number;

    public static Event_OnChange: string = "OnChange";

    public constructor(name: string) {
        super(name, "div");
        this.pagination = new ProductPaginator.Pagination(this, "pagination");
        this.count = new JSContainer("count", "h5");
        this.pageSize = 25;
        this.total = -1;
        this.page = 1;
        this.numPages = -1;
        this.addClass("product-pagination");
        const theme: JSContainer = new JSContainer("div").addClass("theme-paggination-block");
        const container: JSContainer = new JSContainer("div").addClass("container-fluid p-0");
        this.addChild(theme.addChild(container));
        const row: ui.Row = new ui.Row("row");
        container.addChild(row);
        const left: ui.Col = new ui.Col("col");
        left.setWidth(ui.Size.EXTRA_LARGE, 6).setWidth(ui.Size.MEDIUM, 6).setWidth(ui.Size.SMALL, 12);
        row.addChild(left);
        const right: ui.Col = new ui.Col("col");
        right.setWidth(ui.Size.EXTRA_LARGE, 6).setWidth(ui.Size.MEDIUM, 6).setWidth(ui.Size.SMALL, 12);
        row.addChild(right);
        const nav: JSContainer = new JSContainer("nav").setAttribute("aria-label", "Page navigation");
        left.addChild(nav);
        nav.addChild(this.pagination);
        const searchCount: JSContainer = new JSContainer("div").addClass("product-search-count-bottom");
        right.addChild(searchCount.addChild(this.count));
        this.pagination.addEventListener(new ProductPaginator.ProductPaginator$0(this), "OnChange");
    }

    public fireOnChange(evt: Event) {
        evt["pageSize"] = this.pageSize;
        evt["page"] = this.page;
        let numItem: number = this.pageSize;
        evt["numItems"] = numItem;
        evt["total"] = this.total;
        if (this.page === this.numPages){
            numItem = this.total % this.pageSize;
            if (numItem > 0){
                evt["numItems"] = numItem;
            }
        }
        const start: number = (this.pageSize * (this.page - 1)) + 1;
        const end: number = start + numItem - 1;
        evt["start"] = start;
        evt["end"] = end;
        const label: string = "Showing Products " + start + " - " + end + " of " + this.total + " results";
        this.count.setHtml(label);
        this.fireListener("OnChange", evt);
    }

    public start() {
        const onchange: CustomEvent = new CustomEvent("OnChange");
        this.fireOnChange(onchange);
    }

    setCurrentPage(page: number) {
        this.page = page;
    }

    public setValue$int(total: number) {
        this.setValue$int$int(total, 25);
    }

    public setPageSize(pageSize: number) {
        this.setValue$int$int(this.total, pageSize);
    }

    public setValue$int$int(total: number, pageSize: number) {
        this.pageSize = pageSize;
        this.total = total;
        this.page = 1;
        this.numPages = ((total - (total % pageSize)) / pageSize|0);
        if ((total % pageSize) > 0){
            this.numPages = this.numPages + 1;
        }
        this.pagination.setPages(this.numPages);
        this.pagination.fireOnChange(new CustomEvent("OnChange"));
    }

    public setValue(total?: any, pageSize?: any) {
        if (((typeof total === 'number') || total === null) && ((typeof pageSize === 'number') || pageSize === null)) {
            return <any>this.setValue$int$int(total, pageSize);
        } else if (((typeof total === 'number') || total === null) && pageSize === undefined) {
            return <any>this.setValue$int(total);
        } else throw new Error('invalid overload');
    }

    public getPagination(): ProductPaginator.Pagination {
        return this.pagination;
    }

    public getPageSize(): number {
        return this.pageSize;
    }

    public getTotal(): number {
        return this.total;
    }

    public getPage(): number {
        return this.page;
    }

    public getNumPages(): number {
        return this.numPages;
    }
}
ProductPaginator["__class"] = "com.archnet.ui.front.ProductPaginator";
ProductPaginator["__interfaces"] = ["framework.components.api.Renderable"];



namespace ProductPaginator {

    export class Pagination extends JSContainer {
        public __parent: any;
        __previous: JSContainer;

        __next: JSContainer;

        currentPage: number;

        pages: number;

        public constructor(__parent: any, name: string) {
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

        public setPages(pages: number) {
            this.refresh(pages);
        }

        public addItem$framework_components_JSContainer(item: JSContainer): ProductPaginator.Pagination {
            const li: JSContainer = new JSContainer("li").addClass("page-item");
            this.addChild(li);
            li.addChild(item);
            return this;
        }

        public addItem(item?: any): any {
            if (((item != null && item instanceof <any>JSContainer) || item === null)) {
                return <any>this.addItem$framework_components_JSContainer(item);
            } else if (((typeof item === 'number') || item === null)) {
                return <any>this.addItem$int(item);
            } else throw new Error('invalid overload');
        }

        public addItem$int(page: number): ProductPaginator.Pagination {
            const link: JSContainer = new JSContainer(page + "", "a").addClass("page-link").setHtml(page + "");
            link.addEventListener(new Pagination.Pagination$2(this, page), "click");
            return this.addItem$framework_components_JSContainer(link);
        }

        public fireOnChange(evt: Event) {
            evt["page"] = this.currentPage;
            this.fireListener("OnChange", evt);
        }

        public next() {
            if (this.currentPage < this.pages){
                this.currentPage = this.currentPage + 1;
                this.setCurrentPage(this.currentPage);
            }
        }

        public previous() {
            if (this.currentPage > 1){
                this.currentPage = this.currentPage - 1;
                this.setCurrentPage(this.currentPage);
            }
        }

        public refresh(pages: number) {
            this.pages = pages;
            this.clearChildren();
            this.setRendered(false);
            this.__previous.setRendered(false);
            this.__next.setRendered(false);
            this.addItem$framework_components_JSContainer(this.__previous);
            for(let i: number = 1; i <= pages; i++) {{
                this.addItem$int(i);
            };}
            this.addItem$framework_components_JSContainer(this.__next);
            this.setCurrentPage(1);
        }

        public setCurrentPage(pageNumber: number) {
            {
                let array147 = this.getChildren();
                for(let index146=0; index146 < array147.length; index146++) {
                    let r = array147[index146];
                    {
                        r.removeClass("active");
                    }
                }
            }
            const li: api.Renderable = this.getChildren()[pageNumber];
            li.addClass("active");
            this.currentPage = pageNumber;
        }

        public getPages(): number {
            return this.pages;
        }

        public getCurrentPage(): number {
            return this.currentPage;
        }
    }
    Pagination["__class"] = "com.archnet.ui.front.ProductPaginator.Pagination";
    Pagination["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Pagination {

        export class Pagination$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.previous();
                this.__parent.fireOnChange(evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Pagination$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class Pagination$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.next();
                this.__parent.fireOnChange(evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Pagination$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class Pagination$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.setCurrentPage(this.page);
                this.__parent.fireOnChange(evt);
            }

            constructor(__parent: any, private page: any) {
                this.__parent = __parent;
            }
        }
        Pagination$2["__interfaces"] = ["framework.components.api.EventListener"];


    }


    export class ProductPaginator$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const page: number = <number>evt["page"];
            this.__parent.setCurrentPage(page);
            this.__parent.fireOnChange(evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductPaginator$0["__interfaces"] = ["framework.components.api.EventListener"];


}


class ProductTopFilter extends JSContainer {
    /*private*/ count: JSContainer;

    /*private*/ searchCount: JSContainer;

    /*private*/ collectionView: JSContainer;

    /*private*/ collectionGridView: JSContainer;

    /*private*/ productPerPageView: JSContainer;

    /*private*/ productPageFilter: JSContainer;

    /*private*/ gridView: JSContainer;

    /*private*/ listView: JSContainer;

    public static Event_OnChangeView: string = "OnChangeView";

    public static Event_OnChangeRowSize: string = "OnChangeRowSize";

    public static Event_OnChangePageSize: string = "OnChangePageSize";

    public static Event_OnChangeSortBy: string = "OnChangeSortBy";

    public constructor(name: string) {
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
        const col12: JSContainer = new JSContainer("div").addClass("col-12");
        const content: JSContainer = new JSContainer("div").addClass("product-filter-content");
        col12.addChild(content);
        this.addChild(new JSContainer("div").addClass("container-fluid p-0").addChild(new JSContainer("div").addClass("row").addChild(col12)));
        this.searchCount.addChild(this.count);
        content.addChild(this.searchCount);
        content.addChild(this.collectionView).addChild(this.collectionGridView).addChild(this.productPerPageView).addChild(this.productPageFilter);
        const views: JSContainer = new JSContainer("ul");
        views.addChild(new JSContainer("li").addChild(this.gridView));
        views.addChild(new JSContainer("li").addChild(this.listView));
        this.collectionView.addChild(views);
        this.gridView.addEventListener(new ProductTopFilter.ProductTopFilter$0(this), "click");
        this.listView.addEventListener(new ProductTopFilter.ProductTopFilter$1(this), "click");
        const size: JSContainer = new JSContainer("ul");
        this.collectionGridView.addChild(size);
        for(let i: number = 2; i <= 6; i++) {{
            if (i !== 5){
                const li: JSContainer = new JSContainer("li");
                const img: JSContainer = new JSContainer("" + i, "img");
                img.addEventListener(new ProductTopFilter.ProductTopFilter$2(this), "click");
                img.addClass("product-" + i + "-layout-view");
                img.setAttribute("src", "https://themes.pixelstrap.com/multikart/assets/images/icon/" + i + ".png");
                li.addChild(img);
                size.addChild(li);
            }
        };}
        const pageSize: input.JSSelect = new input.JSSelect("productPerPage");
        pageSize.addOption("25 Products Per Page", "25").addOption("50 Products Per Page", "50").addOption("100 Products Per Page", "100");
        pageSize.addEventListener(new ProductTopFilter.ProductTopFilter$3(this, pageSize), "change");
        pageSize.setValue("25");
        this.productPerPageView.addChild(pageSize);
        const sort: input.JSSelect = new input.JSSelect("sort").addOption("Sort By Price", "price").addOption("Sort By Date Added", "sort");
        this.productPageFilter.addChild(sort);
        sort.addEventListener(new ProductTopFilter.ProductTopFilter$4(this, sort), "change");
        sort.setValue("sort");
    }

    public setCount(start: number, end: number, total: number) {
        const txt: string = "Showing Products " + start + " - " + end + " Of " + total + " Results";
        this.count.setHtml(txt);
    }
}
ProductTopFilter["__class"] = "com.archnet.ui.front.ProductTopFilter";
ProductTopFilter["__interfaces"] = ["framework.components.api.Renderable"];



namespace ProductTopFilter {

    export class ProductTopFilter$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["viewtype"] = "grid";
            this.__parent.fireListener("OnChangeView", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductTopFilter$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductTopFilter$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["viewtype"] = "list";
            this.__parent.fireListener("OnChangeView", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductTopFilter$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductTopFilter$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["size"] = /* parseInt */parseInt(source.getName());
            this.__parent.fireListener("OnChangeRowSize", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductTopFilter$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductTopFilter$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const ipageSize: number = /* parseInt */parseInt(this.pageSize.getValue() + "");
            evt["pageSize"] = ipageSize;
            this.__parent.fireListener("OnChangePageSize", evt);
        }

        constructor(__parent: any, private pageSize: any) {
            this.__parent = __parent;
        }
    }
    ProductTopFilter$3["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductTopFilter$4 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const sortBy: string = this.sort.getValue() + "";
            evt["sortBy"] = sortBy;
            this.__parent.fireListener("OnChangeSortBy", evt);
        }

        constructor(__parent: any, private sort: any) {
            this.__parent = __parent;
        }
    }
    ProductTopFilter$4["__interfaces"] = ["framework.components.api.EventListener"];


}


class Setting {
    public pageTitle: string;

    public logo: string;

    public storeName: string;

    public phoneNumber: string;

    public menu: Array<Object>;

    public fax: string;

    public email: string;

    public address: string;

    public storeDescription: string;

    public facebook: string;

    public twitter: string;

    public googleplus: string;

    public instagram: string;

    public rss: string;

    public categories: Array<Object>;

    constructor() {
        if (this.pageTitle === undefined) { this.pageTitle = null; }
        if (this.logo === undefined) { this.logo = null; }
        if (this.storeName === undefined) { this.storeName = null; }
        if (this.phoneNumber === undefined) { this.phoneNumber = null; }
        if (this.menu === undefined) { this.menu = null; }
        if (this.fax === undefined) { this.fax = null; }
        if (this.email === undefined) { this.email = null; }
        if (this.address === undefined) { this.address = null; }
        if (this.storeDescription === undefined) { this.storeDescription = null; }
        if (this.facebook === undefined) { this.facebook = null; }
        if (this.twitter === undefined) { this.twitter = null; }
        if (this.googleplus === undefined) { this.googleplus = null; }
        if (this.instagram === undefined) { this.instagram = null; }
        if (this.rss === undefined) { this.rss = null; }
        if (this.categories === undefined) { this.categories = null; }
    }
}
Setting["__class"] = "com.archnet.ui.front.Setting";


class TopHeader extends JSContainer {
    /*private*/ left: ui.Col;

    /*private*/ right: ui.Col;

    /*private*/ storeName: JSContainer;

    /*private*/ phoneNumber: JSContainer;

    /*private*/ headerDropdown: ui.List;

    /*private*/ wishList: JSContainer;

    /*private*/ accountMenu: ui.List;

    public constructor(name: string) {
        super(name, "div");
        this.left = new ui.Col("left");
        this.right = new ui.Col("right");
        this.storeName = new JSContainer("storeName", "span");
        this.phoneNumber = new JSContainer("phoneNumber", "span");
        this.headerDropdown = new ui.List("headerDropdown", "ul");
        this.wishList = new JSContainer("wishlist", "a");
        this.accountMenu = new ui.List("accountMenu", "ul");
        this.addClass("top-header");
        const grid: ui.Grid = new ui.Grid("grid");
        this.addChild(grid);
        grid.addCol(this.left).addCol(this.right);
        this.left.setWidth(ui.Size.LARGE, 6);
        this.right.setWidth(ui.Size.LARGE, 6);
        const headerContact: JSContainer = new JSContainer("header-contact", "div");
        headerContact.addClass("header-contact");
        this.left.addChild(headerContact);
        const list: ui.List = new ui.List("contact", "ul");
        headerContact.addChild(list);
        list.addItem(this.storeName);
        const phone: JSContainer = new JSContainer("i").addClass("fa fa-phone").setAttribute("aria-hidden", "true");
        list.addItem(phone);
        phone.getParent().addChild(this.phoneNumber);
        this.right.addClass("text-end");
        this.headerDropdown.addClass("header-dropdown");
        this.right.addChild(this.headerDropdown);
        this.wishList.setAttribute("href", "javascript:void(0);").setHtml("<i class=\"fa fa-heart\" aria-hidden=\"true\"></i>");
        this.headerDropdown.addItem(this.wishList);
        this.wishList.getParent().addClass("mobile-wishlist");
        this.wishList.addEventListener(new TopHeader.TopHeader$0(this), "click");
        const iconUser: JSContainer = new JSContainer("i").addClass("fa fa-user").setAttribute("aria-hidden", "true");
        this.headerDropdown.addItem(iconUser);
        const li: JSContainer = iconUser.getParent();
        li.addClass("onhover-dropdown mobile-account");
        li.addChild(new JSContainer("span").setHtml("My Account").addEventListener(new TopHeader.TopHeader$1(this), "click"));
        li.addChild(this.accountMenu);
        this.accountMenu.addClass("onhover-show-div");
        const login: JSContainer = new JSContainer("login", "a").setAttribute("href", "javascript:void(0);").setHtml("Login");
        const register: JSContainer = new JSContainer("register", "a").setAttribute("href", "javascript:void(0);").setHtml("Register");
        this.accountMenu.addItem(login);
        this.accountMenu.addItem(register);
        login.addEventListener(new TopHeader.TopHeader$2(this), "click");
        register.addEventListener(new TopHeader.TopHeader$3(this), "click");
    }

    public setLoggedUser(o: Object) {
        if (o != null){
            this.accountMenu.setStyle("display", "none");
        } else {
            this.accountMenu.setStyle("display", null);
        }
    }

    public setStoreName(name: string) {
        this.storeName.setHtml("Welcome to Our store " + name);
    }

    public setPhoneNumber(phone: string) {
        this.phoneNumber.setHtml("Call Us: " + phone);
    }
}
TopHeader["__class"] = "com.archnet.ui.front.TopHeader";
TopHeader["__interfaces"] = ["framework.components.api.Renderable"];



namespace TopHeader {

    export class TopHeader$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "wishlist";
            evt["label"] = "Wish List";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    TopHeader$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class TopHeader$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "profile";
            evt["label"] = "Profile";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    TopHeader$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class TopHeader$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "login";
            evt["label"] = "Login";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    TopHeader$2["__interfaces"] = ["framework.components.api.EventListener"];



    export class TopHeader$3 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "register";
            evt["label"] = "Register";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    TopHeader$3["__interfaces"] = ["framework.components.api.EventListener"];


}


namespace ui {
    export class Grid extends JSContainer {
        /*private*/ row: ui.Row;

        public constructor(name: string) {
            super(name, "div");
            this.row = new ui.Row("row");
            this.addClass("container");
            this.addChild(this.row);
        }

        public getRow(): ui.Row {
            return this.row;
        }

        public addCol(col: ui.Col): Grid {
            this.row.addChild(col);
            return this;
        }

        public getCol(index: number): ui.Col {
            return <ui.Col><any>this.row.getChildren()[index];
        }
    }
    Grid["__class"] = "com.archnet.ui.Grid";
    Grid["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace ui {
    export class List extends JSContainer {
        public constructor(name: string, tag: string) {
            super(name, tag);
        }

        public addItem(item: JSContainer): JSContainer {
            const li: JSContainer = new JSContainer("li");
            li.addChild(item);
            this.addChild(li);
            return li;
        }

        public addItems(...items: JSContainer[]): List {
            for(let index148=0; index148 < items.length; index148++) {
                let item = items[index148];
                {
                    this.addItem(item);
                }
            }
            return this;
        }
    }
    List["__class"] = "com.archnet.ui.List";
    List["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace ui {
    export class Row extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
            this.addClass("row");
        }
    }
    Row["__class"] = "com.archnet.ui.Row";
    Row["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace ui {
    export enum Size {
        SMALL, MEDIUM, LARGE, EXTRA_LARGE, EXTRA_EXTRA_LARGE, NONE
    }

    /** @ignore */
    export class Size_$WRAPPER {
        /*private*/ value;

        constructor(protected _$ordinal: number, protected _$name: string, value) {
            if (this.value === undefined) { this.value = null; }
            this.value = value;
        }

        public getValue(): string {
            return this.value;
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    Size["__class"] = "com.archnet.ui.Size";
    Size["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

    Size["_$wrappers"] = {0: new Size_$WRAPPER(0, "SMALL", "sm"), 1: new Size_$WRAPPER(1, "MEDIUM", "md"), 2: new Size_$WRAPPER(2, "LARGE", "lg"), 3: new Size_$WRAPPER(3, "EXTRA_LARGE", "xl"), 4: new Size_$WRAPPER(4, "EXTRA_EXTRA_LARGE", "xxl"), 5: new Size_$WRAPPER(5, "NONE", "none")};

}
class LocalStorageCart extends AbstractLocalStorageProductList implements ICart {
    public getDbKey(): string {
        return "cart";
    }

    constructor() {
        super();
    }
}
LocalStorageCart["__class"] = "com.archnet.LocalStorageCart";
LocalStorageCart["__interfaces"] = ["com.archnet.ICart","com.archnet.IProductList"];



class LocalStorageWishList extends AbstractLocalStorageProductList implements IWishsList {
    /**
     * 
     * @return {string}
     */
    public getDbKey(): string {
        return "wishlist";
    }

    constructor() {
        super();
    }
}
LocalStorageWishList["__class"] = "com.archnet.LocalStorageWishList";
LocalStorageWishList["__interfaces"] = ["com.archnet.IWishsList","com.archnet.IProductList"];



class ProductBox extends ui.Col {
    /*private*/ box: JSContainer;

    /*private*/ front: JSContainer;

    /*private*/ back: JSContainer;

    /*private*/ title: JSContainer;

    /*private*/ description: JSContainer;

    /*private*/ price: JSContainer;

    /*private*/ product: Object;

    public constructor(name: string) {
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
        const imgWrapper: JSContainer = new JSContainer("div").addClass("img-wrapper");
        imgWrapper.addChild("front", "div", "front").addChild(this.front);
        imgWrapper.addChild("back", "div", "back").addChild(this.back);
        this.front.addClass("img-fluid blur-up lazyload bg-img");
        this.back.addClass("img-fluid blur-up lazyload bg-img");
        this.box.addChild(imgWrapper);
        this.box.addClass("product-box");
        const cartInfo: JSContainer = new JSContainer("div").addClass("cart-info cart-wrap");
        imgWrapper.addChild(cartInfo);
        const addToCart: JSContainer = new JSContainer("addToCart", "button").setAttribute("title", "Add to cart");
        addToCart.setHtml("<i class=\"ti-shopping-cart\"></i>").setAttribute("data-bs-toggle", "modal").setAttribute("data-bs-target", "#addtocart");
        cartInfo.addChild(addToCart);
        addToCart.addEventListener(new ProductBox.ProductBox$0(this), "click");
        const addToWishlist: JSContainer = new JSContainer("addToWishList", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Add to Wishlist");
        addToWishlist.setHtml("<i class=\"ti-heart\" aria-hidden=\"true\"></i>");
        cartInfo.addChild(addToWishlist);
        addToWishlist.addEventListener(new ProductBox.ProductBox$1(this), "click");
        const quickView: JSContainer = new JSContainer("quickView", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Quick View");
        quickView.setHtml("<i class=\"ti-search\"></i>").setAttribute("data-bs-toggle", "modal").setAttribute("data-bs-target", "#quickview");
        cartInfo.addChild(quickView);
        const compare: JSContainer = new JSContainer("compare", "a").setAttribute("href", "javascript:void(0);").setAttribute("title", "Compare");
        compare.setHtml("<i class=\"ti-reload\" aria-hidden=\"true\"></i>");
        cartInfo.addChild(compare);
        const detail: JSContainer = new JSContainer("div").addClass("product-detail");
        this.box.addChild(detail);
        const rating: JSContainer = new JSContainer("rating", "div").addClass("rating");
        for(let i: number = 1; i <= 5; i++) {{
            const star: JSContainer = new JSContainer(i + "", "i").addClass("fa fa-star");
            rating.addChild(star);
        };}
        detail.addChild(rating);
        const titleLink: JSContainer = new JSContainer("a").setAttribute("href", "javascript:void(0);");
        titleLink.addChild(this.title);
        detail.addChild(titleLink);
        titleLink.addEventListener(new ProductBox.ProductBox$2(this), "click");
        detail.addChild(this.description);
        detail.addChild(this.price);
    }

    public setDescription(description: string) {
        this.description.setHtml(description);
    }

    public setPrice(price: string) {
        this.price.setHtml(price);
    }

    public setTitle(title: string) {
        this.title.setHtml(title);
    }

    public setImageBack(url: string) {
        this.back.setAttribute("src", url);
    }

    public setImageFront(url: string) {
        this.front.setAttribute("src", url);
    }

    public setProduct(p: Object) {
        this.product = p;
        const price: string = <string>p["price"];
        const front: string = <string>p["front"];
        const back: string = <string>p["back"];
        const title: string = <string>p["title"];
        const description: string = <string>p["description"];
        const name: string = <string>p["name"];
        this.setName(name);
        this.setPrice(price);
        this.setImageBack(back);
        this.setImageFront(front);
        this.setTitle(title);
        this.setDescription(description);
    }

    public getProduct(): Object {
        return this.product;
    }

    public static createInstance(p: Object): ProductBox {
        const box: ProductBox = new ProductBox("");
        box.setProduct(p);
        return box;
    }

    public setWidth(size?: any, width?: any): any {
        if (((typeof size === 'number') || size === null) && ((typeof width === 'number') || width === null)) {
            return super.setWidth(size, width);
        } else if (((typeof size === 'number') || size === null) && width === undefined) {
            return <any>this.setWidth$int(size);
        } else throw new Error('invalid overload');
    }

    public setWidth$int(width: number): ProductBox {
        this.clearSizes();
        if (width === 6){
            this.setWidth(ui.Size.LARGE, 2);
        } else if (width === 4){
            this.setWidth(ui.Size.EXTRA_LARGE, 3);
            this.setWidth(ui.Size.NONE, 6);
        } else if (width === 3){
            this.setWidth(ui.Size.LARGE, 4);
            this.setWidth(ui.Size.NONE, 6);
        } else if (width === 2){
            this.setWidth(ui.Size.LARGE, 6);
        } else if (width === 1){
            this.setWidth(ui.Size.LARGE, 12);
        }
        return this;
    }

    public showDescription(b: boolean) {
        if (b){
            this.description.setStyle("display", null);
        } else {
            this.description.setStyle("display", "none");
        }
    }
}
ProductBox["__class"] = "com.archnet.ui.front.ProductBox";
ProductBox["__interfaces"] = ["framework.components.api.Renderable"];



namespace ProductBox {

    export class ProductBox$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["product"] = this.__parent.product;
            this.__parent.fireListener("OnAddCart", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductBox$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductBox$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["product"] = this.__parent.product;
            this.__parent.fireListener("OnAddWishList", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductBox$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class ProductBox$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            const pageName: string = "product-detail/" + this.__parent.getName();
            const label: string = this.__parent.title.getHtml();
            evt["label"] = label;
            evt["pageName"] = pageName;
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    ProductBox$2["__interfaces"] = ["framework.components.api.EventListener"];


}


class FormPanel extends ui.Grid {
    /*private*/ legend: JSContainer;

    /*private*/ form: Form;

    public constructor(name: string) {
        super(name);
        this.legend = new JSContainer("legend", "h3");
        this.form = new Form("form");
        const c: ui.Col = new ui.Col("c");
        c.setWidth(ui.Size.SMALL, 12);
        this.addCol(c);
        c.addChild(this.legend);
        c.addChild(this.form);
    }

    public getForm(): Form {
        return this.form;
    }

    public setLegend(le: string) {
        this.legend.setHtml(le);
    }
}
FormPanel["__class"] = "com.archnet.ui.front.FormPanel";
FormPanel["__interfaces"] = ["framework.components.api.Renderable"];



class Header extends ui.Grid {
    /*private*/ col: ui.Col;

    /*private*/ mainMenu: JSContainer;

    /*private*/ menuLeft: JSContainer;

    /*private*/ menuRight: JSContainer;

    /*private*/ logo: JSContainer;

    /*private*/ menu: MainMenu;

    /*private*/ iconMenu: ui.List;

    public static Event_OnChangePage: string = "OnChangePage";

    public constructor(name: string) {
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
        const brandLogo: JSContainer = new JSContainer("div").addClass("brand-logo");
        const logoLink: JSContainer = new JSContainer("home", "a").setAttribute("href", "javascript:void(0);");
        this.menuLeft.addChild(brandLogo.addChild(logoLink));
        this.logo.addClass("img-fluid blur-up lazyloaded");
        logoLink.addChild(this.logo);
        logoLink.addEventListener(new Header.Header$0(this), "click");
        this.menuRight.addChild(new JSContainer("div").addChild(new JSContainer("nav").addChild(this.menu)));
        this.menuRight.addChild(new JSContainer("div").addChild(new JSContainer("div").addClass("icon-nav").addChild(this.iconMenu)));
        const icons: string[] = ["search", "setting", "cart"];
        const names: string[] = ["Search", "Setting", "Cart"];
        let index: number = 0;
        for(let index149=0; index149 < icons.length; index149++) {
            let icon = icons[index149];
            {
                const img: JSContainer = new JSContainer(icon, "img").setAttribute("src", "https://themes.pixelstrap.com/multikart/assets/images/icon/" + icon + ".png");
                this.iconMenu.addItem(img);
                img.getParent().addClass("onhover-div mobile-search");
                img.setAttribute("title", names[index]);
                img.addEventListener(new Header.Header$1(this), "click");
                index++;
            }
        }
        this.menu.addEventListener(new Header.Header$2(this), "OnChangePage");
    }

    public setLogo(logo: string) {
        this.logo.setAttribute("src", logo);
    }

    public addMenu$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, tag: string): Header {
        this.menu.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
        return this;
    }

    public addMenu(name?: any, label?: any, tag?: any): any {
        if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof tag === 'string') || tag === null)) {
            return <any>this.addMenu$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
        } else if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && tag === undefined) {
            return <any>this.addMenu$java_lang_String$java_lang_String(name, label);
        } else throw new Error('invalid overload');
    }

    public setMenu(menu: Array<Object>) {
        this.menu.clearChildren();
        this.menu.setRendered(false);
        for(let index150=0; index150 < menu.length; index150++) {
            let o = menu[index150];
            {
                const name: string = <string>o["name"];
                const label: string = <string>o["label"];
                let tag: string = null;
                if (o.hasOwnProperty("tag")){
                    tag = <string>o["tag"];
                }
                this.addMenu$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
            }
        }
    }

    public addMenu$java_lang_String$java_lang_String(name: string, label: string): Header {
        this.menu.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, null);
        return this;
    }
}
Header["__class"] = "com.archnet.ui.front.Header";
Header["__interfaces"] = ["framework.components.api.Renderable"];



namespace Header {

    export class Header$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = "home";
            evt["label"] = "Home";
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Header$0["__interfaces"] = ["framework.components.api.EventListener"];



    export class Header$1 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["pageName"] = source.getName();
            evt["label"] = source.getAttribute("title");
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Header$1["__interfaces"] = ["framework.components.api.EventListener"];



    export class Header$2 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Header$2["__interfaces"] = ["framework.components.api.EventListener"];


}


class MainMenu extends ui.List {
    public constructor(name: string) {
        super(name, "ul");
        this.addClass("sm pixelstrap sm-horizontal");
    }

    public addItem$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, tag: string): MainMenu {
        const item: JSContainer = new JSContainer(name, "a").setAttribute("href", "javascript:void(0);").setHtml(label);
        this.addItem(item);
        if (tag != null && tag !== ""){
            const utag: JSContainer = new JSContainer("div").addClass("lable-nav").setHtml(tag);
            item.getParent().addChild(utag);
        }
        item.addEventListener(new MainMenu.MainMenu$0(this, label, name), "click");
        return this;
    }

    public addItem(name?: any, label?: any, tag?: any): any {
        if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof tag === 'string') || tag === null)) {
            return <any>this.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, tag);
        } else if (((name != null && name instanceof <any>JSContainer) || name === null) && label === undefined && tag === undefined) {
            return super.addItem(name);
        } else throw new Error('invalid overload');
    }
}
MainMenu["__class"] = "com.archnet.ui.front.MainMenu";
MainMenu["__interfaces"] = ["framework.components.api.Renderable"];



namespace MainMenu {

    export class MainMenu$0 implements api.EventListener {
        public __parent: any;
        /**
         * 
         * @param {*} source
         * @param {Event} evt
         */
        public performAction(source: api.Renderable, evt: Event) {
            evt["label"] = this.label;
            evt["pageName"] = this.name;
            this.__parent.fireListener("OnChangePage", evt);
        }

        constructor(__parent: any, private label: any, private name: any) {
            this.__parent = __parent;
        }
    }
    MainMenu$0["__interfaces"] = ["framework.components.api.EventListener"];


}




ui.back.Header.CHANGE_PAGE_$LI$();

Boot.main(null);
