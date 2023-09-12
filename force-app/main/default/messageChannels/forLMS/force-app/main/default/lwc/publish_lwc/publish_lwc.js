import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import SAMPLEMSG from "@salesforce/messageChannel/SampleMessageChannel__c";
import {createMessageContext, releaseMessageContext, publish} from 'lightning/messageService';

export default class Publish_lwc extends LightningElement 
{
    context = createMessageContext();
    @track accountList;

    connectedCallback()
    {
        getAccounts()
           .then(result =>{
            this.accountList = result;
            })
           .catch(error =>{
            this.accountList = error;
              });
    }

    handleClick(event)
    {
       event.preventDefault();
       const message = {
        recordId: event.target.dataset.value,
        recordData: {value: "message from Lightning web component"}
       };
       publish(this.context, SAMPLEMSG, message);
    }
}