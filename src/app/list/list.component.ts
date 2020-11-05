import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contents: any;

  constructor(private service: BlogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllContents('contents').subscribe( (contents:any) => {
      this.contents = contents;
      
      console.log(this.contents);
    } );
  }

}
