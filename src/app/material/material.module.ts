import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const Materialcomponents=[
  MatAutocompleteModule, 
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule, 
  MatRadioModule, 
  MatInputModule, 
  MatSelectModule,
  MatSlideToggleModule, 
  MatButtonToggleModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatCardModule
]

@NgModule({
  imports: [
    Materialcomponents
  ],
 exports:[Materialcomponents]
})
export class MaterialModule { }
