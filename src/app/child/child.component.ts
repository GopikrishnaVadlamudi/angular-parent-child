import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styles: [`
  div {
  background: red;
}`]
})
export class ChildComponent  {
  @Input() data; //trasfer of data from parent to child
  @Output() close: EventEmitter<any> = new EventEmitter();// child to parent
  name = 'Angular';

  triggerevent(){
    this.close.emit('passing to parent');
  }
}

