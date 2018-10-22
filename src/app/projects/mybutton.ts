import {Component} from '@angular/core';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'my-button',
  templateUrl: 'my-button.html',
  styleUrls: ['my-button.css'],
})
export class MyButton {
  handleClick() {
    prompt("Hey!");
  }
}
