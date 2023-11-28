import { Injectable } from '@angular/core';
import { Vehiculo } from '../interface/vehiculo';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Viaje } from '../interface/viaje';
import { Usuario } from '../interface/usuario';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';


 

@Injectable({
  providedIn: 'root',
})
export class ServicioFirebaseService {
  private viajeColeccion: AngularFirestoreCollection<Viaje>;
  private usuarioColeccion: AngularFirestoreCollection<Usuario>;
  private vehiculoColeccion: AngularFirestoreCollection<Vehiculo>;

  constructor(private afs: AngularFirestore) {
    this.viajeColeccion = afs.collection<Viaje>('viaje');
    this.usuarioColeccion = afs.collection<Usuario>('usuario');
    this.vehiculoColeccion = afs.collection<Vehiculo>('vehiculo');
  }

  
  async buscarUsuarioPorNombre(username: string, password: string): Promise<Usuario | null> {
    try {
      // Realiza la consulta directamente en Firestore
      const querySnapshot = await this.afs
        .collection<Usuario>('usuario', (ref) =>
          ref.where('username', '==', username)
        )
        .get()
        .pipe(first())
        .toPromise();

      if (!querySnapshot || querySnapshot.empty) {
        return null; // No se encontraron resultados
      }

      const usuario = querySnapshot.docs[0].data() as Usuario;

      if (usuario.password === password) {
        return usuario;
      }

      return null; // Contraseña incorrecta
    } catch (error) {
      console.error('Error al buscar el usuario:', error);
      return null; // Error en la consulta
    }
  }

