import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder : FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
        mail: [null],
        message: [null]
    });
  }
  onSubmitForm() {
    console.log(this.form.value);
}
}
