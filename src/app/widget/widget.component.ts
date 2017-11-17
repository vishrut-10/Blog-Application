import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../widget.service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  items: Object[];

  constructor(private request: WidgetService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.request.loadData()
      .subscribe((data) => {
        this.items = data;
      })
  }

  addWidget(element){
    var widget={
      name: element.name,
      desc: element.desc,
      postedby: 'vishrut',
      favourite: false,
      category: element.cat
    }
    console.log(widget);
    this.request.postData(widget)
      .subscribe((data) =>{
      this.items.push(data);
      this.loadData();
      })
  }

  deleteWidget(element){
    this.request.deleteData(element.id)
      .subscribe((data) => {
          this.loadData();
      })
  }
}
