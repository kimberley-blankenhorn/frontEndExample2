import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = new FormGroup({
    firstName: new FormControl(''),
    email:new FormControl(''),
    message: new FormControl(''),
    conditions: new FormControl(''),
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      var a = this.contact.value;
      console.table(a);
      if(a.conditions == true){
      window.alert(`An email will be sent soon to: ${a.email}`);
      this.contact.reset();
      }
      else{
        window.alert('You have to accept the conditions first!');
      }
    }
  }