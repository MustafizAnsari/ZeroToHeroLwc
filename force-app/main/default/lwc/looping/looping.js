import { LightningElement } from 'lwc';

export default class Looping extends LightningElement 
{
    carlist= ["Audi","BMW","Ford","Maruti","Mercedes"];

    ceoList= [
        {
             id:1, company:"Google", name:"Sunder Pichai" 
         },
        {
            id:2, company:"Apple Inc.", name:"Tim Cook"
        },
        {
            id:3 , company:"Facebook", name:"Mark Zukerberg"
        },
        {
            id:4 , company:"Amazon" , name:"Jeff Bezos"
        }
    ]
}