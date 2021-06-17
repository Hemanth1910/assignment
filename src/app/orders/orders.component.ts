import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  selectedOrder: any  = {}

  orderDetails: any = [
    {
      customerName: 'John',
      NumberOfItems: '3',
      address: 'Drno:102, abc colony, Harding Town, NJ ',
      items: [{ name: 'Bread', cost: '40' },
      { name: 'Veggies', cost: '35' },
      { name: 'Frid Rice', cost: '150' },
      ],
      totalAmount: '225',
      status: 'OrderReceived'
    },
    {
      customerName: 'George',
      NumberOfItems: '4',
      address: 'Drno:502, xyz colony, millontown, Ny ',
      items: [{ name: 'chilly Chicken', cost: '40' },
          { name: 'Milk Shake', cost: '35' },
          { name: 'Veg-Biryani', cost: '150' },
          { name: 'ice-cream', cost: '80' },
      ],
      totalAmount: '305',
      status: 'OrderReceived'
    },
    {
      customerName: 'Harry',
      NumberOfItems: '6',
      address: 'Drno:502, xyz colony, millontown, Ny ',
      items: [{ name: 'chilly Chicken', cost: '40' },
          { name: 'Milk Shake', cost: '35' },
          { name: 'Veg-Biryani', cost: '150' },
          { name: 'Ice-cream', cost: '80' },
      ],     
      totalAmount: '305',
      status: 'OrderReceived'
    },
    {
      customerName: 'Marry',
      NumberOfItems: '2',
      address: 'Drno:502, xyz colony, millontown, Ny ',
      items: [{ name: 'Chilly Chicken', cost: '40' },
      { name: 'Milk Shake', cost: '35' },
      { name: 'Veg-Biryani', cost: '150' },
      { name: 'Ice-cream', cost: '80' },
      ],
      totalAmount: '305',
      status: 'OrderReceived'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(name:any){ 
    if(this.orderDetails.length){
      for(let i =0; i < this.orderDetails.length; i++){       
        if(this.orderDetails[i].customerName ==  name){
          this.selectedOrder =  this.orderDetails[i]
          console.log(this.selectedOrder)
        }    
      }
    }
  }


  changeStatus(status: any, i:any){
    console.log(status)
    if(status =='OrderReceived'){
      this.orderDetails[i].status = 'Preparing'    
    }else{
      this.orderDetails[i].status = 'Ready To Serve'     
    }
  }
}
