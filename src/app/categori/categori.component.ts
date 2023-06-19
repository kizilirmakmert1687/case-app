import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categori } from '../categori';
import { CaseAppServiceService } from '../case-app-service.service';
import { altCategori } from '../altCategori';

@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.css']
})
export class CategoriComponent {
   url = 'http://localhost:3000/categori';
   url1 = 'http://localhost:3000/altCategori';

  name = '';
  altName = '';

  catego:categori[]=[];
  categoris=new categori();
  altCatego:altCategori[]=[];
  altCategoris=new altCategori();




  constructor(private http: HttpClient,private service:CaseAppServiceService) { }

  ngOnInit() {
    this.service.getCategori().subscribe(read=>{
      console.log(read)
      this.catego=read
      console.log(this.catego)
    })
    

 
    
  }
  AltCategori(){
    
    this.http.post(this.url1, this.altCategoris).subscribe(response => {
      console.log(response);
      
      alert("Alt kategori oluşturuldu")
      // Yapılacak işlemler
    }, error => {
      console.error(error);
      // Hata işleme
    });



  }
  categoriAdd(){
    this.http.post(this.url, this.categoris).subscribe(response => {
      console.log(response);
      
      alert("kategori oluşturuldu")
      // Yapılacak işlemler
    }, error => {
      console.error(error);
      // Hata işleme
    });
  }
}
