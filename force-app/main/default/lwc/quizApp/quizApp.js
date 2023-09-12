import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement 
{
    selected={}   //for storing answers
     correctAnswers = 0  //to show the number of correct answer
     isSubmitted =false  // to show the result

    myQuestions =[
        {
            id:"Question1",
            question:"Which one of the following is not templete loop ?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map Loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWc component folder ?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the not directive ?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        },
    ]

    get allNotSelected()
    {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }
    get isScoredFull()
    {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
           'slds-text-color_success':'slds-text-color_error'}`
    }
    handleOnchange(event)
    {
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const {name,value} =event.target
        this.selected={...this.selected, [name]:value}
    }

    submitHandler(event)
    {
       event.preventDefault()
      let correct = this.myQuestions.filter(item=>this.selected[item.id]=== item.correctAnswer)
      this.correctAnswers = correct.length
      this.isSubmitted = true
      console.log("this.correctAnswers", this.correctAnswers)
    }

    resetHandler()
    {
       this.selected ={}
       this.correctAnswers = 0
       this.isSubmitted = false
    }
}