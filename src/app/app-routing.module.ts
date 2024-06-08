import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MItoolComponent } from './Components/Components/Tools/mitool/mitool.component';
import { ToolsComponent } from './Components/tools/tools.component';

const rootRouterConfig: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'mitool',component: MItoolComponent},
  {path:'tools',component:ToolsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
