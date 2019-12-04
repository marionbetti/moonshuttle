import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getAll().subscribe(resultat => {
      this.posts = resultat;
    });
  }

  onClickHome() {
    this.router.navigate(["/"]);
  }
}
