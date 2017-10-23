(function(Charts) {
    'use strict';

    /**
     * Chart formatters.
     */
    Charts.formatter = {
        /**
         * Format a pie label.
         *
         * @return {string}
         */
        pieLabel: function() {
            return '<b>' + Highcharts.numberFormat(this.y, 0, '.', ',') + '</b><br>' + this.point.name;
        }
    };

    /**
     * The chart config settings.
     */
    Charts.config = {};
    Charts.loaded = 0;

    Charts.config['all'] = {
        type: 'line',

        credits: {
            enabled: false
        },

        chart: {
            events: {
                load: function() {
                    Charts.loaded++;

                    if(Charts.loaded == Object.keys(Charts.items).length) {
                        // eslint-disable-next-line no-console
                        console.log(Charts.loaded);
                    }
                }
            }
        },

        series: []
    };

    Charts.config['js-charts-line'] = {
        type: 'line',

        yAxis: {
            title: {
                text: false
            },
            gridLineWidth:      0,
            minorGridLineWidth: 0
        },

        xAxis: {
            type: 'datetime',
            min:  Date.UTC(1970, 0, 0)
        },

        legend: {
            enabled: true
        },

        series: [{
            type: 'line'
        }, {
            type: 'line'
        }]
    };

    Charts.config['js-charts-pie'] = {
        type: 'pie',

        plotOptions: {
            pie: {
                dataLabels: {
                    connectorWidth: 0
                }
            }
        },

        tooltip: {
            formatter: Charts.formatter.pieLabel
        },

        series: [{
            type:       'pie',
            innerSize:  '60%',
            dataLabels: {
                formatter: Charts.formatter.pieLabel
            }
        }]
    };
})(window.Way2web.Charts = window.Way2web.Charts || {});
