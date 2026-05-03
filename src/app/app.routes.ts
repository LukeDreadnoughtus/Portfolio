import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioPageComponent,
        title: $localize`Lukas Heller | Portfolio`
    },
    {
        path: 'legal-notice',
        loadComponent: () => import('./legal-notice/legal-notice.component').then(mod => mod.LegalNoticeComponent),
        title: $localize`Lukas Heller | Legal Notice`
    },
    {
        path: 'privacy-policy',
        loadComponent: () => import('./privacy-policy/privacy-policy.component').then(mod => mod.PrivacyPolicyComponent),
        title: $localize`Lukas Heller | Privacy Policy`
    }
];
