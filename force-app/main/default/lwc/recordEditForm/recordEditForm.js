import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import ID_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
export default class RecordEditForm extends LightningElement 
{
    objectName = CONTACT_OBJECT
    fields = {
        accountField:ID_FIELD,
        nameField:NAME_FIELD,
        titleField:TITLE_FIELD,
        emailField:EMAIL_FIELD,
        phoneField:PHONE_FIELD
    }

    handleReset()
    {
       const inputFields = this.template.querySelectorAll('lightning-input-field')
       if(inputFields)
       {
        Array.from(inputFields).forEach(field=>{
         field.reset()
        })
       }
    }
}