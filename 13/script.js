class Sirket {
  constructor(sirketAdi, flialAdi) {
    this.ad = sirketAdi,
    this.flial = flialAdi
  }
  isciler = [
     [],
     [],
     []
  ]
gonder(){
    let data =this.isciler;
    let ad =document.getElementById("ad").value;
    let vezife =document.getElementById("vezife").value;
    let maas =document.getElementById("maas").value;

    data[0].push(ad);
    data[1].push(vezife);
    data[2].push(maas);
}
  tableQur(){
      document.getElementById("tbl").innerHTML =a.tableQur;
       let ekran ="";
      for(i=0;i<ad.value;i++){
          ekran +=`<tr>`;
          for(j=0;j<ad.value;j++){
              ekran +=`<td></td>`;
          }
         ekran += `</tr>`
      }
  }
}
const a = new Sirket ("Yup Texnology", "Nizami");
const b =new Sirket ("Yup Tecnology","Elmler");


document.getElementById("sirketAdi").innerHTML=a.ad;
document.getElementById("flial").innerHTML=a.flial;