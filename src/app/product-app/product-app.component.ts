import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CaseAppServiceService } from '../case-app-service.service';
import { altCategori } from '../altCategori';
import { categori } from '../categori';
import { productAdd } from '../productAdd';





@Component({
  selector: 'app-product-app',
  templateUrl: './product-app.component.html',
  styleUrls: ['./product-app.component.css']
})
export class ProductAppComponent {
  url = 'http://localhost:3000/categori';
  url1 = 'http://localhost:3000/altCategori';
  url2 = 'http://localhost:3000/productAdd';


 productName:string|undefined;
 productPrice:string|undefined;
 productRice:string|undefined;
 productİmage:string|undefined;
 productCategori :string|undefined;
 productAltCategori:string|undefined;

 id:string|undefined;
 name:string|undefined;
 price:string|undefined;
 rice:string|undefined;
 categori:string|undefined;
 altCategori:string|undefined;


 catego:categori[]=[];
 categoris=new categori();
 altCatego:altCategori[]=[];
 altCategoris=new altCategori();
 productAdd:productAdd[]=[];
 productAdds=new productAdd();

 constructor(private http: HttpClient,private service:CaseAppServiceService) { }

 ngOnInit() {
   this.service.getCategori().subscribe(read=>{
     console.log(read)
     this.catego=read
     console.log(this.catego)
   })
   this.service.getAltCategori().subscribe(read=>{
    this.altCatego=read
   })
   this.service.getProductAdd().subscribe(read=>{
    this.productAdd=read
   })
   


   
 }
 productDelete(id: string){
  const deleteProductFilter = this.productAdd.find(x => x.id == id);
     console.log(deleteProductFilter?.id)
     alert("Ürünü silmek istediğinizden eminmisiniz")
     
     this.service.deleteProduct(id).subscribe(()=>{
      console.log("ürün silindi")
     })

     

 }
 productUpdate(id: string){
  var updateProductFilter = this.productAdd.find(x => x.id == id);
  
  this.id=updateProductFilter?.id
  this.productName=updateProductFilter?.productName
  this.productPrice=updateProductFilter?.productPrice
  this.productRice=updateProductFilter?.productRice
  this.productCategori=updateProductFilter?.productCategori
  this.productAltCategori=updateProductFilter?.productAltCategori





 }
 updateProductModal(): void{


  const productData = {
    productName: this.productName,
    productPrice: this.productPrice,
    productRice:this.productRice,
    productCategori:this.productCategori,
    productAltCategori:this.productAltCategori
  };
  

  if (this.id !== undefined) {
    this.service.updateProduct(this.id, productData).subscribe(
      response => {
        console.log('Güncelleme işlemi başarılı:', response);
        console.log(this.productAdd)
        // İşlemin başarılı olduğu durumda yapılacak işlemler
      },
      error => {
        console.error('Güncelleme işlemi hata:', error);
        // İşlemin hatalı olduğu durumda yapılacak işlemler
      }
    );
  }
  



 }
 productsAdd(){

  this.http.post(this.url2, this.productAdds).subscribe(response => {
    console.log(response);
    
    alert("Ürün Eklendi")
    // Yapılacak işlemler
  }, error => {
    console.error(error);
    // Hata işleme
  });


 }

}
