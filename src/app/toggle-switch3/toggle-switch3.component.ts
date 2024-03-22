import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-toggle-switch3',
  templateUrl: './toggle-switch3.component.html',
  styleUrl: './toggle-switch3.component.css'
})
export class ToggleSwitch3Component implements OnInit{
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  toggleSwitch3(event: any) {
    this.toggleSwitch(event, this.apiService, '65fd4b88622ac8070b3ba261'); // ID del foco3
  }


  toggleSwitch(event: any, apiService: any, id: string) {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const status = checked ? 1 : 0;

      apiService.updateComponentStatus(+id, status) // Convertir a número entero
        .subscribe(
          () => {
            console.log('Estado actualizado correctamente');
          },
          (error: any) => {
            console.error('Error al actualizar el estado:', error);
          }
        );
    }
  }
}
