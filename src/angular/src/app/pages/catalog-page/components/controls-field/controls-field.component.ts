import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
interface ICriteria {
  name: string;
  id: number;
  size: number;
}
@Component({
  selector: 'app-controls-field',
  templateUrl: './controls-field.component.html',
  styleUrls: ['./controls-field.component.scss']
})
export class ControlsFieldComponent implements OnInit {
  criteria: SelectItem[];
  criteriaPage: SelectItem[];
  selectedCriteria: ICriteria;
  selectedCriteriaPage: ICriteria;

  constructor() {
    this.criteria = [
      { label: 'Выберите критерий', value: null },
      { label: 'По наименованию', value: { id: 1, name: 'name' } },
      { label: 'По новизне', value: { id: 2, name: 'new' } },
      { label: 'По дате', value: { id: 3, name: 'date' } },
    ];
    this.criteriaPage = [
      { label: '8', value: { id: 1, size: 8 } },
      { label: '16', value: { id: 2, size: 16 } },
      { label: '24', value: { id: 2, size: 24 } },
      { label: '32', value: { id: 2, size: 32 } },
      { label: '50', value: { id: 3, size: 50 } },
      { label: '100', value: { id: 3, size: 100 } },
    ];
  }

  ngOnInit() {
  }

}
