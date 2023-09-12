import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement 
{
    isVisible = false;
     name
    handleOnClick()
    {
        this.isVisible = true;
    }

    handleOneyup(event)
    {
        this.name= event.target.value;
    }
    get helloMethod()
    {
          return this.name === 'Hello'
    }
}