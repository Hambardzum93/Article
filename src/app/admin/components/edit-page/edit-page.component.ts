import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../../main/services/posts.service";
import {delay, Subscription, switchMap} from "rxjs";
import {Post} from "../../../main/shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  post: Post
  submittedFlag = false
  sub$: Subscription

  constructor(private route: ActivatedRoute,
              private postService: PostsService,
              private alertService: AlertService
              ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getById(params['id'])
      })
    )
      .pipe(
        delay(500)
      )
      .subscribe((post: Post) => {
        this.post = post
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required)
        })
      })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.submittedFlag = true
    this.sub$ = this.postService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title,
    }).subscribe(() => {

      this.submittedFlag = false
      this.alertService.warning('Post successfully updated')
    })
  }

  ngOnDestroy() {
    this.sub$ ? this.sub$.unsubscribe() : ''
  }

}
