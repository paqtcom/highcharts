# Chart

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Add highcharts to the page with ajax.

To connect the highchart, you have to set the class `js-chart` and an `id`.
To connect the chart settings, you can bind on the id of the div. (e.g. `js-charts-line`)
In the `Charts.config` you can set all the settings for the chart.
You can also set the ajax url in the `data-chart-url`
The JSON contain the data and the name.
The labels for the x, y and z axis can also be set the data attributes (e.g. `data-chart-xaxis-title`)
Other information must be set in the config.

See also the example files in the test folder.


Example of a custom event.
```
Charts.loaded = 0;

...

chart: {
    events: {
        load: function() {
            Charts.loaded++

            if(Charts.loaded == Object.keys(Charts.items).length) {
                ...
            }
        }
    }
}
```

You can use all these event types:

* addSeries
* afterPrint
* beforePrint
* click
* drilldown
* drillup
* drillupall
* load
* redraw
* render
* selection

http://api.highcharts.com/highcharts/chart.events

[downloads-image]: https://img.shields.io/npm/dm/way2web-highcharts.svg
[npm-url]: https://www.npmjs.com/package/way2web-highcharts
[npm-image]: https://img.shields.io/npm/v/way2web-highcharts.svg
