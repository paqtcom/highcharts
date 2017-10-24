# Chart

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats]

## Add highcharts to the page with ajax.

To connect the highchart, you have to set the class `js-chart` and an `id`.
To connect the chart settings, you can bind on the id of the div. (e.g. `js-charts-line`)
In the `Charts.config` you can set all the settings for the chart.
You can set the chart title in `data-chart-title`.
You can also set the ajax url in the `data-chart-url`
The JSON contain the data and the name.
The labels for the x, y and z axis can also be set the data attributes (e.g. `data-chart-xaxis-title`)
Other information must be set in the config.

See also the example files in the test folder.


## Load the complete series from the ajax request.

If you want to load the complete series from the ajax request, add the `data-chart-dynamic` attribute.
Now all the information in the serie will be set, like data, name and type.
You don't have to preset the series in the config, it will add all series from the ajax request.


## Events.

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


## Test the package.

To test the package, clone the package to your system.
Than run this command.

```
npm run build
```

This will copy the test files to the dist, and also build the package files include the dependencies.

When this script is complete without errors, you can open `dist/index.html` in your browser.
Open the dev tools, tab console, and you see all the results of the tests.

If you only want to check the eslint rules, just run.

```
npm run lint
```

[downloads-image]: https://img.shields.io/npm/dt/way2web-highcharts.svg
[npm-url]: https://www.npmjs.com/package/way2web-highcharts
[npm-image]: https://img.shields.io/npm/v/way2web-highcharts.svg
[npm-stats]: https://npm-stat.com/charts.html?package=way2web-highcharts
