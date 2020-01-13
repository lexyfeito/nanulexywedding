import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {RspvSuccessComponent} from './rspv-success/rspv-success.component';

@Component({
  selector: 'app-rspv',
  templateUrl: './rspv.component.html',
  styleUrls: ['./rspv.component.scss']
})
export class RspvComponent implements OnInit {

  rspvFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afStore: AngularFirestore,
    private matDialog: MatDialog
  ) {
    this.rspvFormGroup = this.fb.group({
      first: [null, Validators.required],
      last: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      attending: [null, Validators.required],
      guests: [null],
      foodRestrictions: [null],
      comments: [null]
    });
  }

  ngOnInit() {
  }

  async submit() {
    if (this.rspvFormGroup.invalid) {
      const controls = Object.keys(this.rspvFormGroup.controls);
      controls.forEach(control => {
        const ctl = this.rspvFormGroup.get(control);
        if (ctl) {
          ctl.markAsDirty();
        }
      });
      this.rspvFormGroup.markAsDirty();
      return;
    }

    const value = this.rspvFormGroup.value;
    const response = await this.afStore.collection('rspv').add(value);

    this.matDialog.open(
      RspvSuccessComponent
    ).afterClosed().subscribe(() => {
      this.rspvFormGroup.reset();
    });
  }

}
