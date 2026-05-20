import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Enquiries } from './pages/enquiries/enquiries';
import { EditEnquiry } from './pages/edit-enquiry/edit-enquiry';
import { AddEnquiry } from './pages/add-enquiry/add-enquiry';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
    { path: 'enquiries', component: Enquiries, title: 'Enquiries' },
    { path: 'editEnquiry', component: EditEnquiry, title: 'Edit Enquiry' },
    { path: 'addEnquiry', component: AddEnquiry, title: 'Add Enquiry' },
    { path: '', pathMatch: 'full' ,component: Login, title: 'Login' },
    { path: '**', component: NotFound }
];
