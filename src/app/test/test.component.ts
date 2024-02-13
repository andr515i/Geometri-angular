import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    const currentSize = typeof this.size === 'string' ? parseInt(this.size, 10) : this.size
    this.size = Math.min(40, Math.max(8, currentSize + delta));
    console.log(`${this.size} --- ${delta}`);
    
    this.sizeChange.emit(this.size);
  }
}
