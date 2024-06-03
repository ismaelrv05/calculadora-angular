import { Component } from '@angular/core';
import { Flags } from '../../../interfaces/flags';
import { DataService } from '../../../services/data.service';
import { SharedModule } from '../../../shared/shared.module';
import { SearchBoxComponent } from '../../../shared/pages/search-box/search-box.component';


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

  constructor ( private dataService: DataService)  {}

  searchByCapital( term: string ):void  {
    this.dataService.searchCountry( term )
      .subscribe( flags => {
        this.flags = flags;
      });
  }

}
