import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {

  //Funcao para mudar cor do texto
  condicao: boolean = false;
  //Lista de aprovados e reprovados
  lista: string[] = ['Aprovado', 'Aprovado', 'Reprovado'];
}
