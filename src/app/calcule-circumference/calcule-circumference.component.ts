import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calcule-circumference',
  standalone: true,
  templateUrl: './calcule-circumference.component.html',
  styleUrls: ['./calcule-circumference.component.css']
})
export class CalculateCircumferenceComponent {
  @Input() sideLength: number = 0;
  @Input() sideLength2: number = 0;
  circumference: number = 0;

  calculateCircumference(): number {
    console.log(`perimeter:\n side 1 : ${this.sideLength} \n side2 : ${this.sideLength2}`)
    if (this.sideLength > 0 && this.sideLength2 == 0) {
      return 4 * this.sideLength;
      
    }
    else if (this.sideLength > 0 && this.sideLength2 > 0) {
      return 2 * this.sideLength + 2 * this.sideLength2;
    }
    else {
      alert("pls enter only numbers greater than 0 - but perimeter")
      return 0;
    }
  }
}
