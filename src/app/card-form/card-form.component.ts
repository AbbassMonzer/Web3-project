import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  card: Card;
  public name = "Abbass Monzer";
  public number = "2332344241156621";
  public expiryDate = "12/7";
  public cvc = "123";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.card = {
      ownerName: this.name,
      cardNumber: this.number,
      expiryDate: this.expiryDate,
      cvc: this.cvc,
    }
    this.dialog.open(DialogComponent, {
      width: '700px',
      data: this.card
    });
  }

}
