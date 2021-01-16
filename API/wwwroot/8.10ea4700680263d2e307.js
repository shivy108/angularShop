(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(t,r,e){"use strict";e.r(r),e.d(r,"OrdersModule",function(){return v});var s=e("ofXK"),i=e("tyNb"),o=e("fXoL"),c=e("lJxs"),b=e("AytR"),n=e("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.baseUrl=b.a.apiUrl}getAllOrders(){return this.http.get(this.baseUrl+"orders").pipe(Object(c.a)(t=>t,t=>{console.log(t)}))}getOrderDetails(t){return this.http.get(this.baseUrl+"orders/"+t)}}return t.\u0275fac=function(r){return new(r||t)(o.Wb(n.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,r){if(1&t&&(o.Sb(0,"tr",6),o.Sb(1,"th"),o.Ac(2),o.Rb(),o.Sb(3,"td"),o.Ac(4),o.dc(5,"date"),o.Rb(),o.Sb(6,"td"),o.Ac(7),o.dc(8,"currency"),o.Rb(),o.Sb(9,"td"),o.Ac(10),o.Rb(),o.Rb()),2&t){const t=r.$implicit;o.kc("routerLink","/orders/",t.id,""),o.Bb(2),o.Cc("# ",t.id,""),o.Bb(2),o.Bc(o.fc(5,5,t.orderDate,"medium")),o.Bb(3),o.Bc(o.fc(8,8,t.total,"CHF ")),o.Bb(3),o.Bc(t.status)}}let l=(()=>{class t{constructor(t){this.orderService=t,this.orders=[]}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getAllOrders().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(o.Mb(a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"table",3),o.Sb(4,"thead",4),o.Sb(5,"tr"),o.Sb(6,"th"),o.Ac(7,"Order"),o.Rb(),o.Sb(8,"th"),o.Ac(9,"Date"),o.Rb(),o.Sb(10,"th"),o.Ac(11,"Total"),o.Rb(),o.Sb(12,"th"),o.Ac(13,"Status"),o.Rb(),o.Rb(),o.Rb(),o.Sb(14,"tbody"),o.yc(15,d,11,11,"tr",5),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(15),o.ic("ngForOf",r.orders))},directives:[s.l,i.d],pipes:[s.f,s.d],styles:[""]}),t})();var u=e("tc9g"),p=e("GJcC"),h=e("PoZw");function f(t,r){if(1&t&&(o.Sb(0,"div",2),o.Sb(1,"div",3),o.Nb(2,"app-basket-summary",4),o.Rb(),o.Sb(3,"div",5),o.Nb(4,"app-order-totals",6),o.Rb(),o.Rb()),2&t){const t=o.cc();o.Bb(2),o.ic("items",t.order.orderItems)("isBasket",!1)("isOrder",!0),o.Bb(2),o.ic("shippingPrice",t.order.shippingPrice)("subtotal",t.order.subtotal)("total",t.order.total)}}const S=[{path:"",component:l},{path:":id",component:(()=>{class t{constructor(t,r,e){this.route=t,this.breadcrumbService=r,this.ordersService=e,this.breadcrumbService.set("@OrderDetails","")}ngOnInit(){this.ordersService.getOrderDetails(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{this.order=t,this.breadcrumbService.set("@OrderDetails",`Order# ${t.id} - ${t.status}`)},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(o.Mb(i.a),o.Mb(u.c),o.Mb(a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-order-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(t,r){1&t&&(o.Sb(0,"div",0),o.yc(1,f,5,6,"div",1),o.Rb()),2&t&&(o.Bb(1),o.ic("ngIf",r.order))},directives:[s.m,p.a,h.a],styles:[""]}),t})(),data:{breadcrumb:{alias:"OrderDetails"}}}];let g=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(r){return new(r||t)},imports:[[s.c,i.g.forChild(S)],i.g]}),t})();var m=e("PCNd");let v=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(r){return new(r||t)},imports:[[s.c,g,m.a]]}),t})()}}]);