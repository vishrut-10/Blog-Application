import { Component, OnInit } from '@angular/core';
import {AllBlogsService} from "../all-blogs.service";

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

  constructor(private blogs: AllBlogsService) { }
  blogs1: Object[];

  ngOnInit() {
    this.blogs.getBlogs().subscribe((data) => {
      this.blogs1 = data;
    });
  }

}
