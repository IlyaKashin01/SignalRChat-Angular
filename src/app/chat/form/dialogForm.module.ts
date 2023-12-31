import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './dialogForm.component';

@NgModule({
    declarations: [
        UserFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        UserFormComponent
    ]
})
export class UserFormModule { }
