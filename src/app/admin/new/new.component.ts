import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  categories: Object;

  constructor(private service: BlogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getData('categories').subscribe( (categories) => {
      this.categories = categories;
      console.log(this.categories)
    } );
  }

}
