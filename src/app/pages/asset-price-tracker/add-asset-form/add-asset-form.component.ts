import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-asset-form',
  templateUrl: './add-asset-form.component.html',
  styleUrls: ['./add-asset-form.component.scss'],
})
export class AddAssetFormComponent {
  readonly faPlus = faPlus;

  @Output() isinAdd = new EventEmitter<string>();

  form!: FormGroup;

  controls = {
    isin: new FormControl('', Validators.required),
  };

  constructor() {
    this.form = new FormGroup(this.controls);
  }

  addIsin(): void {
    if (!this.form.valid) {
      return;
    }

    this.isinAdd.emit(this.controls.isin.value);
    this.controls.isin.setValue('');
  }
}
