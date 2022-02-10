import { AbstractControl, ValidatorFn } from "@angular/forms";


export function nameValidator(notValidName :RegExp): ValidatorFn
{
  return (control: AbstractControl)=> {
      const notValid = notValidName.test(control.value);
      return notValid ? {'notValidName': {value:control.value}}: null;
  }

}