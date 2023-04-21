import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {
  form!: FormGroup;
  mailRegExp! : RegExp;
  constformValidAction! : any;
  constructor(
    private formBuilder : FormBuilder,
    private mailService : MailService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.mailRegExp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    this.form = this.formBuilder.group({
        mail: [null, [Validators.required, Validators.pattern(this.mailRegExp)]],
        message: [null, Validators.required]
    });
  }
  onSubmitForm() /* : Observable<any> */ {
    this.constformValidAction = (status:number) => {
      console.log(status);
      if (status === 2) {
        alert('votre mail a bien été transmis');
        this.form.setValue({mail: null, message: null});
        this.router.navigateByUrl('');
      } else {
        alert('un problème est survenu. il se peut que cela soit dû à un problème de saisit ou de connexion.');
      }
    }
    this.mailService.sendMail(this.form.value, this.constformValidAction);
    // this.formValidate = true;
  }

}
