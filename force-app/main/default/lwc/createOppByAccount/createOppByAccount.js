import { LightningElement ,api,track,wire} from 'lwc';
import getFieldSet from '@salesforce/apex/FieldSetController.getFieldSet';
import {createRecord} from 'lightning/uiRecordApi'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import {CloseActionScreenEvent} from 'lightning/actions'
export default class CreateOppByAccount extends LightningElement {

    @track fields=[]
    @api recordId

    @wire(getFieldSet,{objectName:'Opportunity',fieldSetName:'OppByButton'})
    wireFields({data,error})
    {
         if(data)
         {
              this.fields =JSON.parse(data)
              console.log(this.fields)
         }
          else if(error)
         {
            this.error = error
         }
    }

    handleSubmit(event)
    {
      event.preventDefault();
      const fields ={}
      this.template.querySelectorAll('lightning-input-field').forEach((input)=>{
        fields[input.name] = input.value
        fields.AccountId = this.recordId
        console.log(fields)
      })
      const recordInput={apiName:'Opportunity',fields}

      createRecord(recordInput).then((result)=>{
            this.dispatchEvent(new CloseActionScreenEvent());
            const recordId = result.id;
            this.toastMessage =`Opportunity Created Successfully. Record Id: ${recordId}`
            this.showToast('Success',this.toastMessage, 'success');
         })
         .catch((error)=>{
            this.error = error
            console.log('Error creating opportunity', error.body.message)
            this.showToast('Error',error.body.message,'error')
         })
    }

    handleCancel()
    {
             this.dispatchEvent(new CloseActionScreenEvent())
    }
    showToast(title,message,variant)
    {
      const event =  new ShowToastEvent({
            title: title,
            message: message,
            variant: variant})

           this.dispatchEvent(event)
    }
}