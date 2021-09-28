import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [CommonModule],
  exports: [
    FormsModule,
    CommonModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
