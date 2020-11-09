import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  content: any;
  user: any;
  id: any;
  day: any;
  month: any;
  year: any;

  constructor(private service: BlogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.service.getContent(`contents/${this.id}`).subscribe( (content) => {
        this.content = content;

        // get user
        this.service.getUser(`users/${this.content.user_id}`).subscribe( (user) => {
          this.user = user;
        })

        // Convert Date
        this.day = this.content.date.split('-')[2];
        this.month = this.content.date.split('-')[1];
        this.year = this.content.date.split('-')[0];
      })
    } )
  }

  

}
