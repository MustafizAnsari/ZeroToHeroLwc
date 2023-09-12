import { LightningElement, api, wire } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
export default class GetRecordDemo extends LightningElement {

    phone
    owner
    annualRevenue
    @api recordId

    @wire(getRecord,{recordId:'$recordId', fields:[PHONE_FIELD, OWNER_FIELD, ANNUALREVENUE_FIELD]})
    accounthandler({data})
    {
        if(data)
        {
            console.log(data)
            this.phone = getFieldValue(data, PHONE_FIELD)
            this.owner = getFieldValue(data, OWNER_FIELD) 
            this.annualRevenue = getFieldDisplayValue(data, ANNUALREVENUE_FIELD) 
        }
    }
}