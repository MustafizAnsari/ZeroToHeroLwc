import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToTab extends NavigationMixin(LightningElement) {
    
    navigateToTabPage()
    {
       this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Styling_In_LWC'
            }
       })
    }
}