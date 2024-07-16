import { Injectable } from "@angular/core";
import { Chart } from 'chart.js';

@Injectable()
export class ChartService {
    constructor() {
        const plugin = {
            id: 'customBackgroundPlugin',
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                const chartArea = chart.chartArea;
                if (!chartArea) {
                    return;
                }
                // Check if the background color option is provided
                const backgroundColor = chart.config.options.plugins.chartAreaBackgroundColor?.color;
                if (backgroundColor) {
                    ctx.save();
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(
                        chartArea.left,
                        chartArea.top,
                        chartArea.right - chartArea.left,
                        chartArea.bottom - chartArea.top
                    );
                    ctx.restore();
                }
            }
        };

        Chart.register(plugin);
    }
}