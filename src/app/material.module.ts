import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports:[
        MatSliderModule,
        MatBadgeModule, 
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        FlexLayoutModule,
        MatTabsModule
       
    ],
    exports:[
        MatSliderModule,    
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule ,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        FlexLayoutModule,
        MatTabsModule  
    ]
})
export class materialModule{}
