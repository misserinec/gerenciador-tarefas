import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
    selector: 'app-listar-tarefa',
    templateUrl: './listar-tarefa.component.html',
    styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

    tarefas: Tarefa[];

    constructor(private tarefaService: TarefaService) {}

    ngOnInit() {
        this.tarefas = this.listarTodos();
        this.tarefas = [
            new Tarefa(1, 'Tarefa 1', true),
            new Tarefa(2, 'Tarefa 2', false),
            new Tarefa(3, 'Tarefa 3', true),
            new Tarefa(4, 'Tarefa 4', false),
            new Tarefa(5, 'Tarefa 5', true),
            new Tarefa(6, 'Tarefa 6', true),
            new Tarefa(7, 'Tarefa 7', false),
        ];
    }

    listarTodos(): Tarefa[] {
        return this.tarefaService.listarTodos();
    }

    remover($event: any, tarefa: Tarefa): void {
        $event.preventDefault();
        if (confirm('Deseja remover a tarefa "'+ tarefa.nome +'"?')) {
            this.tarefaService.remover(tarefa.id);
            this.tarefas = this.tarefaService.listarTodos();
        }
    }
}
