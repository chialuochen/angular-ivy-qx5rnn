import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
  public header = "my header";
  public body = "my paragragh";

  public onOpenClick(){
    console.log('hello');
  }
}