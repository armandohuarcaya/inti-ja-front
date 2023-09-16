import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { MGroupEquipeComponent } from '../../modals/m-group-equipe/m-group-equipe.component';
import { NbDialogService } from '@nebular/theme';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'app-v-groups',
  templateUrl: './v-groups.component.html',
  styleUrls: ['./v-groups.component.scss']
})
export class VGroupsComponent implements OnInit {
  formHeaders:any = FormGroup;
  loading:boolean = false;
  periodos:any = [];
  diciplinas:any = [];
  categorias:any = [];
  data:any = [];

  // dataFut:any = [];
  // dataBasq:any = [];
  // dataVoley:any = [];
  constructor(private service: GeneralService, private fb: FormBuilder, private nbDialogService: NbDialogService) {}
  ngOnInit() {
    this.formFields();
    this.getPeriodos();

    // this.listDataFutbol();
    // this.listDataBasquet();
    // this.listDataVoley();
  }
  private formFields() {
    const controls = {
      id_periodo: ['', [Validators.required]],
      id_diciplina: ['', [Validators.required]],
      id_categoria: [''],
    };
    this.formHeaders = this.fb.group(controls);
  }
  getPeriodos() {
    const serviceName = END_POINTS.el_inti.filterComun + '/periodos';
    const params = {
      estado: '1',
      id_tipo_evento: 1,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.periodos = res.data || [];
      if (this.periodos.length>0) {
        this.formHeaders.controls['id_periodo'].setValue(this.periodos[0].id_periodo);
        this.getDiciplinas();
        this.getCategorias();
      }
    });
  }
  getDiciplinas() {
    const serviceName = END_POINTS.el_inti.filterComun + '/diciplines';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.diciplinas = res.data || [];
      if (this.diciplinas.length>0) {
        this.formHeaders.controls['id_diciplina'].setValue(this.diciplinas[0].id_diciplina);
        this.listGroups();
      }
    });
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
    });
  }
  filters() {
    this.listGroups();
  }
  listGroups() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/group-equipe';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
      id_diciplina: this.formHeaders.value.id_diciplina,
      id_categoria: this.formHeaders.value.id_categoria,
    };
    this.loading = true;
    if (params.id_periodo && params.id_diciplina) {
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.data = res.data || [];
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  openGroupsEquipes() {
    this.nbDialogService.open(MGroupEquipeComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result === 'ok') {
        this.listGroups();
      }
    });
  }
  deleteGruoup(item:any) {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/group-equipe';
    this.nbDialogService.open(DialogConfimComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        tittle: 'ELIMINAR',
        text: '¿ Estas seguro que deseas eliminar ?',
        icon: 'trash-outline',
        colorIcon: 'danger',
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: 'primary',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result.isConfirmed) {
          this.loading = true;
          this.service.deleteNameId$(serviceName, item.id_grupo_equipo).subscribe(r => {
            if (r.success) {
              this.listGroups();
            }
          }, () => {this.loading = false}, () => {this.loading = false},);
      }
    });
  }

  // selectCategoryFutsal(value:any) {
  //   this.listDataFutbol();
  //   if (value !== 'TODOS') {
  //     this.dataFut = this.dataFut.filter((re:any) => re.categoria === value);
  //   }
  // }
  // listDataFutbol() {
  //   this.dataFut = [
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     }
  //   ]
  // }

  // /// basquetbol
  // selectCategoryBasquet(value:any) {
  //   this.listDataBasquet();
  //   if (value !== 'TODOS') {
  //     this.dataBasq = this.dataBasq.filter((re:any) => re.categoria === value);
  //   }
  // }
  // listDataBasquet() {
  //   this.dataBasq = [
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //   ]
  // }

  // // voleybol

  // selectCategoryVoley(value:any) {
  //   this.listDataVoley();
  //   if (value !== 'TODOS') {
  //     this.dataVoley = this.dataVoley.filter((re:any) => re.categoria === value);
  //   }
  // }
  // listDataVoley() {
  //   this.dataVoley = [
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     }
  //   ]
  // }
}
