import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToRecord extends NavigationMixin(LightningElement)
{
    recordViewMode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035j00000x6oDjAAI',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

    recordEditMode()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035j00000x6oDjAAI',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}