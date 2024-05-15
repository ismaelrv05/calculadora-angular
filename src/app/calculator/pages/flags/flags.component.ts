import { Component } from '@angular/core';
import { FlagsService } from '../../../services/flags.service';
import { Flags } from '../../../interfaces/flags';

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

  constructor ( private flagsService: FlagsService)  {}

  searchByCapital( term: string ):void  {
    this.flagsService.searchCountry( term )
      .subscribe( flags => {
        this.flags = flags;
      });
  }

}
