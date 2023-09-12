import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html'
import signUpTemplate from './signUpTemplate.html'
import renderTemplate from './renderMethod.html'

export default class RenderMethod extends LightningElement 
{
    selectedBtn=''
    render()
    {
        return this.selectedBtn === 'SignUp' ? signUpTemplate :
                this.selectedBtn === 'SignIn' ? signInTemplate :
                renderTemplate
    }

    handleOnclick(event)
    {
        this.selectedBtn = event.target.label
    }

    submithandler(event)
    {
        console.log(`${event.target.label} Successfully !!`)
    }
}