import { Component, ViewChild } from '@angular/core';
import { SquareFormComponent } from "../square-form/square-form.component";
import { CalculateAreaComponent } from "../calculate-area/calculate-area.component";
import { CalculateCircumferenceComponent } from "../calcule-circumference/calcule-circumference.component";
import { CommonModule, NgIf } from '@angular/common';
@Component({
    selector: 'app-square',
    standalone: true,
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css'],
    imports: [SquareFormComponent, CalculateAreaComponent, CalculateCircumferenceComponent, CommonModule, NgIf]
})
export class SquareComponent {
  @ViewChild(CalculateAreaComponent) calculateAreaComponent: CalculateAreaComponent = new CalculateAreaComponent;
  @ViewChild(CalculateCircumferenceComponent) calculateCircumferenceComponent: CalculateCircumferenceComponent = new CalculateCircumferenceComponent;

  sideLength: number = 0;
  sideLength2: number = 0;
  area: number = 0;
  circumference: number = 0;

  onFormSubmit(data: { sideLength: number, sideLength2: number}) {
    console.log("square :" + data.sideLength + " " + data.sideLength2);
    
    this.sideLength = data.sideLength;
    this.sideLength2 = data.sideLength2;
    this.calculateArea();
    this.calculateCircumference();
  }
  showAlert() {
    alert('Side length is true!');
  }
  calculateArea() {
      this.area = this.calculateAreaComponent.calculateArea(this.sideLength, this.sideLength2);
  }

  calculateCircumference() {
      this.circumference = this.calculateCircumferenceComponent.calculateCircumference(this.sideLength, this.sideLength2);
  }

}
