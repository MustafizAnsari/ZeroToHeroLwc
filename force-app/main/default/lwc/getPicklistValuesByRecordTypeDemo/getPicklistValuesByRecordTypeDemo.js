import { LightningElement, wire } from 'lwc';
import {getPicklistValuesByRecordType, getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJ from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {

     typeOptions
     industryOptions
     selectedType
     selectedIndustry

     @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJ})
     objectinfo

    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJ , recordTypeId:'$objectinfo.data.defaultRecordTypeId'})
    picklistHandler({data,error}){
        if(data)
        {
             console.log(data)
             this.typeOptions = this.picklistGenetrator(data.picklistFieldValues.Type)
             this.industryOptions = this.picklistGenetrator(data.picklistFieldValues.Industry)
        }
        if(error)
        {
            console.error(error)
        }
    }

    picklistGenetrator(data)
    {
        return data.values.map(item=>({"label":item.label,"value":item.value}))
    }

    handleChange(event)
    {     const{name,value} = event.target
                console.log(name + '==>' + value)
       if(name === 'type')
       {
        this.selectedType = value
       }
       if(name === 'industry')
       {
        this.selectedIndustry = value
       }
    }
}