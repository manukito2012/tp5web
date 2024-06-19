import { Routes } from '@angular/router';
import { Punto1Component } from './component/punto1/punto1.component';
import { Punto2Component } from './component/punto2/punto2.component';
import { Punto3Component } from './component/punto3/punto3.component';

export const routes: Routes = [


        { path: 'punto1', component: Punto1Component },
        { path: '', pathMatch: 'full', redirectTo: 'punto1' },

        { path:'punto2',
            component: Punto2Component
        },
        { path:'punto3',
        component: Punto3Component
        }
     
    
];
