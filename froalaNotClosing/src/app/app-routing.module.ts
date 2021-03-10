import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { FroalaPageBuilderComponent} from './froala-page-builder/froala-page-builder.component';

const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
}, 
{
  path: 'secondary', 
  component: SecondaryComponent,
}, 
{
  path: 'froala', 
  component: FroalaPageBuilderComponent,
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
