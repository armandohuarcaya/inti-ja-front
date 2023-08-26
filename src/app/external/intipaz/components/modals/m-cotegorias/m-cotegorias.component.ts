import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-m-cotegorias',
  templateUrl: './m-cotegorias.component.html',
  styleUrls: ['./m-cotegorias.component.scss']
})
export class MCotegoriasComponent {
  constructor(public activeModal: NbDialogRef<MCotegoriasComponent>) {}
  closeModal(ir:any) {
    const value = {
      close: ir
    }
    this.activeModal.close(value);
  }
}
