import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, LineChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgChartsModule,
    HighchartsChartModule,
    ChartModule,
    ApolloModule,
    HttpClientModule,
    GraphQLModule,
    AgGridModule,
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting] }, // add as factory to your providers
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
