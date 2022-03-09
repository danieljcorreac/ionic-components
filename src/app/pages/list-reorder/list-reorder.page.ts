import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];

  reorderEnable = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);

    const itemSelected = this.personajes.splice(event.detail.from, 1)[0];

    this.personajes.splice(event.detail.to, 0, itemSelected);

    event.detail.complete();

    console.log(this.personajes);
  }

  toogleReorder() {
    this.reorderEnable = !this.reorderEnable;
  }

}
