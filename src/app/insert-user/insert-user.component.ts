import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceService } from "../services/user-service.service";
import { User } from "../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-insert-user",
  templateUrl: "./insert-user.component.html",
  styleUrls: ["./insert-user.component.css"]
})
export class InsertUserComponent implements OnInit {
  insertUserForm: FormGroup;
  user_arr: User[];
  constructor(
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertUserForm = this.fb.group({
      user_id: ["", [Validators.required, Validators.email]],
      user_name: ["", Validators.required],
      user_mobile: ["", Validators.required]
    });
  }

  onSubmit() {
    console.warn(this.insertUserForm.value);
    this._user.insertUser(this.insertUserForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/view"]);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally");
      }
    );
  }
}
