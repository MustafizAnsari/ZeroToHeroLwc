import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement 
{
    showModal = false
     msg
    handleOnclick()
    {
        this.showModal = true
    }

    closeonHandler(event)
    {
        this.msg = event.detail
        this.showModal = false
    }
}