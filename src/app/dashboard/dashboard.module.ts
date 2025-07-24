import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './component/main/main.component';
import { HistoryComponent } from './history/history.component';
import { WalletComponent } from './wallet/wallet.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatSelectModule } from '@angular/material/select';
import { ActiveApplicationsComponent } from './active-applications/active-applications.component';
import { StartApplicationComponent } from './start-application/start-application.component';


@NgModule({
  declarations: [
    MainComponent,
    HistoryComponent,
    WalletComponent,
    NotificationsComponent,
    ActiveApplicationsComponent,
    StartApplicationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class DashboardModule { }
