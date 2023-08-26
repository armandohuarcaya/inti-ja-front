import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-selection-home',
  templateUrl: './selection-home.component.html',
  styleUrls: ['./selection-home.component.scss']
})
export class SelectionHomeComponent implements OnInit {
  formHeaders:any = FormGroup;
  loading: boolean = false;
  msg: string = '';
  satisfactory: boolean = false;
  tallas:any = ['0', '1', '2', '4', '6', '8', '10', '12', '14', '16', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  sexos:any = [{id:'M', nombre: 'Masculino'}, {id:'F', nombre: 'Femenino'}];
  constructor(private service: GeneralService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      name: ['', [Validators.required]],
      name_polo: ['', [Validators.required]],
      size_polo: ['', [Validators.required]],
      number_polo: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    }
    this.formHeaders = this.formBuilder.group(controls);
  }
  register() {
    const forms = this.formHeaders.value;
    const serviceName = 'selection';
    const params = {
      name: forms.name,
      name_polo: forms.name_polo,
      size_polo: forms.size_polo,
      number_polo: forms.number_polo,
      sexo: forms.sexo,
    }
    if (this.formHeaders.valid) {
      this.loading = true;
      this.service.addNameData$(serviceName, params).subscribe((res:any) => {
        if (res.success) {
          this.fielReactive();
          this.satisfactory = res.success;
          this.msg = res.message;
          setTimeout(() => {
            this.satisfactory = false;
            this.msg = '';
          }, 5000);
        } else {
          this.msg = res.message;
          setTimeout(() => {
            this.msg = '';
          }, 5000);
        }
      }, () => this.loading = false, () => this.loading = false);
    }
  }
}
