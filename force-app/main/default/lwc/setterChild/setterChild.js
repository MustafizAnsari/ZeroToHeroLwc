import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement 
{
    userInfo

    @api 
    get detail()
    {
       return this.userInfo
    }
    set detail(data)
    {
        let newAge = data.age*2
         this.userInfo = {...data, age:newAge,"location":"Melbourne"}
    }
}