import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ToastNotification extends LightningElement 
{
    showToast(title, message, variant,mode,)
    {      const event = new ShowToastEvent({
                           title,
                           message,
                           variant,
                           mode,
                           messageData:['Salesforce', {url:'https://www.salesforce.com/', label:'Click here' } ]
                         })

             this.dispatchEvent(event)
    }

    handleSuccess()
    {
        this.showToast('Success', '{0} Account Created !! {1}', 'success','sticky')
    }
    handleError()
    {
        this.showToast('Error !!', 'Account Creation Faild', 'error')
    }
    handleWarning()
    {
        this.showToast('Warning !!', 'Possword 15 Charesterstics', 'warning')
    }
    handleInfo()
    {
        this.showToast('Info', 'Update is available', 'info')
    }
}