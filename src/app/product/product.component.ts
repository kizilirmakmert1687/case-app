import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categori } from '../categori';
import { CaseAppServiceService } from '../case-app-service.service';
import { altCategori } from '../altCategori';
import { productAdd } from '../productAdd';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  url = 'http://localhost:3000/categori';
  url1 = 'http://localhost:3000/altCategori';
  url2 = 'http://localhost:3000/productAdd';


 name = '';
 altName = '';

 catego:categori[]=[];
 categoris=new categori();
 altCatego:altCategori[]=[];
 altCategoris=new altCategori();
 productAdd:productAdd[]=[];
 productAdds=new productAdd();
 searchResults: any[] = [];

 isTrue: boolean = false;


 constructor(private http: HttpClient,private service:CaseAppServiceService) { }

 ngOnInit() {
   this.service.getCategori().subscribe(read=>{
     console.log(read)
     this.catego=read
     console.log(this.catego)
   })
   this.service.getAltCategori().subscribe(read=>{
    console.log(read)
    this.altCatego=read
    console.log(this.altCatego)
  })
  this.service.getProductAdd().subscribe(read=>{
    this.productAdd=read
   })



}
altCategoriSelect(id: string){
 

  var filterAltCategori = this.altCatego.find(product => product.id === id);
  console.log(filterAltCategori?.altName)
  var filteredProducts = this.productAdd.find(product => product.productAltCategori === filterAltCategori?.altName);
  console.log(filteredProducts?.productName)



  this.searchResults.splice(0);

  this.productAdds.productName=filteredProducts?.productName
  this.productAdds.productPrice=filteredProducts?.productPrice
  this.productAdds.productRice=filteredProducts?.productRice

  this.searchResults.push(this.productAdds)
  console.log(this.searchResults)

  if(this.searchResults.length>0){
    this.isTrue=true

  }
  else{
  }

  


 





  

}
}

