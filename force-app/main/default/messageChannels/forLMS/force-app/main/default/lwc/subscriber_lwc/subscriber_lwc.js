import { LightningElement, track } from 'lwc';
import SAMPLEMSG from "@salesforce/messageChannel/SampleMessageChannel__c";
import {createMessageContext, releaseMessageContext, APPLICATION_SCOPE, subscribe,unsubscribe} from 'lightning/messageService';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class Subscriber_lwc extends LightningElement 
{
    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track accountId;
    @track objectApiName='Account';
    fields =[NAME_FIELD, INDUSTRY_FIELD, REVENUE_FIELD];

    connectedCallback()
    {
        this.subscribeMC();
    }
    subscribeMC()
    {
        if(this.subscription)
        {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMSG, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
    }
    handleMessage(message)
    {
       console.log('message:::'+JSON.stringify(message));
       this.accountId = message.recordId;
       this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}