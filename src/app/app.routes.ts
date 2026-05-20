import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Enquiries } from './pages/enquiries/enquiries';
import { EditEnquiry } from './pages/edit-enquiry/edit-enquiry';
import { AddEnquiry } from './pages/add-enquiry/add-enquiry';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: 'dashboard', 
        component: Dashboard, 
        title: 'Dashboard',
        data: { showNavbar: true }
    },
    { 
        path: 'enquiries', 
        component: Enquiries, 
        title: 'Enquiries',
        data: { showNavbar: true }
    },
    { 
        path: 'editEnquiry', 
        component: EditEnquiry, 
        title: 'Edit Enquiry',
        data: { showNavbar: true }
    },
    { 
        path: 'addEnquiry', 
        component: AddEnquiry, 
        title: 'Add Enquiry',
        data: { showNavbar: true }
    },
    { 
        path: '', 
        pathMatch: 'full',
        component: Login,
        title: 'Login',
        data: { showNavbar: false }
    },
    { 
        path: '**', 
        component: NotFound,
        title: 'Page not found',
        data: { showNavbar: false }
    }
];
