import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  title: string;
    text: string;
    button: string;
    route: string;
    keep = false
    constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
        this.title = this.data.title;
        this.text = this.data.text;
        this.button = this.data.button;
        if (this.data.route) {
            this.route = this.data.route;
        }
        if (this.data.keep) {
            this.keep =  this.data.keep
        }
    }

    ngOnInit() {
    }

    closeX() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
        if (this.route) {
            this.router.navigate([this.route]);
        }
    }

}
