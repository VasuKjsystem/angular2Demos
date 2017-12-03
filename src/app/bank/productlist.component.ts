import { Component } from '@angular/core';


@Component ({
   selector: 'my-app',
   templateUrl: 'products-list.html', 
   

})
export class productlist  {
    getServiceData : string;
    postServiceData: string;
    
    periods = [{"name":"5 days"},{"name":"30 Days"},{"name":"6 months"},{"name":"1 year"}];
    currenys = [{"name": "INR"},{"name":"BRL"}];
    

}
