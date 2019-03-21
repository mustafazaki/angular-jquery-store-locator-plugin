import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MapComponent} from './map/map.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
    {path: '', redirectTo: 'map', pathMatch: 'full'},
    {
        path: 'details',
        component: DetailsComponent,
        data: {title: 'Heroes List'}
    },
    {
        path: 'map',
        component: MapComponent,
        data: {title: 'Heroes List'}
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
