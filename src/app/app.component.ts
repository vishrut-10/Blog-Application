import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  link = {
    allBlogs: ["/all-blogs"],
    favouriteBlogs: ["/favourite-blogs"],
    popularBlogs: ["/popular-blogs"],
    myBlogs: ["/my-blogs"],
    sports: ["/sports"],
    religion: ["/religion"],
    business: ["/business"],
    technology: ["/technology"],
    others: ["/others"]
  }
}
