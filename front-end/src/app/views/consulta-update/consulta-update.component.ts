import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './../../services/consulta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from './../../model/consulta.model';
@Component({
  selector: 'app-consulta-update',
  templateUrl: './consulta-update.component.html',
  styleUrls: ['./consulta-update.component.css']
})
export class ConsultaUpdateComponent implements OnInit {

  consulta: Consulta = {
    medic: '',
    pacient: '',
    description: ''
  }

  
  constructor(private consultaService: ConsultaService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.consultaService.readById(id).subscribe(consulta => {
      this.consulta = consulta
    })
  }
  update(): void{

  }
  cancel(): void{
    this.router.navigate(['/home'])
  }
}
