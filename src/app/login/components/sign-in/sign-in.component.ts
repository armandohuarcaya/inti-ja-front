import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
import { Subject, takeUntil } from 'rxjs';
import { CoreOptions, CORE_OPTIONS } from 'src/app/core/core.options';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  showPassword = true;
  formHeaders:any = FormGroup;
  loading: boolean = false;
  @Output() changeValues: EventEmitter<any> = new EventEmitter();
  constructor(private service: GeneralService, private formBuilder: FormBuilder, private router: Router,
    private authService: NbAuthService,
    @Inject(CORE_OPTIONS) protected options: CoreOptions) {
      
    }

  ngOnInit(): void {
    // console.log('holas');
    this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      // email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      messageResponse: [''],
      success: [true],
    }
    this.formHeaders = this.formBuilder.group(controls);
  }
  getInputType() {
    if (this.showPassword) {
      return 'password';
    } else {
      return 'text';
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  loginSignIn() {
    this.formHeaders.controls['messageResponse'].setValue('');
    this.formHeaders.controls['success'].setValue(true);
    const forms = this.formHeaders.value;
    const serviceName = 'login';
    const params = {
      // email: forms.email,
      name: forms.name,
      password: forms.password,
    }
    // this.loading = true;
    // this.service.addNameData$(serviceName, params).subscribe((res:any) => {
    //   this.formHeaders.controls['messageResponse'].setValue(res.message);
    //   this.formHeaders.controls['success'].setValue(res.success);

    //   setTimeout(() => {
    //     this.formHeaders.controls['success'].setValue(true);
    //     this.formHeaders.controls['messageResponse'].setValue('');
    //   }, 5000);
    //   if (res && res.success) {
    //     const item = JSON.stringify(res && res.data);
    //     localStorage.setItem('user', item);
    //     setTimeout(() => {
      if (forms.name === 'admin' && forms.password === '123456.') {
        this.router.navigate(['/pages/settings/users']);
      }
    //     }, 1000);
    //   console.log(res);
    //   } else {
    //     localStorage.removeItem('user');
    //   }
    // }, () => this.loading = false, () => this.loading = false);
  }
  typesChange() {
    this.changeValues.emit('REGISTER');
  }
  recoveryChange() {
    this.changeValues.emit('RECOVERY');
  }
  ngOnDestroy(): void {
  }
}
