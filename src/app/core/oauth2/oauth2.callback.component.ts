import {Component, Inject, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {NbAuthResult, NbAuthService} from '@nebular/auth';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
// import {AppValidateTokenService} from '../state/app-validate-token.service';
import { CORE_OPTIONS } from '../core.options';

@Component({
    selector: 'app-oauth2-callback',
    template: `<span>Authenticating...</span>`
})
export class Oauth2CallbackComponent implements OnDestroy {
    private destroy$ = new Subject<void>();

    constructor(
        private authService: NbAuthService,
        // private router: Router,
        // private appValidateTokenService: AppValidateTokenService,
        @Inject(CORE_OPTIONS) protected options: any) {
        this.authService.authenticate(this.options.strategyName)
            .pipe(takeUntil(this.destroy$))
            .subscribe((authResult: NbAuthResult) => {
                if (authResult.isSuccess()) {
                    // this.appValidateTokenService.validate(authResult.getToken().getValue())
                    //     .then(() => {
                    //         if (authResult.isSuccess() && authResult.getRedirect()) {
                    //             window.location.href = authResult.getRedirect();
                    //         }
                    //     });
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
