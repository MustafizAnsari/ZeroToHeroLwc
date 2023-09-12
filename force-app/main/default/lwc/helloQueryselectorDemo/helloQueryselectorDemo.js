import { LightningElement } from 'lwc';

export default class HelloQueryselectorDemo extends LightningElement 
{
    userNames=["john","smith","nik","mike"]

    fetchdetailhandler()
    {
        const elem = this.template.querySelector('h1')
        elem.style.border="1px solid red"
        console.log(elem.innerText)

        const userElements =this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })
        
        //lwc:manual demo
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>hey i am Child element</p>'

    }
}