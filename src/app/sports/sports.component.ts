import { Component, OnInit } from '@angular/core';
import {AllBlogsService} from "../all-blogs.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private blogs: AllBlogsService) { }
  blogs1: Object[];

  ngOnInit() {
    this.blogs.getBlogs().subscribe((data) => {
      this.blogs1 = data;
    });
  }

}
