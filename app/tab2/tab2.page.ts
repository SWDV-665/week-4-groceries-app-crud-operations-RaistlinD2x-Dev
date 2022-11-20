import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { DataServiceService } from '../data-service.service'
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  constructor(private alertController: AlertController, private dialogService: DialogService, private dataService: DataServiceService) {
  }

  loadItems() {
    return this.dataService.getItems()
  }

  removeItem(index) {
    this.dialogService.removeItem(index)
  }

  addItem() {
    this.dialogService.addItem()
  }

  editItem(item, index) {
    this.dialogService.editItem(item, index)
  }

  

  
      
}



