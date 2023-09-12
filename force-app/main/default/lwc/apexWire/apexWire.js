import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/accountController.getAccountList';
export default class ApexWire extends LightningElement {

    accountList
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountHandler({data,error})
    {
        if(data)
        {
            this.accountList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :
                              item.Type === 'Customer - Direct' ? 'Direct' : '----------'
                    return{...item, newType}
            })
        }
        if(error)
        {
            console.error(error)
        }
    }
}