import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('canvas') canvas: ElementRef;
  private context: CanvasRenderingContext2D;
  constructor() { }

  ngAfterViewInit() {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
  }

  private draw() {
    this.context.font = "30px Arial";
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';

    const x = (this.canvas.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvas.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText("@realappie", x, y);
  }

  open() {
    window.open('https://github.com/realappie', '_blank')
  }

}

@Component({
  selector: 'success',
  templateUrl: 'success.html',
})
export class SuccessDialog {
  constructor(public dialogRef: MatDialogRef<SuccessDialog>) { }
  onNoClick(): void {
    this.dialogRef.close()
  }
}

@Component({
  selector: 'popup1',
  templateUrl: 'popup1.html',
})
export class Popup1Dialog {
  constructor(public dialogRef: MatDialogRef<Popup1Dialog>) { }
  onNoClick(): void {
    this.dialogRef.close()
  }
}

