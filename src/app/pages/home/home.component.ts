import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Contact!: FormGroup;
  nombres!:string;

  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.Contact = this.formBuilder.group({
      name:['', 
        [
          Validators.required,
          Validators.email
        ]
      ]
    })

  }
}
