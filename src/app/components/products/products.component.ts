import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../product';
import { RouterModule , Routes} from '@angular/router';


 
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
 
  


  products:any; // données dans un tableau
  product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    console.log('hello products');
    this.productService.getProducts().subscribe(res => {
      console.log(res);
      this.products =res;
    });
  }
  insertData(){
    // console.log(this.product);
    this.productService.insertData(this.product).subscribe(res => {
      // console.log(res);
      //refresh
      this.getProductData();
    })

  }
  deleteData(id:any){
    //console.log(id);
    this.productService.deleteData(id).subscribe(res => {
      //console.log(res); 
      //refresh
      this.getProductData();
    })
  }




}

