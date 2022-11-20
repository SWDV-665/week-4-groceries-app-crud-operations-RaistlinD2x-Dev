import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  items: Array<{name: string, quantity: number}> = []

  constructor() { 
    
  }

  getItems() {
    return this.items
  }

  addItem(item) {
    this.items.push(item)
  }

  removeItem(index) {
    this.items.splice(index, 1)
  }

  updateItem(item, index) {
    this.items[index] = item
  }
}
