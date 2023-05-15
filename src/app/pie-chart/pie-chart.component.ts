import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor() {
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
        text: 'Average Orders',
        align: 'center'
      },
      credits:{
        enabled:false
    },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'Laptop', y: 73.24 },
              { name: 'Phone', y: 12.93 },
              { name: 'Monitor', y: 4.73 },
              { name: 'HeadPhones', y: 2.50 },
              { name: 'Camera', y: 4.93 }
          ]
      }]
  }
  }
}
