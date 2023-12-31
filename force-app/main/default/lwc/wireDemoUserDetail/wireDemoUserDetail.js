import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
export default class WireDemoUserDetail extends LightningElement 
{
    userId = Id
    userDetail

    @wire(getRecord, {recordId:'$userId', fields:[NAME_FIELD,EMAIL_FIELD]})
    userDetailHandler({data,error})
    {
        if(data)
        {
              this.userDetail = data.fields
        }
        if(error)
        {
            console.error(error)
        }
    }

    @wire(getRecord, {recordId:'$userId', fields:[NAME_FIELD,EMAIL_FIELD]})
    userDetailProperty
}