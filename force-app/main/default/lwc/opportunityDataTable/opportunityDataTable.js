// Create a lightning data table component on home page which shows all the new Opportunities
//   created today and there amount is greater than 10 lakhs

import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/opportunityController.getOpportunities';

const columns = [
    {label:'Opportunity Name', fieldName:'Name', type:'text'},
    {label:'Amount', fieldName:'Amount', type:'currency', typeAttributes: {currencyCode:'INR'}}
]
export default class OpportunityDataTable extends LightningElement 
{ 
    column = columns
    opportunities =[];

   @wire(getOpportunities)
   wiredOpportunities({data,error})
   {
    if(data){

          this.opportunities = data;

    }else if(error){
        
        console.error(error);
    }
   }
}