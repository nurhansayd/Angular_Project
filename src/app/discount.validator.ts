import { AbstractControl, ValidatorFn } from "@angular/forms";


export function discountValidator(notValidDiscount :RegExp): ValidatorFn
{
  return (control: AbstractControl)=> {
      const notValid = notValidDiscount.test(control.value);
      return notValid ? {'notValidDiscount': {value:control.value}}: null;
  }

}