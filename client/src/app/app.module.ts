import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './home/newsfeed/newsfeed.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { GithubComponent } from './home/github/github.component';
import { SearchComponent } from './home/search/search.component';
import { NewsfeedItemComponent } from './home/newsfeed/newsfeed-list/newsfeed-item.component';
import { NewsfeedListComponent } from './home/newsfeed/newsfeed-list/newsfeed-list.component';
import { GithubListComponent } from './home/github/github-list/github-list.component';
import { GithubItemComponent } from './home/github/github-list/github-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsfeedComponent,
    ProjectsComponent,
    GithubComponent,
    SearchComponent,
    NewsfeedItemComponent,
    NewsfeedListComponent,
    GithubListComponent,
    GithubItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
