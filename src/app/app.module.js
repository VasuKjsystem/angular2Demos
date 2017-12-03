"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var product_component_1 = require("./products/product.component");
var inventory_component_1 = require("./inventory/inventory.component");
var notFound_component_1 = require("./notFound.component");
var router_1 = require("@angular/router");
var productform_component_1 = require("./products/productform.component");
var appRoutes = [
    { path: 'Product', component: product_component_1.AppProduct },
    { path: 'Inventory', component: inventory_component_1.AppInventory },
    { path: 'addProduct', component: productform_component_1.ProductFormComponent },
    { path: '***', component: notFound_component_1.PageNotFound }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, product_component_1.AppProduct, inventory_component_1.AppInventory, notFound_component_1.PageNotFound, productform_component_1.ProductFormComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map