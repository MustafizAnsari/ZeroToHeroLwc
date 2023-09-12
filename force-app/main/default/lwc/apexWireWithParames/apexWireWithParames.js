import { LightningElement, wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/accountController.filterAccountByType';

export default class ApexWireWithParames extends LightningElement {

    selectedType=''
    @wire(filterAccountByType,{Type:'$selectedType'})
    filteredAccounts

    get TypeOptions(){

        return[
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }

    typeHandler(event)
    {
          this.selectedType = event.target.value
    }
}