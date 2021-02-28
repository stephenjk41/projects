import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent, SuccessDialog, Popup1Dialog } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule,
         MatInputModule,
         MatCardModule,
         MatDialogModule,
         MatSelectModule,
         MatFormFieldModule,
         MatProgressBarModule,
         MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuccessDialog,
    Popup1Dialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [SuccessDialog, Popup1Dialog],
  providers: [SuccessDialog, Popup1Dialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
