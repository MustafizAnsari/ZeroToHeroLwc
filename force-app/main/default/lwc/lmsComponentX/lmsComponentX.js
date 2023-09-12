import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe,unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    receiveMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback()
    {
        this.subscribeMessage()
    }

    subscribeMessage()
    {
       this.subscription = subscribe(this.context,SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message)
    {
        this.receiveMessage = message.lmsData.value? message.lmsData.value : 'NO Message Published'
    }

    unsubscribeMessage()
    {
       unsubscribe(this.subscription)
       this.subscription = null
    }

    
}