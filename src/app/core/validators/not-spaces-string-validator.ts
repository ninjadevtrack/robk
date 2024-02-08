import { UntypedFormControl, ValidatorFn } from '@angular/forms';

export function NotSpacesStringValidator(): ValidatorFn {
    return (control: UntypedFormControl): {[key: string]: any} | null => {
        if (control.value.trim() === "") {
            return { 'notSpacesString': true };
        }
        return null;
    };
}
