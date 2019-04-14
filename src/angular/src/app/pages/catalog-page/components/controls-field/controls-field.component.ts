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

  isOpenCriteria: boolean = false;
  isOpenCriteriaPage: boolean = false;

  constructor() {
    this.criteria = [
      { label: 'По наименованию', value: { id: 1, name: 'name' } },
      { label: 'По новизне', value: { id: 2, name: 'new' } },
      { label: 'По дате', value: { id: 3, name: 'date' } },
    ];
    this.criteriaPage = [
      { label: '8', value: { id: 1, size: 16 } },
      { label: '16', value: { id: 2, size: 32 } },
      { label: '24', value: { id: 2, size: 64 } },
      { label: '32', value: { id: 2, size: 100 } },
    ];
  }

  ngOnInit() {
  }

  openSelectedCriteria() {
    this.isOpenCriteria = !this.isOpenCriteria;
  }
  openSelectedCriteriaPage() {
    this.isOpenCriteriaPage = !this.isOpenCriteriaPage;
  }
}
