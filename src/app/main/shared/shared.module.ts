import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ErrorComponent} from '../components/error/error.component';
import {RouterModule} from "@angular/router";
import {QuillModule} from "ngx-quill";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    HttpClientModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ErrorComponent
  ]
})
export class SharedModule {

}
