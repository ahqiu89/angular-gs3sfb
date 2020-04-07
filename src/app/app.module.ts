import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WorkflowService } from './services/workflow.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, StudentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WorkflowService]
})
export class AppModule { }
