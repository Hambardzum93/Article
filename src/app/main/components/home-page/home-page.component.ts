import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {Post} from "../../shared/interfaces";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts$: Observable<Post[]>
  searchAuthor: string;
  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getAll()
  }

}
