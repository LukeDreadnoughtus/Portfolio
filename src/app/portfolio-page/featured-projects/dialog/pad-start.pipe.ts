import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padStart',
  standalone: true
})
export class PadStart implements PipeTransform {

  /**
   * 
   * @param value - The value that will be transformed
   * @returns - It returns the transformed value
   */
  transform(value: number) {
    let numToString = value.toString().padStart(2, '0');
    return numToString;
  }

}
