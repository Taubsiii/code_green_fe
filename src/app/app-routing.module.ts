import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DriverComponent } from "./page/driver/driver.component";
import { HomeComponent } from "./page/home/home.component";
import { SalesComponent } from "./page/sales/sales.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "driver",
    component: DriverComponent,
  },
  {
    path: "sales",
    component: SalesComponent,
  },

  // otherwise redirect to home
  // needs to be the last path
  // { path: '**', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
