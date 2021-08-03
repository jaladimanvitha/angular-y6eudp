import { CheckBoxModule  } from '@syncfusion/ej2-angular-buttons';

import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, FormsModule, CommonModule, DialogModule, TextBoxModule,       ReactiveFormsModule, CheckBoxModule, DropDownListModule, NumericTextBoxModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
