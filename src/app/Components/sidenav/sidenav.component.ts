import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import{MatListItem} from '@angular/material/list';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input('items') public menuItems: any[] = [];
  @Input('hasIconMenu') public hasIconTypeMenuItem!: boolean;
  @Input('iconMenuTitle') public iconTypeMenuTitle!: string;
  @ViewChild('sidenav') sidenav!:ElementRef;
  
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      const links = this.sidenav.nativeElement.querySelectorAll('li[appdropdownlink]');
      [...links].forEach(link => {
        if(link.querySelector('a.open')) {
          link.classList.add('open');
        }
      })
    })
  }

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: 'ITEM',
      type: 'dropDown',
      tooltip: 'Item',
      icon: 'done',
      state: 'material',
      sub: [
        {name: 'SUBITEM', state: 'cards'},
        {name: 'SUBITEM', state: 'buttons'}
      ]
    });
  }

  

}
