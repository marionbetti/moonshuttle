import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { ServiceService } from "./service.service";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: " ", component: PostListComponent },
      { path: "posts", component: PostListComponent },
      { path: "new", component: NewPostComponent }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
