import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({


  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']


})
export class ZodiacoComponent implements OnInit {
  formulario: FormGroup;
  resultado: string | null = null;
  imagenSigno: string | null = null;
    edad: number = 0;

  calcularSigno(): void {
    if (this.formulario.valid) {
        const { nombre, aPaterno, aMaterno, dia, mes, anio } = this.formulario.value;
      const signo = this.obtenerSignoChino(anio);

       this.edad = this.calcularEdad(anio, mes, dia);
    
  this.resultado = `Hola ${nombre} ${aPaterno} ${aMaterno}. Tu signo chino es: ${signo}. Tu edad es: ${this.edad} años. Fecha de nacimiento: ${dia}/${mes}/${anio}.`;
           this.imagenSigno = this.signosChinos[signo];
    }
  }
  private signosChinosArray: string[] = [
    "Rata", "Buey", "Tigre", "Conejo", "Dragon","Serpiente", "Caballo", "Cabra", "Mono","Gallo", "Perro", "Cerdo"
  ];

  
///constructor
  constructor() 
  
  {
    this.formulario = new FormGroup({ nombre: new FormControl('', Validators.required),   aPaterno: new FormControl('', Validators.required),   aMaterno: new FormControl('', Validators.required),  dia: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),mes: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),anio: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())])
    });
  }

  ngOnInit(): void {}
///funcioooooooooooon que calculaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


//calculaar laaaa edad

  calcularEdad(anio: number, mes: number, dia: number): number {
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const hoy = new Date(); 
  
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
  
    if (mesActual < mes - 1 || 
      (mesActual === mes - 1 && diaActual < dia)) {
      edad--; 
    }


    
  //con esto ya nomas ponemos el valor edad en el html y con eso mero recuerda
    return edad;
  }
  private obtenerSignoChino(anio: number): string {
    const indice = 
    (anio - 4) % 12; // Rata en 4
    return this.signosChinosArray[indice];
  }
