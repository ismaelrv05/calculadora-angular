import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  constructor(private translate: TranslateService) { }
  emitValue( value: string ): void {
    const translatedValue = this.translate.instant(value);
    this.onValue.emit( value );
  }

}
