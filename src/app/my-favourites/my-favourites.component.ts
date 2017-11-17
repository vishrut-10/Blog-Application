import { Component, OnInit } from '@angular/core';
import {AllBlogsService} from "../all-blogs.service";

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.css']
})
export class MyFavouritesComponent implements OnInit {

  constructor(private blogs:AllBlogsService ) { }

  blogs1: Object[];

  img: string;

  ngOnInit() {
    this.blogs.getBlogs().subscribe((data) => {
      this.blogs1 = data;
    });
  }
}
