import { Component, OnInit } from '@angular/core';
import {AllBlogsService} from "../all-blogs.service";

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  constructor(private blogs: AllBlogsService) { }
  blogs1: Object[];

  ngOnInit() {
    this.loadData()

  }

  loadData() {
    this.blogs.getBlogs().subscribe((data) => {
      this.blogs1=data;
    })
  }

  markAsFavourite(blog) {
    console.log("marked as favourite");
    blog.favourite = true;
    this.blogs.updateData(blog).subscribe((data) => {
     console.log(data);
    })
  }

}
