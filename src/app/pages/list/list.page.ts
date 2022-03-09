import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList)
  ionList: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuario();
  }

  favorite(usuario) {
    console.log('favorite', usuario);
    this.ionList.closeSlidingItems();
  }

  share(usuario) {
    console.log('share', usuario);
    this.ionList.closeSlidingItems();
  }

  delete(usuario) {
    console.log('delete', usuario);
    this.ionList.closeSlidingItems();
  }

}
