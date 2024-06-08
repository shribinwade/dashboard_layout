import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatMenuModule} from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';
import{MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MItoolComponent } from './Components/Components/Tools/mitool/mitool.component';
import { ToolsComponent } from './Components/tools/tools.component';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';

export function createTranslateLoader(httpclient: HttpClient) {
  return new TranslateHttpLoader(httpclient);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    MItoolComponent,
    ToolsComponent,
    DropdownAnchorDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
   
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        },
      }
    )
   

 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
