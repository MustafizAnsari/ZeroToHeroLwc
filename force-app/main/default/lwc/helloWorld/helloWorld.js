import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement 
{
    //Two Way data Binding
       fullName ="Zero To Hero";
       title ="aura";

       changeHandler(event)
       {
          this.title = event.target.value
       }
   //Track Property
      @track address=
       {
         city:'Jalna' ,
         PostCode:431203 ,
         country:'India'

       }

       trackHandler(event)
       {
         this.address.city= event.target.value 
       }

    //Getter
    users=["John","Mike","Smith"]

    num1 = 10
    num2 = 20

    get userNames()
    {
         return this.users[0]
    }

    get multiply()
    {
        return this.num1*this.num2
    }

}