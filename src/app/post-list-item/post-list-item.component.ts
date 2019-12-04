import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent implements OnInit {
  message;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("_id");

      this.service.getOne(id).subscribe(resultat => {
        this.message = resultat;
        console.log(resultat);
        this.router.navigate(["/posts/posts._id"]);
      });
    });
  }
  // delete
  onClickDelete(message) {
    this.service.delete(message._id).subscribe(resultat => {
      console.log(resultat);
      const index = this.message.indexOf(message);
      this.message.splice(index, 1);
    });
  }
  // update
  onClickUpdate(message) {
    this.router.navigate(["/posts", message._id]);
  }
  onClickHome() {
    this.router.navigate(["/"]);
  }
}
