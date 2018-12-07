import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
hide = true;
password: FormControl
  constructor(public dialog: MatDialog) { 
    this.password = new FormControl()
  }

  onSubmit(){
    console.log(this.password.value)
    if(this.password.value == 'leak') {
      const dialogRef = this.dialog.open(SuccessDialog, {
        width: '40%',
        height: '80%'
      })
    }
      
  }
// Set the date we're counting down to
}

@Component({
  selector: 'success',
  templateUrl: 'success.html',
})
export class SuccessDialog {
  constructor(public dialogRef: MatDialogRef<SuccessDialog>){}
  onNoClick(): void {
    this.dialogRef.close()
  }
}

