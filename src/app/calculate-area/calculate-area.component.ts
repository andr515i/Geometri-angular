import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculate-area',
  standalone: true,
  templateUrl: './calculate-area.component.html',
  styleUrls: ['./calculate-area.component.css']
})
export class CalculateAreaComponent {
  @Input() sideLength: number = 0;
  @Input() sideLength2: number = 0;

  

  calculateArea(): number {
    console.log(`area:\n side 1 : ${this.sideLength} \n side2 : ${this.sideLength2}`)
    if (this.sideLength > 0 && this.sideLength2 == 0) {
      return this.sideLength * this.sideLength;
    }
    else if (this.sideLength > 0 && this.sideLength2 > 0) {
      return this.sideLength * this.sideLength2;
    }
    else {
      alert("pls enter only numbers greater than 0")
      return 0;
    }

  }
}
