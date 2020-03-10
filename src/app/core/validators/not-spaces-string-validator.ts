import { FormControl, ValidatorFn } from '@angular/forms';

export function NotSpacesStringValidator(): ValidatorFn {
    return (control: FormControl): {[key: string]: any} | null => {
        if (control.value.trim() === "") {
            return { 'notSpacesString': true };
        }
        return null;
    };
}
