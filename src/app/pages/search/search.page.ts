import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  busqueda = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbumes()
      .subscribe(albumes => this.albumes = albumes);
  }

  onSearchChange(event) {
    this.busqueda = event.detail.value;
  }

}
