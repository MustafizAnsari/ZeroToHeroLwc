import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/accountController.getAccountList';
export default class ApexImperativeDemo extends LightningElement {

    accounts
    handleClick()
    {
        getAccountList().then(result=>{
                   this.accounts= result
        }).catch(error=>{
            console.error(error)
        })
    }
}