import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/accountController.findAccounts'
export default class ApexImperativeWithParams extends LightningElement {

    searchKey=''
    accounts
    timer
    searchHandler(event)
    {
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
       this.timer = setTimeout(()=>{
                      this.callApex()
        }, 1000)
       
    }

    callApex()
    {
        findAccounts({searchByKey:this.searchKey})
        .then(result=>{
                     this.accounts = result
        }).catch(error=>{
                console.error(error)
        })
    }
}