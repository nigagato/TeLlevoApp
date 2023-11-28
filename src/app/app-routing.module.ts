import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'ganancias',
    loadChildren: () => import('./pages/ganancias/ganancias.module').then( m => m.GananciasPageModule)
  },
  {
    path: 'listadotrayectos',
    loadChildren: () => import('./pages/listadotrayectos/listadotrayectos.module').then( m => m.ListadotrayectosPageModule)
  },
  {
    path: 'pasajero1',
    loadChildren: () => import('./pages/pasajero1/pasajero1.module').then( m => m.Pasajero1PageModule)
  },
  {
    path: 'pasajero2',
    loadChildren: () => import('./pages/pasajero2/pasajero2.module').then( m => m.Pasajero2PageModule)
  },
  {
    path: 'pasajero3',
    loadChildren: () => import('./pages/pasajero3/pasajero3.module').then( m => m.Pasajero3PageModule)
  },
  {
    path: 'pasajero4',
    loadChildren: () => import('./pages/pasajero4/pasajero4.module').then( m => m.Pasajero4PageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pages/pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'registrarvehiculo',
    loadChildren: () => import('./pages/registrarvehiculo/registrarvehiculo.module').then( m => m.RegistrarvehiculoPageModule)
  },
  {
    path: 'direccion',
    loadChildren: () => import('./pages/direccion/direccion.module').then( m => m.DireccionPageModule)
  },
  {
    path: 'casasede',
    loadChildren: () => import('./pages/casasede/casasede.module').then( m => m.CasasedePageModule)
  },
  {
    path: 'registrocompleto',
    loadChildren: () => import('./pages/registrocompleto/registrocompleto.module').then( m => m.RegistrocompletoPageModule)
  },
  {
    path: 'pagorealizado',
    loadChildren: () => import('./pages/pagorealizado/pagorealizado.module').then( m => m.PagorealizadoPageModule)
  },
  {
    path: 'pagonorealizado',
    loadChildren: () => import('./pages/pagonorealizado/pagonorealizado.module').then( m => m.PagonorealizadoPageModule)
  },
  {
    path: 'rescontracod',
    loadChildren: () => import('./pages/rescontracod/rescontracod.module').then( m => m.RescontracodPageModule)
  },
  {
    path: 'nuevacontra',
    loadChildren: () => import('./pages/nuevacontra/nuevacontra.module').then( m => m.NuevacontraPageModule)
  },
  {
    path: 'contrarestablecida',
    loadChildren: () => import('./pages/contrarestablecida/contrarestablecida.module').then( m => m.ContrarestablecidaPageModule)
  },
  {
    path: 'viajeconductor',
    loadChildren: () => import('./pages/viajeconductor/viajeconductor.module').then( m => m.ViajeconductorPageModule)
  },
  {
    path: 'viajeusuario',
    loadChildren: () => import('./pages/viajeusuario/viajeusuario.module').then( m => m.ViajeusuarioPageModule)
  },
  {
    path: 'viajecancelado',
    loadChildren: () => import('./pages/viajecancelado/viajecancelado.module').then( m => m.ViajecanceladoPageModule)
  },
  {
    path: 'detalleviaje',
    loadChildren: () => import('./pages/detalleviaje/detalleviaje.module').then( m => m.DetalleviajePageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'registrovehiculocompleto',
    loadChildren: () => import('./pages/registrovehiculocompleto/registrovehiculocompleto.module').then( m => m.RegistrovehiculocompletoPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
