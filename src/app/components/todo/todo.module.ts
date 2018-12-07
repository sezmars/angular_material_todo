import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input';
import {TableComponent} from './table';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [InputComponent, TableComponent],
  imports: [
    FormsModule,
    CommonModule,
    DragDropModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  exports: [InputComponent, TableComponent]
})
export class TodoModule {}
