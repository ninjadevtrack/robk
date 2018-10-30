import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-entity-delete',
  templateUrl: './entity-delete.component.html',
  styleUrls: ['./entity-delete.component.scss']
})
export class EntityDeleteComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<EntityDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
    }

    onCancel(): void {
        this.dialogRef.close({
            deleted: false
        });
    }

    onDelete(): void {
        this.dialogRef.close({
            deleted: true
        });
    }

}
