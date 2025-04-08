import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente05',
  imports: [CommonModule],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {

  //Vetor de Nomes
  nomes:string[] = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro', 'Paulo', 'Carlos', 'Fernanda', 'Juliana', 'Roberto'];

}
