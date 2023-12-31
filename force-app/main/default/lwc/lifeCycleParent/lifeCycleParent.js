import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement 
{
      isChildVisible = false
    constructor()
    {
        super()
        console.log('Parent constructor called')
    }

    connectedCallback()
    {
        console.log('Parent connectedCallback called')
    }

    renderedCallback()
    {
        console.log('Parent renderedCallback called')
    }

    handleOnClick()
    {
      this.isChildVisible = !this.isChildVisible
    }
}