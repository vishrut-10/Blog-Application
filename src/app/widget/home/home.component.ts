import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {WidgetService} from "../../widget.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name;
  desc;
  category;
  buttonName = 'ADD';
  item;

  @Input() items;
  @Output() addWidget: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteWidget: EventEmitter<any> = new EventEmitter<any>();

  constructor(private request: WidgetService) { }

  ngOnInit() {
  }

  addElement(name,desc, cat)
  {
    if(this.buttonName=='UPDATE')
    {
      this.item.name= name;
      this.item.desc= desc;
      this.item.category = cat;
      this.updateElement(this.item);
    }
    else {
      this.addWidget.emit({name, desc, cat});
      this.name= "";
      this.desc= "";
      this.category = "";
    }

  }

  deleteElement(widget){
    this.deleteWidget.emit(widget);
  }

  updateElement(widget){
    this.request.updateData(widget)
      .subscribe((data) => {
        this.buttonName = 'ADD';
        this.name="";
        this.desc= "";
        this.category = "";
      })
  }

  loadUpdate(widget){
    this.name= widget.name;
    this.desc= widget.desc;
    this.category = widget.category;
    this.buttonName='UPDATE';
    this.item = widget;
  }
}
