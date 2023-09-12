import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class RecordFormLds extends LightningElement 
{
    @api recordId
    @api objectApiName
    objectName = ACCOUNT_OBJECT
    fieldList =[NAME_FIELD, REVENUE_FIELD, RATING_FIELD, INDUSTRY_FIELD]

    successHandler(event)
    {
       console.log(event.detail.id)
      const toastEvent = new ShowToastEvent({
              title:"Account created",
              message:"Record Id:"+ event.detail.id,
              variant:"success"
       })
       this.dispatchEvent(toastEvent);
    }
}