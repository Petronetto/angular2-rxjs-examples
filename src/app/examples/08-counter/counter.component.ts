import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    styles: [`
    md-card {
      width: 400px;
      box-sizing: border-box;
      margin: 16px;
    }
    .card-container {
      display: flex;
      flex-flow: row wrap;
    }
    `],
    template: `
    <div class="card-container">
        <md-card>
          <app-counter-master></app-counter-master>
        </md-card>
        <md-card>
            <app-counter-client></app-counter-client>
        </md-card>
    </div>
    `
})
export class CounterComponent implements OnInit {}