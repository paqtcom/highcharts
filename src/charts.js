import Highcharts from 'highcharts';

/**
 * Add charts to the page with ajax.
 *
 * @param {object} element
 * @param {object} config
 *
 * @return {object}
 */
window.Chart = (function(element, config) {
    'use strict';

    var version = '3.0.0';

    var highchart;

    var settings = {
        id:     null,
        url:    null,
        chart:  null,
        series: null,
        titles: {}
    };

    var attributes = {
        url:        'chart-url',
        title:      'chart-title',
        xAxisTitle: 'chart-xaxis-title',
        yAxisTitle: 'chart-yaxis-title',
        zAxisTitle: 'chart-zaxis-title',
        preset:     'chart-preset',
        dynamic:    'chart-dynamic'
    };

    var functions = {
        /**
         * Get the element.
         * Get the url from the element.
         * Then get the json data.
         */
        init: function() {
            if (!element || !element.attr('id')) {
                return;
            }

            settings.id = element.attr('id');
            settings.preset = element.data(attributes.preset);
            settings.url = element.data(attributes.url);
            settings.dynamic = element.data(attributes.dynamic);
            settings.title = element.data(attributes.title);
            settings.titles.xAxis = element.data(attributes.xAxisTitle);
            settings.titles.yAxis = element.data(attributes.yAxisTitle);
            settings.titles.zAxis = element.data(attributes.zAxisTitle);

            fetch(settings.url)
                .then(response => response.json())
                .then(data => {
                    functions.addChart(data);
                });
        },

        /**
         * Add a chart.
         *
         * @param {object} series
         */
        addChart: function(series) {
            settings.chart = Object.assign({}, config['all'], config[settings.preset] || {}); ;

            settings.series = series;
            const HighchartsPackage = Highcharts || window.Highcharts;

            highchart = HighchartsPackage.chart(
                settings.id,
                settings.chart
            );

            settings.series.forEach(functions.addSeries.bind(this));
            Object.entries(settings.titles).forEach(functions.setTitle.bind(this));

            if(settings.title) {
                highchart.setTitle({
                    text: settings.title
                });
            }
        },

        /**
         * Add the series name and data.
         *
         * @param {object} serie
         * @param {number} index
         */
        addSeries: function(serie, index) {
            if(settings.dynamic) {
                highchart.addSeries(serie);

                return;
            }

            if(serie.name) {
                if(!highchart.series[index]) {
                    return;
                }

                highchart.series[index].update({
                    name: serie.name
                }, false);
            }

            if (highchart.series[index]) {
                highchart.series[index].setData(serie.data);
            }
        },

        /**
         * Set the chart titles.
         *
         * @param {string} title
         * @param {string} key
         */
        setTitle: function(title, key) {
            if(highchart[key]) {
                highchart[key][0].setTitle({
                    text: title
                });
            }
        },

        /**
         * Update chart.
         *
         * @param {object} values
         */
        updateChart: function(values) {
            highchart.update(values);
        },

        /**
         * Filter the chart.
         *
         * @param {string} axis
         * @param {object} values
         * @param {number} index
         */
        filterChart: function(axis, values, index) {
            var axisIndex = index;

            if(!axisIndex) {
                axisIndex = 0;
            }

            highchart[axis][axisIndex].update(values);
        },

        /**
         * Show the loading message.
         */
        showLoading: function() {
            highchart.showLoading();
        },

        /**
         * Hide the loading message.
         */
        hideLoading: function() {
            highchart.hideLoading();
        }
    };

    return {
        settings:    settings,
        add:         functions.addChart,
        filter:      functions.filterChart,
        update:      functions.updateChart,
        init:        functions.init,
        showLoading: functions.showLoading,
        hideLoading: functions.hideLoading,
        version:     version
    };
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.Chart;
}
