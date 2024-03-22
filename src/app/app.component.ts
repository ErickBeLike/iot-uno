import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ToggleSwitch2ApiService } from './toggle-switch2-api.service';
import { ToggleSwitch3ApiService } from './toggle-switch3-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iotuno';

  constructor(
    private apiService: ApiService,
    private toggleSwitch2ApiService: ToggleSwitch2ApiService,
    private toggleSwitch3ApiService: ToggleSwitch3ApiService
  ) { }

  ngOnInit(): void {
  }

  toggleSwitch1(event: any) {
    this.toggleSwitch(event, this.apiService, '65fd4b80622ac8070b3ba25f'); // ID del foco1
  }

  toggleSwitch2(event: any) {
    this.toggleSwitch(event, this.toggleSwitch2ApiService, '65fd4b85622ac8070b3ba260'); // ID del foco2
  }

  toggleSwitch3(event: any) {
    this.toggleSwitch(event, this.toggleSwitch3ApiService, '65fd4b88622ac8070b3ba261'); // ID del foco3
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
