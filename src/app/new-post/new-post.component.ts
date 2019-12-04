import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "../service.service";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent {
  isOk = false;
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {}

  onSubmitNew($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const message = f.value;
      // appeler l'API pour faire le POST
      this.service.create(message).subscribe(result => {
        console.log(result);
        this.isOk = true;
      });
      //this.router.navigate(['/']);
    }
  }
}
