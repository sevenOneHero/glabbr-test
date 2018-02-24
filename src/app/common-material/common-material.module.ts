import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSelect, MatSelectModule, MatCardModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule, Form } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    HttpModule,
    NoopAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule
  ], exports: [
    HttpModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  declarations: []
})
export class CommonMaterialModule { }
