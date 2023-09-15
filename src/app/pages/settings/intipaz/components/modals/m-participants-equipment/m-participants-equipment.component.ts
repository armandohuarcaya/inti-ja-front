import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-m-participants-equipment',
  templateUrl: './m-participants-equipment.component.html',
  styleUrls: ['./m-participants-equipment.component.scss']
})
export class MParticipantsEquipmentComponent {
  loading: boolean = false;
  paritcipants:any = [];
  constructor(public activeModal: NbDialogRef<MParticipantsEquipmentComponent>) {}
  closeModal() {
    this.activeModal.close('close');
  }
}
