import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function passwordValidator( control: AbstractControl){
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
if(password?.pristine || confirmPassword?.pristine)
{
    return null;
}
return password && confirmPassword && password.value !== confirmPassword.value? {'misMatch': true} : null;

}





/*
export function matchValidator( matchTo: string,reverse?: boolean,  ): ValidatorFn {
    return (control: AbstractControl): 
    ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === 
        (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }*/