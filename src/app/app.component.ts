import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  sidebarOpen:any=true;

  sideBarToggler(){
     console.log("parentSideBar");
     
        this.sidebarOpen=!this.sidebarOpen;
  }
  title = 'DataNemesis';
}
