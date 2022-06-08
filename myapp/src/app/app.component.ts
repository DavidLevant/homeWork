import { Component } from '@angular/core';
import {PlayingCard} from "./PlayingCard";

@Component({
  selector: 'app-root',
  template: `<h1>Hello world! {{title}} <br/>
    <input [(ngModel)]="myinput"><br/>
    <input type = 'button' (click)=doSomething(myinput)><br/>
    {{myoutput}}<br/>
    {{card.cardVal}} of {{card.suit}} <br/>
    {{card1.cardVal}} of {{card1.suit}}.</h1>
  Card: <input [(ngModel)]="card.cardVal">
  <ul><li *ngFor="let card of cards">{{card.cardVal}}</li></ul>
  <input [(ngModel)]="myinput1">
  <input type='button' (click)=doSomething1(myinput1)>
  {{myoutput1}}\
  <table>
    <tr *ngFor="let card of cards">
      <td>
        <ul>
          <li> {{card.cardVal}} </li>
        </ul>
      </td>
      <td>
        <ul>
          <li> {{card.suit}} </li>
        </ul>
      </td>
    </tr>
  </table>\`
  <ul *ngFor="let item of firstNames; let i = index">
    <li>{{"Item" + i + ":"+item}}</li>
  </ul>
  <div *ngIf="selectedCard">
    <h2>{{selectedCard.cardVal}} **</h2>
    <input [(ngModel)]="selectedCard.cardVal" placeholder="name" />
  </div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'This is Angular';
  firstNames = ['abe', 'any', 'al'];
  myinput ="";
  myinput1 ="";
  myoutput = "";
  myoutput1 = "";




  card: PlayingCard = {
    cardVal:'Ace',
    suit: "Spades"

  };
  card1: PlayingCard ={
    cardVal: "Queen",
    suit: "Diamonds"
  };

  cards:PlayingCard[] =[
    { cardVal: "Ace", suit: "Spades" },
    {cardVal: "Two", suit: "Clubs"},
    {cardVal: "Six", suit:"Hearts"},
  ];

  doSomething(someContent: string){
    alert(someContent);
    this.myoutput = someContent;
  }
  doSomething1(someContent: string){
    alert(someContent);
    this.myoutput1 = someContent;
  }
  selectedCard: PlayingCard | undefined;
  onSelect(card: PlayingCard) {
    this.selectedCard = card;
  }
}
