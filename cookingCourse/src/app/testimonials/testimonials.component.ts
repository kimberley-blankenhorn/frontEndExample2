import { Component, OnInit } from '@angular/core';
import { testimonials } from '../testimonials.js';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  array = testimonials;
  constructor() { }

  ngOnInit(): void {
    console.table(this.array);
  }

}
