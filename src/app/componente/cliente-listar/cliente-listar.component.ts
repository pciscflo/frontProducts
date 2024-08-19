import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Cliente} from "../../model/cliente";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {ClienteService} from "../../services/cliente.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    DatePipe,
    MatSort,
    MatSortHeader
  ],
  templateUrl: './cliente-listar.component.html',
  styleUrl: './cliente-listar.component.css'
})
export class ClienteListarComponent implements OnInit,  AfterViewInit{
  lista:Cliente[] = [];
  displayedColumns = ['clienteId', 'nombre', 'direccion', 'email','telefono','fechaNacimiento'];
  dataSource = new MatTableDataSource<Cliente>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  clienteService: ClienteService = inject(ClienteService);
  router: Router = inject(Router);

  constructor(){
    console.log("Load Constructor..");
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    }
  ngOnInit(): void {
    console.log("Load Lista!!!!");
    this.loadLista()
  }

  loadLista(): void {
    this.clienteService.list().subscribe({
      next: (data) => this.dataSource.data = data,
      error: (err) => console.error('Error en la consulta', err)
    });
  }
}
