declare abstract class AbstractLocalStorageProductList implements IProductList {
    abstract getDbKey(): string;
    setProduct(product: Object): void;
    toPromise(result: Array<Object>): Promise<Array<Object>>;
    getProducts(): Promise<Array<Object>>;
    getProducts_(): Array<Object>;
    deleteProduct(name: string): void;
    getProduct(name: string): Promise<Object>;
    constructor();
}
interface ICart extends IProductList {
}
interface IProductList {
    setProduct(product: Object): any;
    getProducts(): Promise<Array<Object>>;
    deleteProduct(name: string): any;
    getProduct(name: string): Promise<Object>;
}
interface IWishsList extends IProductList {
}
declare namespace ui.back {
    class Body extends JSContainer {
        sideMenu: ui.back.SideMenu;
        constructor(name: string);
    }
}
declare namespace ui.back {
    class Header extends JSContainer {
        logoLink: JSContainer;
        slideButton: HTMLTemplateContainer;
        logo: JSContainer;
        nav: ui.List;
        searchLayout: HTMLTemplateContainer;
        search: input.JSTextInput;
        fullscreen: JSContainer;
        currentLanguageLink: JSContainer;
        currentLanguage: JSContainer;
        languages: ui.List;
        notif: JSContainer;
        numnotifs: JSContainer;
        notifications: ui.List;
        settingMenu: JSContainer;
        myImage: JSContainer;
        dotanim: JSContainer;
        editprofile: JSContainer;
        inbox: JSContainer;
        lockscreen: JSContainer;
        settings: JSContainer;
        logout: JSContainer;
        static CHANGE_PAGE: api.EventListener;
        static CHANGE_PAGE_$LI$(): api.EventListener;
        constructor(name: string);
        setNotifications(notifs: Array<Object>): void;
        setNumNotifs(num: number): void;
        addLanguage(lang: string, abbr: string, flag: string): void;
        setCurrentLanguage(lang: string): void;
        setLogo(src: string): void;
    }
    namespace Header {
        class Header$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$4 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$5 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$6 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Header$7 implements api.EventListener {
            private lang;
            private abbr;
            private flag;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, lang: any, abbr: any, flag: any);
        }
    }
}
declare namespace ui.back {
    class Portal extends JSContainer {
        header: ui.back.Header;
        body: ui.back.Body;
        constructor(name: string);
    }
}
declare namespace ui.back {
    class SideMenu extends JSContainer {
        logoLink: JSContainer;
        logo: JSContainer;
        user: JSContainer;
        username: JSContainer;
        userrole: JSContainer;
        menu: ui.List;
        constructor(name: string);
        setMenu(nav: Array<Object>): void;
        addMenu$jsweet_lang_Object$com_archnet_ui_List(o: Object, men: ui.List): JSContainer;
        addMenu$java_lang_String$java_lang_String$java_lang_String$com_archnet_ui_List(name: string, label: string, icon: string, men: ui.List): JSContainer;
        addMenu(name?: any, label?: any, icon?: any, men?: any): any;
        setLogo(lo: string): void;
        setUserName(name: string): void;
        setUserRole(rol: string): void;
        setUserAvatar(ava: string): void;
    }
    namespace SideMenu {
        class SideMenu$0 implements api.EventListener {
            private name;
            private label;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, name: any, label: any);
        }
    }
}
declare namespace ui {
    class Col extends JSContainer {
        constructor(name: string);
        clearSizes(): void;
        setWidth(size: ui.Size, width: number): Col;
    }
}
declare class Boot {
    static renderBack(): void;
    static main(args: string[]): void;
    static renderFront(): void;
    static addMenu(name: string, label: string, tag: string, menu: Array<Object>): void;
}
declare class Breadcrumb extends JSContainer {
    items: ui.List;
    static Event_OnChangePage: string;
    constructor(name: string);
    addItem(name: string, label: string): Breadcrumb;
    setBreadcrumbs(items: Array<Object>): void;
    activate(name: string): void;
}
declare namespace Breadcrumb {
    class Breadcrumb$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class BreadCrumbSection extends JSContainer {
    left: ui.Col;
    right: ui.Col;
    grid: ui.Grid;
    title: JSContainer;
    breadcrumb: Breadcrumb;
    static Event_OnChangePage: string;
    constructor(name: string);
    setPageTitle(txt: string): BreadCrumbSection;
    getBreadcrumb(): Breadcrumb;
}
declare namespace BreadCrumbSection {
    class BreadCrumbSection$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Catalogue extends JSContainer {
    filter: ProductTopFilter;
    view: ProductListView;
    paginator: ProductPaginator;
    constructor(name: string);
    fireListenerOnPage(name: string, evt: Event): void;
    setTotal(total: number): void;
    setProducts(products: Array<Object>): void;
    start(): void;
}
declare namespace Catalogue {
    class Catalogue$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$3 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$4 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$5 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$6 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$7 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$8 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Catalogue$9 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Footer extends JSContainer {
    email: input.JSInput<string>;
    logo: JSContainer;
    description: JSContainer;
    categories: ui.List;
    address: JSContainer;
    phone: JSContainer;
    storeemail: JSContainer;
    fax: JSContainer;
    facebook: JSContainer;
    googleplus: JSContainer;
    twitter: JSContainer;
    instagram: JSContainer;
    rss: JSContainer;
    socials: ui.List;
    constructor(name: string);
    setCol2(col2: ui.Col): void;
    setCol3(col3: ui.Col): void;
    setFacebook(fb: string): void;
    setTwitter(tw: string): void;
    setGooglePlus(gp: string): void;
    setInstagram(ins: string): void;
    setRss(rs: string): void;
    setAddress(addr: string): void;
    setPhone(phone: string): void;
    setEmail(em: string): void;
    setFax(fx: string): void;
    setLogo(lo: string): void;
    setDescription(desc: string): void;
    setCategories(cats: Array<Object>): void;
    setSetting(set: Setting): void;
}
declare namespace Footer {
    class Footer$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Footer$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Form extends JSContainer {
    body: JSContainer;
    fields: Object;
    constructor(name: string);
    clear(): void;
    validate(): void;
    addField$java_lang_String$framework_components_api_InputField$boolean(label: string, field: api.InputField<any>, fullwidth: boolean): void;
    addField(label?: any, field?: any, fullwidth?: any): any;
    addField$java_lang_String$framework_components_api_InputField(label: string, field: api.InputField<any>): void;
    setValue(vals: Object): void;
    getValue(): Object;
}
declare class LoaderSkeletor extends HTMLTemplateContainer {
    constructor(name: string);
}
declare class MainBanner extends JSContainer {
    title: JSContainer;
    description: JSContainer;
    img: JSContainer;
    constructor(name: string);
    setImg(img: string): MainBanner;
    setTitle(title: string): MainBanner;
    setDescription(description: string): MainBanner;
}
declare namespace MainBanner {
    class MainBanner$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class MainBanner$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Page extends JSContainer {
    static EVENT_OnChangePage: string;
    static EVENT_OnAddWishList: string;
    static EVENT_OnAddCart: string;
    static Event_OnRemoveWishList: string;
    static Event_OnLogin: string;
    constructor(name: string);
    setBody(ctn: JSContainer): void;
}
declare namespace Page {
    class Page$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Page$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Page$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Page$3 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Page$4 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class ForgotPassword extends HTMLTemplateContainer {
    email: input.JSInput<string>;
    change: JSContainer;
    constructor(name: string);
}
declare namespace ForgotPassword {
    class ForgotPassword$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Home extends JSContainer {
    top: JSContainer;
    body: JSContainer;
    constructor(name: string);
    getTop(): JSContainer;
    getBody(): JSContainer;
    setTop(ctn: JSContainer): void;
    setBody(ctn: JSContainer): void;
}
declare class Login extends HTMLTemplateContainer {
    email: input.JSInput<string>;
    password: input.JSInput<string>;
    login: JSContainer;
    register: JSContainer;
    forgot: JSContainer;
    constructor(name: string);
}
declare namespace Login {
    class Login$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Login$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Login$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Login$3 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class PageNotFound extends HTMLTemplateContainer {
    constructor(name: string);
}
declare namespace PageNotFound {
    class PageNotFound$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Profile extends JSContainer {
    personal: FormPanel;
    shipping: FormPanel;
    constructor(name: string);
}
declare namespace Profile {
    class Profile$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Profile$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Register extends HTMLTemplateContainer {
    firstName: input.JSInput<string>;
    lastName: input.JSInput<string>;
    email: input.JSInput<string>;
    password: input.JSInput<string>;
    register: JSContainer;
    constructor(name: string);
    isOk(val: string): boolean;
}
declare namespace Register {
    class Register$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Search extends JSContainer {
    static TEMPLATE_SEARCH_SECTION: string;
    searchSection: HTMLTemplateContainer;
    results: JSContainer;
    txtSearch: input.JSInput<string>;
    btnSearch: JSContainer;
    constructor(name: string);
    setProducts(products: Array<Object>): void;
    fireListenerOnPage(name: string, evt: Event): void;
}
declare namespace Search {
    class Search$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Search$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Search$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Search$3 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Search$4 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Search$5 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Search$6 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class WishList extends HTMLTemplateContainer {
    body: JSContainer;
    contShopping: JSContainer;
    checkout: JSContainer;
    constructor(name: string);
    setProducts(products: Array<Object>): void;
}
declare namespace WishList {
    class ProductLine extends JSContainer {
        __parent: any;
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
        constructor(__parent: any, name: string);
        setProduct(p: Object): void;
        getStringValue(o: Object, field: string): string;
    }
    namespace ProductLine {
        class ProductLine$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ProductLine$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ProductLine$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ProductLine$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ProductLine$4 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
    class WishList$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class WishList$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class WishList$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class WishList$3 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class WishList$4 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class WishList$5 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class WishList$6 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class Portal extends JSContainer {
    loader: LoaderSkeletor;
    headerContainer: JSContainer;
    header: Header;
    topHeader: TopHeader;
    breadcrumb: BreadCrumbSection;
    page: Page;
    footer: Footer;
    wishList: IWishsList;
    cart: ICart;
    user: Object;
    constructor(name: string);
    getLoggedUser(): Object;
    fireChangePage(evt: Event): void;
    fireAddCart(evt: Event): void;
    fireAddWishList(evt: Event): void;
    fireRemoveWishList(evt: Event): void;
    fireLogin(evt: Event): void;
    notify(icon: string, title: string, message: string): void;
    open(pageName: string): void;
    getPage(): Page;
    getLoader(): LoaderSkeletor;
    getHeaderContainer(): JSContainer;
    getBreadcrumb(): Breadcrumb;
    setLoader(loader: LoaderSkeletor): void;
    setHeader(header: JSContainer): void;
    setPage(page: Page): void;
    getHeader(): Header;
    getTopHeader(): TopHeader;
    setBreadcrumbs(items: Array<Object>): void;
    setMainMenu(items: Array<Object>): void;
    setLogo(logo: string): void;
    setStoreName(name: string): void;
    setPhoneNumber(phone: string): void;
    setPageTitle(title: string): void;
    setSetting(sett: Setting): void;
    getFooter(): Footer;
    getWishList(): IWishsList;
    getCart(): ICart;
}
declare namespace Portal {
    class Portal$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Portal$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Portal$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class ProductListView extends JSContainer {
    static VIEW_GRID: string;
    static VIEW_LIST: string;
    view: string;
    rowSize: number;
    row: JSContainer;
    constructor(name: string);
    setView(view: string): void;
    getProducts(): Array<ProductBox>;
    setProducts(products: Array<Object>): void;
    setRowSize(size: number): void;
}
declare namespace ProductListView {
    class ProductListView$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductListView$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductListView$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class ProductPaginator extends JSContainer {
    pagination: ProductPaginator.Pagination;
    count: JSContainer;
    pageSize: number;
    total: number;
    page: number;
    numPages: number;
    static Event_OnChange: string;
    constructor(name: string);
    fireOnChange(evt: Event): void;
    start(): void;
    setCurrentPage(page: number): void;
    setValue$int(total: number): void;
    setPageSize(pageSize: number): void;
    setValue$int$int(total: number, pageSize: number): void;
    setValue(total?: any, pageSize?: any): any;
    getPagination(): ProductPaginator.Pagination;
    getPageSize(): number;
    getTotal(): number;
    getPage(): number;
    getNumPages(): number;
}
declare namespace ProductPaginator {
    class Pagination extends JSContainer {
        __parent: any;
        __previous: JSContainer;
        __next: JSContainer;
        currentPage: number;
        pages: number;
        constructor(__parent: any, name: string);
        setPages(pages: number): void;
        addItem$framework_components_JSContainer(item: JSContainer): ProductPaginator.Pagination;
        addItem(item?: any): any;
        addItem$int(page: number): ProductPaginator.Pagination;
        fireOnChange(evt: Event): void;
        next(): void;
        previous(): void;
        refresh(pages: number): void;
        setCurrentPage(pageNumber: number): void;
        getPages(): number;
        getCurrentPage(): number;
    }
    namespace Pagination {
        class Pagination$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Pagination$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class Pagination$2 implements api.EventListener {
            private page;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, page: any);
        }
    }
    class ProductPaginator$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class ProductTopFilter extends JSContainer {
    count: JSContainer;
    searchCount: JSContainer;
    collectionView: JSContainer;
    collectionGridView: JSContainer;
    productPerPageView: JSContainer;
    productPageFilter: JSContainer;
    gridView: JSContainer;
    listView: JSContainer;
    static Event_OnChangeView: string;
    static Event_OnChangeRowSize: string;
    static Event_OnChangePageSize: string;
    static Event_OnChangeSortBy: string;
    constructor(name: string);
    setCount(start: number, end: number, total: number): void;
}
declare namespace ProductTopFilter {
    class ProductTopFilter$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductTopFilter$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductTopFilter$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductTopFilter$3 implements api.EventListener {
        private pageSize;
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any, pageSize: any);
    }
    class ProductTopFilter$4 implements api.EventListener {
        private sort;
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any, sort: any);
    }
}
declare class Setting {
    pageTitle: string;
    logo: string;
    storeName: string;
    phoneNumber: string;
    menu: Array<Object>;
    fax: string;
    email: string;
    address: string;
    storeDescription: string;
    facebook: string;
    twitter: string;
    googleplus: string;
    instagram: string;
    rss: string;
    categories: Array<Object>;
    constructor();
}
declare class TopHeader extends JSContainer {
    left: ui.Col;
    right: ui.Col;
    storeName: JSContainer;
    phoneNumber: JSContainer;
    headerDropdown: ui.List;
    wishList: JSContainer;
    accountMenu: ui.List;
    constructor(name: string);
    setLoggedUser(o: Object): void;
    setStoreName(name: string): void;
    setPhoneNumber(phone: string): void;
}
declare namespace TopHeader {
    class TopHeader$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class TopHeader$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class TopHeader$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class TopHeader$3 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare namespace ui {
    class Grid extends JSContainer {
        row: ui.Row;
        constructor(name: string);
        getRow(): ui.Row;
        addCol(col: ui.Col): Grid;
        getCol(index: number): ui.Col;
    }
}
declare namespace ui {
    class List extends JSContainer {
        constructor(name: string, tag: string);
        addItem(item: JSContainer): JSContainer;
        addItems(...items: JSContainer[]): List;
    }
}
declare namespace ui {
    class Row extends JSContainer {
        constructor(name: string);
    }
}
declare namespace ui {
    enum Size {
        SMALL = 0,
        MEDIUM = 1,
        LARGE = 2,
        EXTRA_LARGE = 3,
        EXTRA_EXTRA_LARGE = 4,
        NONE = 5
    }
    /** @ignore */
    class Size_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare class LocalStorageCart extends AbstractLocalStorageProductList implements ICart {
    getDbKey(): string;
    constructor();
}
declare class LocalStorageWishList extends AbstractLocalStorageProductList implements IWishsList {
    /**
     *
     * @return {string}
     */
    getDbKey(): string;
    constructor();
}
declare class ProductBox extends ui.Col {
    box: JSContainer;
    front: JSContainer;
    back: JSContainer;
    title: JSContainer;
    description: JSContainer;
    price: JSContainer;
    product: Object;
    constructor(name: string);
    setDescription(description: string): void;
    setPrice(price: string): void;
    setTitle(title: string): void;
    setImageBack(url: string): void;
    setImageFront(url: string): void;
    setProduct(p: Object): void;
    getProduct(): Object;
    static createInstance(p: Object): ProductBox;
    setWidth(size?: any, width?: any): any;
    setWidth$int(width: number): ProductBox;
    showDescription(b: boolean): void;
}
declare namespace ProductBox {
    class ProductBox$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductBox$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class ProductBox$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class FormPanel extends ui.Grid {
    legend: JSContainer;
    form: Form;
    constructor(name: string);
    getForm(): Form;
    setLegend(le: string): void;
}
declare class Header extends ui.Grid {
    col: ui.Col;
    mainMenu: JSContainer;
    menuLeft: JSContainer;
    menuRight: JSContainer;
    logo: JSContainer;
    menu: MainMenu;
    iconMenu: ui.List;
    static Event_OnChangePage: string;
    constructor(name: string);
    setLogo(logo: string): void;
    addMenu$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, tag: string): Header;
    addMenu(name?: any, label?: any, tag?: any): any;
    setMenu(menu: Array<Object>): void;
    addMenu$java_lang_String$java_lang_String(name: string, label: string): Header;
}
declare namespace Header {
    class Header$0 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Header$1 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
    class Header$2 implements api.EventListener {
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any);
    }
}
declare class MainMenu extends ui.List {
    constructor(name: string);
    addItem$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, tag: string): MainMenu;
    addItem(name?: any, label?: any, tag?: any): any;
}
declare namespace MainMenu {
    class MainMenu$0 implements api.EventListener {
        private label;
        private name;
        __parent: any;
        /**
         *
         * @param {*} source
         * @param {Event} evt
         */
        performAction(source: api.Renderable, evt: Event): void;
        constructor(__parent: any, label: any, name: any);
    }
}
