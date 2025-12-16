import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public userForm: FormGroup | undefined;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.createLoginForm();
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      bio: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
    if (this.userForm) {
      this.userService.createUser({
        firstname: this.userForm.value.firstname,
        lastname: this.userForm.value.lastname,
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        bio: this.userForm.value.bio,
        password: this.userForm.value.password,
      }).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}
