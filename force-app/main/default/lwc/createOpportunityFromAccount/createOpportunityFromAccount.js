import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class CreateOpportunityFromAccount extends NavigationMixin(
    LightningElement
) {
    @api accountId;
    opportunityFields = [];

    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    getObjectInfo({ data, error }) {
        if (data) {
            const fieldSetApiName = 'My_Field_Set';
            const fieldSet = data.fieldSets[fieldSetApiName];
            this.opportunityFields = fieldSet.fields.map(
                (field) => field.fieldPath
            );
        } else if (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        // Display an error toast message
        const event = new ShowToastEvent({
            title: 'Error',
            message: 'An error occurred while fetching object information.',
            variant: 'error',
        });
        this.dispatchEvent(event);
        console.error(error);
    }

    handleClick() {
        const opportunityRecord = {
            apiName: 'Opportunity',
            fields: {
                AccountId: this.accountId,
            },
        };
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new',
            },
            state: { defaultFieldValues: opportunityRecord },
        });
    }
}