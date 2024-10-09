import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {

  id:any;
  data:any;
  product = new Product();


  constructor( private route:ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();

  }
  getData(){
    this.productService.getProductById(this.id).subscribe(
      res => {
        // console.log(res);
        this.data = res;
        this.product = this.data;

      }
    )
  }
  updateProduct(){
    this.productService.updateData(this.id, this.product).subscribe(
      res => {
        console.log('Product updated successfully');
      // Redirect to home page after successful update
      this.router.navigate(['/']);  // This navigates to the home page (path '/')
    }, error => {
      console.error('Error updating product', error);
    });
  }



}