//galeria de imagenes a striings
  private signosChinos: { [key: string]: string } = {
    "Mono": 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/462234198_871718485095828_8890942062117305602_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGm1F6dawobWmeeH9lIDaYjlVrSoTHlrMGVWtKhMeWswR6QfRdrbCV1gPoIngyGgwIT59uLWBtMWN_yn40GZk7C&_nc_ohc=Y6sgl17zqmcQ7kNvgFHLWCI&_nc_ht=scontent-qro1-1.xx&_nc_gid=AUWeojD2hr1cSmI-DJk3eP9&oh=00_AYA1HqtzE0_yHcQEPn9UO5CmrEeLGa9UUl6XWh7JWofGeQ&oe=670FAB1B',
   
    "Gallo": 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/462265136_871718258429184_5468163285019726059_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHS-hIpz9FC_vXSNHjj1_fmS1r-94_MsCFLWv73j8ywIco3kE2uKkMbIukTQsoEg-PlDqc7l6D5FwG_Tid5Zv0H&_nc_ohc=xG797cEdvlUQ7kNvgEMhPxK&_nc_ht=scontent-qro1-1.xx&_nc_gid=Av6cM9xJAkT7XVBLUb23yYg&oh=00_AYBMO-xTAqtPMc2al4LFWva7_hhgLN5SjrYJ4JMvf_nlfw&oe=670F7ED6',
   
    "Rata": 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/462544860_871718228429187_7820062175726871559_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFbJvCuTX0qMHpfu9MKl4VZwutcssTN7BTC61yyxM3sFOnV_FI5Lr6IMoKyoQpHhxiEzin-PQekzZDLV1-YJYX5&_nc_ohc=LeFYGzUd4JUQ7kNvgG5IFcQ&_nc_ht=scontent-qro1-1.xx&_nc_gid=AC4HWcpAY_G15qcLUEvH4fB&oh=00_AYCHAtJAv60vcvsoIZKghMguZVPE8_N27qITa4OX7zNv7A&oe=670F9BAD',  
   
    "Buey": 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462343396_871718618429148_5792042841955528948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2iXL-lmMmW-GHLN4CD1K-ZIbD-0Fku_pkhsP7QWS7-iY_Z1P8ZfxDL8VVUYB1OIPHLl-u-6WvQ0l-87vXR9Bo&_nc_ohc=N4VQnKrD3rkQ7kNvgHEzKgv&_nc_ht=scontent-qro1-2.xx&_nc_gid=AyDDl7eOubUaNdjXml7M0qQ&oh=00_AYAYwxO3Z1hnLz7N1gViO0KJD5PEATANcwD8za7M501OwA&oe=670F776D', 
   
    "Tigre": 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/462225629_871718238429186_5054271456113568378_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFSapyiukhuiJfwyggOhfXAPqMnJ4ZeN1c-oycnhl43V2S3nkGZyV6KFU1Li6_iCWG0W_LhSn6_zzQ07kq8fZow&_nc_ohc=cW4jtSluGvcQ7kNvgGsVyN2&_nc_ht=scontent-qro1-1.xx&_nc_gid=AMIAzoQmEdQapXa5pB-f9Ov&oh=00_AYAeXIYgOdmnhBUEke7ebmBLh7prtHD8vd1YP0zvYGtP6g&oe=670FACB7',
   
    "Conejo": 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462225828_871718308429179_8354261428779691821_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEwa7vAucPEk_bwihBnO0aGOI9YWLhX9U84j1hYuFf1TzGNB-_rMBQwrXaokNAnnxd-uXcJBb90CvZe_8y1Br4p&_nc_ohc=RCIuyonhnkAQ7kNvgEaHwFk&_nc_ht=scontent-qro1-2.xx&_nc_gid=Ag-I7cOBeXXPLa-iuCGFAYf&oh=00_AYCld1stm7-Q_htlkHvzkwv0n__ZEPIFrFW1g8f4NKzcMQ&oe=670F89DE',
   
    "Dragon": 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/462306296_871718425095834_5303580206403532785_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGWfnb1xhyvey9YSK-dVbUE1e1nGyOFbebV7WcbI4Vt5l9PnstdKvb7HePBuuACDxZ26i7bjVam_CaYU7wV9TFG&_nc_ohc=nl8DA1LX_YMQ7kNvgHFVdH1&_nc_ht=scontent-qro1-1.xx&_nc_gid=AAVGBe9CIwN0JQSQZxMOdAV&oh=00_AYBDXL0s45oM9ug9bdKZeBoHY9pz_UMXD5Dlri2mJtRXhA&oe=670FA024',
   
    "Serpiente": 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462452095_871718361762507_2347840285875870062_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyr3vngZGOaSgrrL3204D-xFw3ZoRNsBbEXDdmhE2wFuz55iOq_DeJmUhT4dHNcUMPvIT0k8qs9sFamd_NJMhD&_nc_ohc=yM1u-60b7IsQ7kNvgHzAvka&_nc_ht=scontent-qro1-2.xx&_nc_gid=ArSkcygkys1vJDatJQxha8g&oh=00_AYBBRnuGu8Att7XH6b_8H_n0Jy_aLsz-QFhA-yMZA42-lA&oe=670F9BE3',
   
    "Caballo": 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462425315_871718525095824_429218668119494624_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4lEerfZPmYqfudzsVsLt9rB5na1SRjPGsHmdrVJGM8UTL49pQ-tVeZgARd1BAX1h9TjEOX93lWZa5kVmm7_4r&_nc_ohc=2vXFprPJklIQ7kNvgHE6dcl&_nc_ht=scontent-qro1-2.xx&_nc_gid=A-Go0Eyi6LbQGQzz5K2xbxR&oh=00_AYCvqLpfjQdP86uhUWMXr7g3GSSCLwoLOL_-jo7ArFa2wA&oe=670F90AC',
   
    "Cabra": 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/462314974_871718625095814_5933163222890182555_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFHExhKSHFcUcoTr1VeK73-OZvm-bLm3bQ5m-b5subdtDoVquYzatyY8RNo6wF3X4wQIE9cwojmkZeIkNNmeyPU&_nc_ohc=TK-pnm26HKAQ7kNvgFBGmQ8&_nc_ht=scontent-qro1-1.xx&_nc_gid=AW4dmqCwu1WG4wEyTKT9TR2&oh=00_AYAhSkj44vTeCMkuHAFYJSO4zkv27dCBZbKLQ3aa0kbZ6Q&oe=670F7DAE',
   
    
    "Perro": 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462456842_871718455095831_7504870672719545410_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE3FouAuqRl6fYkSY9ipkcg8XtUsOf5DcLxe1Sw5_kNwj6xtZaXc66ENm75uWSmIPV7svpwvZAnksNR_GbGoD8f&_nc_ohc=WZoArxmhopcQ7kNvgHOz7mn&_nc_ht=scontent-qro1-2.xx&_nc_gid=AvmxVMRCNDiWmi2EV6HRDMD&oh=00_AYATppP23DCRp1QfElEznnXldrrgEKdiHt6tFtgX-1bM9w&oe=670FA507',"Cerdo": 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/462541600_871718331762510_3754887746876737662_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFPLM4XBSzhwnQljIKjmcTFxbIRIZhb8CDFshEhmFvwIAATsYc1NuB2I27qDnDmY-7kYuisKc-nngw0SrdOFK1G&_nc_ohc=6XLgIPEMrOkQ7kNvgFQ0Zyy&_nc_ht=scontent-qro1-2.xx&_nc_gid=AGwbzUmtuyJAfz6Pw8HGpa9&oh=00_AYAh-BvNT1e629IDY2X_AuuEguRca7qLeB83S1lPfAUxJg&oe=670F93FC',
 };
}
