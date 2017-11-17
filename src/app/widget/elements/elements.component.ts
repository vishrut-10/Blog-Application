import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  @Input() widgets;
  @Output() deleteWidget: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateWidget: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  deleteElement(widget){
   this.deleteWidget.emit(widget);
  }

  updateElement(widget){
    this.updateWidget.emit(widget);
  }
}
