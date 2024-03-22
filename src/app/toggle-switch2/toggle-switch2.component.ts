import { Component, OnInit } from '@angular/core';
import { ToggleSwitch2ApiService } from '../toggle-switch2-api.service';

@Component({
  selector: 'app-toggle-switch2',
  templateUrl: './toggle-switch2.component.html',
  styleUrl: './toggle-switch2.component.css'
})
export class ToggleSwitch2Component implements OnInit{
  constructor(
    private toggleSwitch2ApiService: ToggleSwitch2ApiService,
  ) { }

  ngOnInit(): void {
  }

  toggleSwitch2(event: any) {
    this.toggleSwitch(event, this.toggleSwitch2ApiService, '65fd4b85622ac8070b3ba260'); // ID del foco1
  }


  toggleSwitch(event: any, toggleSwitch2ApiService: any, id: string) {
    if (event.target instanceof HTMLInputElement) {
      const checked = event.target.checked;
      const status = checked ? 1 : 0;

      toggleSwitch2ApiService.updateComponentStatus(+id, status) // Convertir a número entero
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
