import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from "primeng/toast";
import {ToastComponent} from "../components/toast/toast.component";



@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
  ],
   providers: [

   ],
  exports: [
    ToastComponent,
  ]
})
export class ShareModule { }
