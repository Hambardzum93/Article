import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../shared/interfaces";

@Pipe({
  name: 'authorSearch'
})
export class AuthorSearchPipe implements PipeTransform {

  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()) {
      return posts
    }

    return posts.filter(post => {
      return post.author.toLowerCase().includes(search.toLowerCase())
    })

  }
}
