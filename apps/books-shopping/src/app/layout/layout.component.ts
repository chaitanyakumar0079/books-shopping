import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../shopping-books/search/search.service';

@Component({
  selector: 'books-shopping-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  status: boolean = false;
  cartCount: number = 0;
  collectionCount: number = 0;

  constructor(private _service: SearchService) {}

  ngOnInit(): void {
    this._service.cartCount.subscribe((count) => (this.cartCount = count));
    this._service.collectionCount.subscribe(
      (data) => (this.collectionCount = data)
    );
  }

  isSideNavOpen() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}
