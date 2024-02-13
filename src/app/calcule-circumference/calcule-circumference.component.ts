import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calcule-circumference',
  standalone: true,
  templateUrl: './calcule-circumference.component.html',
  styleUrls: ['./calcule-circumference.component.css']
})
export class CalculateCircumferenceComponent {


  calculateCircumference(sideLength:number, sideLength2:number): number {
    console.log(`perimeter:\n side 1 : ${sideLength} \n side2 : ${sideLength2}`)
    if (sideLength > 0 && sideLength2 == 0) {
      return 4 * sideLength;
      
    }
    else if (sideLength > 0 && sideLength2 > 0) {
      return 2 * sideLength + 2 * sideLength2;
    }
    else {
      alert("pls enter only numbers greater than 0 - but perimeter")
      return 0;
    }
  }
}
