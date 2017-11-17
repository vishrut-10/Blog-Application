import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { HomeComponent } from './widget/home/home.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ElementsComponent } from './widget/elements/elements.component';
import {WidgetService} from "./widget.service";
import {AllBlogsComponent} from "./all-blogs/all-blogs.component";
import {AllBlogsService} from "./all-blogs.service";
import { MyFavouritesComponent } from './my-favourites/my-favourites.component';
import { SportsComponent } from './sports/sports.component';
import { ReligionComponent } from './religion/religion.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { OthersComponent } from './others/others.component';


const approutes = [
  {path: "my-blogs", component: WidgetComponent},
  {path: "all-blogs", component: AllBlogsComponent},
  {path: "favourite-blogs", component: MyFavouritesComponent},
  {path: "sports", component: SportsComponent},
  {path: "religion", component: ReligionComponent},
  {path: "business", component: BusinessComponent},
  {path: "technology", component: TechnologyComponent},
  {path: "others", component: OthersComponent},
  {path: "**", component: AllBlogsComponent},
  {path: "", redirectTo: '/all-blogs', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    HomeComponent,
    ElementsComponent,
    AllBlogsComponent,
    MyFavouritesComponent,
    SportsComponent,
    ReligionComponent,
    BusinessComponent,
    TechnologyComponent,
    OthersComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [WidgetService, AllBlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
