var chartData = [],
  guides1 = [],
  guides2 = [],
  guides3 = [],
  guides4 = [];
generateChartData();


function generateChartData() {
  var firstDate = new Date();
  firstDate.setHours( 0, 0, 0, 0 );
  firstDate.setDate( firstDate.getDate() - 2000 );

  for ( var i = 0; i < 2000; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setSeconds( newDate.getSeconds() + i );
    chartData[ i ] = ( {
      "date": newDate,
      "ecg1": Math.round( Math.random() * 1000 ),
      "ecg2": Math.round( Math.random() * 1000 ),
      "ecg3": Math.round( Math.random() * 1000 ),
      "ecg4": Math.round( Math.random() * 1000 )
    } );
    if ( i == 500 ) {
      guides1.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "aVR"
      } );
      guides2.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "aVL"
      } );
      guides3.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "aVF"
      } );
    }
    else if ( i == 1000 ) {
      guides1.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "V1"
      } );
      guides2.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "V2"
      } );
      guides3.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "V3"
      } );
    }
    else if ( i == 1500 ) {
      guides1.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "V4"
      } );
      guides2.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "V5"
      } );
      guides3.push( {
        "date": newDate,
        "lineColor": "#880063",
        "lineThickness": 2,
        "lineAlpha": 1,
        "label": "V6"
      } );
    }
  }

}

setInterval(function(){
    var a = document.getElementsByTagName("a");
    for(i=0;i<a.length;i++){
        //console.log("merge");
        if(a[i].getAttribute("title") == "JavaScript charts"){
            a[i].innerHTML = "";
        }
    }
}, 100);

var chart = AmCharts.makeChart( "chartdiv", {
  "type": "stock",
  "theme": "light",

  "dataSets": [ {
    "fieldMappings": [ {
      "fromField": "ecg1",
      "toField": "ecg1"
    }, {
      "fromField": "ecg2",
      "toField": "ecg2"
    }, {
      "fromField": "ecg3",
      "toField": "ecg3"
    }, {
      "fromField": "ecg4",
      "toField": "ecg4"
    }, {
      "fromField": "ecg5",
      "toField": "ecg5"
    }, {
      "fromField": "ecg6",
      "toField": "ecg6"
    } ],
    "color": "#000",
    "dataProvider": chartData,
    "categoryField": "date"
  } ],


  "panels": [ {
    "title": "I",
    "showCategoryAxis": true,
    "stockGraphs": [ {
      "id": "g1",
      "title": "ECG #1",
      "valueField": "ecg1",
      "showBalloon": true
    } ],
    "guides": guides1
  }, {
    "title": "II",
    "showCategoryAxis": true,
    "stockGraphs": [ {
      "title": "ECG #2",
      "valueField": "ecg2",
      "showBalloon": true
    } ],
    "guides": guides2
  }, {
    "title": "III",
    "showCategoryAxis": true,
    "stockGraphs": [ {
      "title": "ECG #3",
      "valueField": "ecg3",
      "showBalloon": true
    } ],
    "guides": guides3
  }, {
    "title": "IV",
    "showCategoryAxis": true,
    "stockGraphs": [ {
      "title": "ECG #4",
      "valueField": "ecg4",
      "showBalloon": true
    } ],
    "guides": guides4
  } ],

  "chartScrollbarSettings": {
    "graph": "g1",
    "graphType": "line",
    "usePeriod": "mm"
  },

  "categoryAxesSettings": {
    "minPeriod": "ss",
    "gridColor": "#ff9c9c",
    "gridAlpha": 0.7,
    "gridAlpha": 1,
    "axisAlpha": 0,
    "minorGridEnabled": true,
    "minorGridAlpha": 0.4,
    "labelsEnabled": false,
    "position": "top"
  },

  "valueAxesSettings": {
    "gridColor": "#ff9c9c",
    "gridAlpha": 0.7,
    "axisAlpha": 0,
    "minorGridEnabled": true,
    "minorGridAlpha": 0.4,
    "labelsEnabled": false
  },

  "chartCursorSettings": {
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true
  }
} );