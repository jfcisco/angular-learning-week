import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    phoneNumber: ['', [
      Validators.required,
      Validators.pattern(/\+639[0-9]{9}$/)
    ]],
    message: ['', [
      Validators.required
    ]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get message() {
    return this.contactForm.get('message');
  }

  submit() {
    if (this.contactForm.invalid) return;

    console.log(`Submitted: ${JSON.stringify(this.contactForm.value)}`);
  }
}
