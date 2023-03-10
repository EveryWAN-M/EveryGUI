import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularSvgIconModule} from 'angular-svg-icon';

import {EveryUPModule} from '@everyup/everyup.module';

import {SharedModule} from '@modules/shared/shared.module';
import {ListComponent} from '@modules/devices/components/list/list.component';
import {EditComponent} from '@modules/devices/components/edit/edit.component';
import {DetailsComponent} from '@modules/devices/components/details/details.component';
import {DevicesRoutes} from '@modules/devices/devices.routes';
import {DevicesService} from '@modules/devices/devices.service';
import {DeviceResolver} from '@modules/devices/resolvers/devices.resolver';
import {FiltersComponent} from '@modules/devices/components/list/filters/filters.component';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        NgbModule,
        EveryUPModule,
        TranslateModule,
        RouterModule.forChild(DevicesRoutes),
        AngularSvgIconModule,
        FormsModule
    ],
    providers: [
        DeviceResolver,
        DevicesService
    ],
    declarations: [
        ListComponent,
        EditComponent,
        DetailsComponent,
        FiltersComponent,
    ]
})
export class DevicesModule {

}
