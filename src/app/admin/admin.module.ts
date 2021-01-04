import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';

@NgModule({
  declarations: [ // Components , directives and pipes that are part of current module.
    DummyComponentComponent
  ],
  imports: [ // List of modules so current module can use components that are already
             // exported by some other module
    CommonModule
  ],
  exports:[
    DummyComponentComponent
  ],
  providers:[

  ]
})
export class AdminModule { }
