import { HomeComponent } from './home.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TimerModule } from 'src/app/components/timer/timer.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TimerModule
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule {}
