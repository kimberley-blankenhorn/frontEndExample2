import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CartComponent } from './cart/cart.component';
import { NewsComponent } from './news/news.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


const routes: Routes = [
	{
		path : "", component : HomeComponent
	},
	{
		path: 'contact', component: ContactComponent
	},
	{
		path: 'courses', component: CoursesComponent
	},
	{
		path: 'testimonials', component: TestimonialsComponent
	},
	{
		path: 'cart', component: CartComponent
	},
	{
		path: 'news', component: NewsComponent
	},{
		path : "courses/:courseId", component : CourseDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
