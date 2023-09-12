import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToTab extends NavigationMixin(LightningElement) {
    
    navigateToLwc()
    {   var defination={
          componentDef:'c:navigationTarget',
          attributes:{
               recordId:'7878956463258'
          }
    }
       this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
       })
    }
}