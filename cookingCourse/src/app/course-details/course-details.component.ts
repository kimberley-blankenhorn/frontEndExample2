import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { courses } from '../courses';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
	course;
  constructor(private route: ActivatedRoute, private cart: CartService, private toastr: ToastrService) {}

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
  		this.course = courses[+params.get('courseId')];
  	})
  }

  addToCart(item){
    this.cart.addToCart(item);
    this.toastr.success('The course has been added to the cart.');
  }
}
