import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
