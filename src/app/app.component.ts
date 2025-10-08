import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // 🔹 Escucha el evento que se lanza desde MainActivity.java
    window.addEventListener('supabaseLinkReceived', () => {
      console.log('🔗 Deep link detectado: redirigiendo a /new');
      this.router.navigate(['/new']); // 🔹 Redirige automáticamente
    });
  }
}
