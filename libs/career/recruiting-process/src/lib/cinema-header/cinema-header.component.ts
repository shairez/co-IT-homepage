import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BackButtonComponent } from '@cp/ui';

@Component({
  selector: 'cp-cinema-header',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './cinema-header.component.html',
  styleUrls: ['./cinema-header.component.scss'],
})
export class CinemaHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}