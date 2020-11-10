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

  constructor(private service: BlogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.service.getContent(`contents/${this.id}`).subscribe( (content) => {
        this.content = content;
      })
    } )
  }

  

}
