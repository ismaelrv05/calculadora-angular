import { Component } from '@angular/core';
import { FlagsService } from '../../../services/flags.service';
import { Flags } from '../../../interfaces/flags';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styles: [
    `img{
      width: 200px;
    }
    h2{
      margin-left: 30px;
    }
    `
    ]
})
export class FlagsComponent {

  public flags: Flags[]=[];

  constructor ( private flagsService: FlagsService, private translate: TranslateService)  {}

  searchByCapital( term: string ):void  {
    const translatedTerm = this.translate.instant(term);
    this.flagsService.searchCountry( translatedTerm )
      .subscribe( flags => {
        this.flags = flags;
      });
  }

}