  async buscarUsuarioPorNombreUnico(username: string): Promise<boolean> {
    try {
      const querySnapshot = await this.afs
        .collection<Usuario>('usuario', (ref) =>
          ref.where('username', '==', username)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (!querySnapshot || querySnapshot.empty) {
        // No se encontraron resultados, lo que significa que el nombre de usuario es único.
        return true;
      } else {
        // Se encontraron resultados, lo que significa que el nombre de usuario ya existe.
        return false;
      }
    } catch (error) {
      console.error('Error al buscar el usuario:', error);
      // Error en la consulta, se puede manejar de acuerdo a tus necesidades.
      return false; // En este caso, consideraremos que ya existe el nombre de usuario.
    }
  }
  
  async obtenerIdViajeEnCurso(choferId: string): Promise<string | null> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref.where('chofer_id', '==', choferId).where('estado', '==', 1)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        return querySnapshot.docs[0].id; // Devuelve la ID del primer viaje en curso
      } else {
        return null; // No hay viajes en curso para el chofer actual
      }
    } catch (error) {
      console.error('Error al buscar el viaje en curso:', error);
      return null; // Error en la consulta
    }
  }
  
  async obtenerViajeEnCursoParaCancelar(choferId: string): Promise<string | null> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref.where('chofer_id', '==', choferId).where('estado', '==', 1)
        )
        .get()
        .pipe(first())
        .toPromise();

      if (!querySnapshot || querySnapshot.empty) {
        return null; // No se encontraron viajes en curso para el chofer
      }

      // Se encontró un viaje en curso, devuelve la ID del documento
      return querySnapshot.docs[0].id;
    } catch (error) {
      console.error('Error al buscar el viaje en curso:', error);
      return null; // Error en la consulta
    }
  }
  async getViajesEnCursoSinPasajero(): Promise<Viaje[] | undefined> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref.where('estado', '==', 1).where('pasajero_id', '==', '')
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => doc.data() as Viaje);
      } else {
        return undefined; // No se encontraron viajes en curso sin pasajero
      }
    } catch (error) {
      console.error('Error al obtener los viajes en curso sin pasajero:', error);
      return undefined; // Error en la consulta
    }
  }
  

  async buscarViajesPorChoferYRutas(choferId: string, direccionInicial: string, direccionFinal: string): Promise<Viaje[] | undefined> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref
            .where('chofer_id', '==', choferId)
            .where('direccion_inicial', '==', direccionInicial)
            .where('direccion_final', '==', direccionFinal)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => doc.data() as Viaje);
      } else {
        return undefined; // No se encontraron viajes que coincidan con los criterios
      }
    } catch (error) {
      console.error('Error al buscar los viajes por chofer y rutas:', error);
      return undefined; // Error en la consulta
    }
  }
  async actualizarPasajeroEnViajes(username: string, direccionInicial: string, direccionFinal: string, choferId: string): Promise<void> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref
            .where('direccion_inicial', '==', direccionInicial)
            .where('direccion_final', '==', direccionFinal)
            .where('chofer_id', '==', choferId)
            .where('estado', '==', 1)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        // Actualiza 'pasajero_id' en todos los viajes encontrados
        querySnapshot.docs.forEach((doc) => {
          doc.ref.update({ pasajero_id: username });
        });
      }
    } catch (error) {
      console.error('Error al actualizar los viajes:', error);
      throw error;
    }
  }

  async eliminarViajesPorPasajeroId(username: string): Promise<void> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref.where('pasajero_id', '==', username).where('estado', '==', 1)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        // Recorre los viajes encontrados y elimina cada uno
        querySnapshot.docs.forEach((doc) => {
          doc.ref.delete();
        });
      }
    } catch (error) {
      console.error('Error al eliminar los viajes:', error);
      throw error;
    }
  }
  async buscarVehiculoPorChofer(choferId: string): Promise<Vehiculo | null> {
    try {
      const querySnapshot = await this.afs
        .collection<Vehiculo>('vehiculo', (ref) =>
          ref.where('chofer_id', '==', choferId)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        return querySnapshot.docs[0].data() as Vehiculo;
      } else {
        return null; // No se encontró un vehículo para el chofer
      }
    } catch (error) {
      console.error('Error al buscar el vehículo:', error);
      return null; // Error en la consulta
    }
  }
  async obtenerViajeEnCursoParaPasajero(pasajeroId: string): Promise<Viaje | null> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref.where('pasajero_id', '==', pasajeroId).where('estado', '==', 1)
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        return querySnapshot.docs[0].data() as Viaje; // Devuelve el primer viaje en curso del pasajero
      } else {
        return null; // No hay viajes en curso para el pasajero actual
      }
    } catch (error) {
      console.error('Error al buscar el viaje en curso para el pasajero:', error);
      return null; // Error en la consulta
    }
  }

  getVehiculos() {
    this.afs.collection('vehiculo').valueChanges().subscribe(
      (res) => {
        console.log("Vehículos rescatados");
      }
    )
  }

  getViajes() {
    this.afs.collection('viaje').valueChanges().subscribe(
      (res) => {
        console.log("Viajes rescatados");
      }
    )
  }
  getMontosViajes(): Observable<Viaje[]> {
    return this.afs.collection<Viaje>('viaje').valueChanges();
  }

  grabarViaje(viaje: Viaje) {
    return this.viajeColeccion.add(viaje);
  }

  eliminarViaje(id: string) {
    return this.viajeColeccion.doc(id).delete();
  }

  grabarUsuario(usuario: Usuario) {
    return this.usuarioColeccion.add(usuario);
  }

  grabarVehiculo(vehiculo: Vehiculo) {
    return this.vehiculoColeccion.add(vehiculo);
  }

  async getViajesEnCursoParaPasajero(username: string): Promise<Viaje[] | undefined> {
    try {
      const querySnapshot = await this.afs
        .collection<Viaje>('viaje', (ref) =>
          ref.where('estado', '==', 1)
            .where('pasajero_id', '==', username)
            .where('chofer_id', '!=', '')
        )
        .get()
        .pipe(first())
        .toPromise();
  
      if (querySnapshot && !querySnapshot.empty) {
        return querySnapshot.docs.map((doc) => doc.data() as Viaje);
      } else {
        return undefined; // No se encontraron viajes en curso que cumplan con las condiciones
      }
    } catch (error) {
      console.error('Error al obtener los viajes en curso para el pasajero:', error);
      return undefined; // Error en la consulta
    }
  }
  
}