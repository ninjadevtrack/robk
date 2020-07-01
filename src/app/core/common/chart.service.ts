import { Chart } from "chart.js";
import { Injectable } from "@angular/core";

@Injectable()
export class ChartService {
    constructor() {
        Chart.pluginService.register({
            beforeDraw: function (chart, easing) {
                if (
                    chart.config.options.chartArea &&
                    chart.config.options.chartArea.backgroundColor
                ) {
                    const helpers = Chart.helpers;
                    const ctx = chart.chart.ctx;
                    const chartArea = chart.chartArea;

                    ctx.save();
                    ctx.fillStyle =
                        chart.config.options.chartArea.backgroundColor;
                    ctx.fillRect(
                        chartArea.left,
                        chartArea.top,
                        chartArea.right - chartArea.left,
                        chartArea.bottom - chartArea.top
                    );
                    ctx.restore();
                }
            }
        });
    }
}
