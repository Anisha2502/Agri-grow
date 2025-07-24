import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { HistoryComponent } from './history/history.component';
import { WalletComponent } from './wallet/wallet.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ActiveApplicationsComponent } from './active-applications/active-applications.component';
import { ProfileComponent } from './profile/profile.component';
import { StartApplicationComponent } from './start-application/start-application.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'active-applications', pathMatch: 'full' },
      { path: 'active-applications', component: ActiveApplicationsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'start-application', component: StartApplicationComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
