import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {
  form!: FormGroup;
  mailRegExp! : RegExp;
  constructor(private formBuilder : FormBuilder, private mailService : MailService){}
  ngOnInit(): void {
    this.mailRegExp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    this.form = this.formBuilder.group({
        mail: [null, [Validators.required, Validators.pattern(this.mailRegExp)]],
        message: [null, Validators.required]
    });
  }
  onSubmitForm() /* : Observable<any> */ {
    return this.mailService.sendMail(this.form.value);
    // this.formValidate = true;
  }

}
