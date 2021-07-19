import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public title: string = 'GifApp';
  
  get historial(){
    return this._gifService.historial;
  }
  
  constructor(private _gifService: GifsService) { }

  ngOnInit(): void {
  }

}
