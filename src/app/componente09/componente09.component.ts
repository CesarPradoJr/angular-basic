import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente09',
  imports: [FormsModule],
  templateUrl: './componente09.component.html',
  styleUrl: './componente09.component.css'
})
export class Componente09Component {

  //Variável Nome
  nome: string = '';
  cidade: string = '';

}
