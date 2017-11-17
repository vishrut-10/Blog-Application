import { Component, OnInit } from '@angular/core';
import {AllBlogsService} from "../all-blogs.service";

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor(private blogs: AllBlogsService) { }
  blogs1: Object[];

  ngOnInit() {
    this.blogs.getBlogs().subscribe((data) => {
      this.blogs1 = data;
    });
  }

}
