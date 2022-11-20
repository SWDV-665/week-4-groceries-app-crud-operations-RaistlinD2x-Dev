import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { DataServiceService } from './data-service.service'

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dataService: DataServiceService, private alertController: AlertController) { }

  loadItems() {
    return this.dataService.getItems()
  }

  removeItem(index) {
    this.dataService.removeItem(index)
  }

  async addItem() {
    const alert = await this.alertController.create({
      header: 'Add grocery item',
      buttons: [
        {
          text: 'Add',
          handler: item => {
            this.dataService.addItem(item)
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Item Name',
          name: 'name'
        },
        {
          placeholder: 'Quantity',
          name: 'quantity'
        }
      ],
    });

    await alert.present();
  }

  async editItem(item, index) {
    const alert = await this.alertController.create({
      header: 'Edit Item',
      buttons: [
        {
          text: 'Edit',
          handler: item => {
            this.dataService.updateItem(item, index)
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Item Name',
          name: 'name',
          value: item.name
        },
        {
          placeholder: 'Quantity',
          name: 'quantity',
          value: item.quantity
        }
      ],
    });

    await alert.present();
  }
}
