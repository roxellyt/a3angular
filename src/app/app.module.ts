import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RoxellyHomeComponentComponent } from './roxelly-home-component/roxelly-home-component.component';
import { RoxellyListComponentComponent } from './roxelly-list-component/roxelly-list-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RoxellyHomeComponentComponent },
      {
        path: 'RoxellyListComponentComponent',
        component: RoxellyListComponentComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RoxellyHomeComponentComponent,
    RoxellyListComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
