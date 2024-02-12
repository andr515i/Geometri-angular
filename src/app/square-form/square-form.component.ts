import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-square-form',
    standalone: true,
    imports: [ReactiveFormsModule],
  templateUrl: './square-form.component.html',
  styleUrls: ['./square-form.component.css']
})



export class SquareFormComponent {
  @Output() formSubmit = new EventEmitter<{ sideLength: number, sideLength2: number }>();
  squareForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.squareForm = this.fb.group({
      sideLength: ['', Validators.required],
      sideLength2: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = this.squareForm.value;
    console.log(formData)
      this.formSubmit.emit(formData);      
  }
}
