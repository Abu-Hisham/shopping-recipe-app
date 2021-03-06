import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef 
  @ViewChild('amountInput') amountInputReference: ElementRef
 
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem()
  {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const newIngredent = new Ingredient(ingName,ingAmount);
    this.shoppingListService.addIngredient(newIngredent); 
  }
}
