import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
	{ path: '', component: GraphComponent, data: { animation: 'left' } },
	{ path: 'input', component: FormComponent, data: { animation: 'right' } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
