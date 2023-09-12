import { LightningElement } from 'lwc';
import DESCRIPTION from '@salesforce/label/c.description'
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne'
export default class CustomLebalDemo extends LightningElement 
{
    LABELS= {
            description: DESCRIPTION ,
            descriptionOne: DESCRIPTION_ONE
    }
}