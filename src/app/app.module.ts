import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { DriverComponent } from "./page/driver/driver.component";
import { AppRoutingModule } from "./app-routing.module";
import { SalesComponent } from "./page/sales/sales.component";
import { HomeComponent } from "./page/home/home.component";

@NgModule({
  declarations: [AppComponent, DriverComponent, SalesComponent, HomeComponent],
  imports: [BrowserModule, LeafletModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
