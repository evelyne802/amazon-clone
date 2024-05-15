import { Component, Input } from '@angular/core';
import { CategoryRecc } from '../../../../types';

@Component({
  selector: 'app-single-suggestion',
  standalone: true,
  imports: [],
  templateUrl: './single-suggestion.component.html',
  styleUrl: './single-suggestion.component.css'
})
export class SingleSuggestionComponent {

  @Input() category: CategoryRecc = { name: '', picture: '' };
}
