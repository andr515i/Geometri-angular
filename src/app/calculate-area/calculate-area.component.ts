import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculate-area',
  standalone: true,
  templateUrl: './calculate-area.component.html',
  styleUrls: ['./calculate-area.component.css']
})
export class CalculateAreaComponent {
  calculateArea(sideLength:number, sideLength2: number): number {

    console.log(`area:\n side 1 : ${sideLength} \n side2 : ${sideLength2}`)
    if (sideLength > 0 && sideLength2 == 0) {
      return sideLength * sideLength;
    }
    else if (sideLength > 0 && sideLength2 > 0) {
      return sideLength * sideLength2;
    }
    else {
      alert("pls enter only numbers greater than 0")
      return 0;
    }

  }
}
