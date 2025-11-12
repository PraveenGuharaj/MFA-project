import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEmail'
})
export class MaskEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
