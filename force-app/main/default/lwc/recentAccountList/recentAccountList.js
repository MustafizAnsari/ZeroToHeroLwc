import { LightningElement, wire } from 'lwc';
import getRecentAccounts from '@salesforce/apex/accountListController.getRecentAccounts';

export default class RecentAccountList extends LightningElement {

     recentAccounts; 

    @wire(getRecentAccounts)
    wiredRecentAccounts({data,error})
    {
        if(data)
        {
             this.recentAccounts = data;
        }
        else if(error)
        {
           console.error('Error while fatching recent account:',error);
        }
    }
}