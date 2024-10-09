import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-laravel-api';
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Appel au service pour récupérer les articles
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }
}
