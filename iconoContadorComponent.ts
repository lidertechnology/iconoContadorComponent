import { Component, inject, input, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icono-contador',
  imports: [MatIconModule, MatBadgeModule, MatButtonModule, RouterLink],
  templateUrl: './icono-contador.html',
  styleUrl: './icono-contador.css'
})
export class IconoContador {

  icono = input.required<string>(); // Usa el icono adecuado
  ruta = input.required<string[]>(); // Coloca la ruta a donde dirigirá
  cantidad = input<number>(0); // Inicia siempore en 0 pero se actualiza según el componente padre.
  
}
