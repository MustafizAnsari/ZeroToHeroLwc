import { LightningElement } from 'lwc';
import { deleteRecord} from 'lightning/uiRecordApi'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class DeleteRecordCRUD extends LightningElement {

       recordId
    handleOnChange(event)
    {
          this.recordId = event.target.value
    }
    deleteHandler()
    {
          deleteRecord(this.recordId).then((result)=>{
               console.log(result)
               this.showToast("Success","Delete Successfully",'success')
          }).catch(error=>{
              console.error(error)
              this.showToast("Error","Deletion failed",'error')
          })
    }

    showToast(title,message,variant)
    {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}