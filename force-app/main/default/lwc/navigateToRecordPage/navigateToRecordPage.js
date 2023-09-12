import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement)
{
    naviateToRecord()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    recordsWithDefaultValues()
    {
     const defaultValue = encodeDefaultFieldValues({
        FirstName:'Zero',
        LastName:'Hero',
        LeadSource:'Other'
      })

      this[NavigationMixin.Navigate]({
           type:'standard__objectPage',
           attributes:{
             objectApiName:'Contact',
             actionName:'new'
           },
           state:{
            defaultFieldValues: defaultValue
           }
      })
    }

    navigateToListView()
    {
        this[NavigationMixin.Navigate]({
             type:'standard__objectPage',
             attributes:{
                 objectApiName:'Account',
                  actionName:'list'
               },
             state:{
                filterName:'recent'
             }
        })
    }
}