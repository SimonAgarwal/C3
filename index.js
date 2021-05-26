//area chart-upcoming

/*google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data6 = google.visualization.arrayToDataTable([
          ['Day', 'This Week','Previous Week'],
          ['Mon',  20.1,11.2],
          ['Tue',  10.2,15],
          ['Wed',  15,14.3],
          ['Thurs',  20,11.7],
          ['Fri',17,30],
          ['Sat',29,25],
          ['Sun',30.5,29]
        ]);

        var options6 = {
          title: 'Spend Time',
          hAxis: {  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
        
          vAxis: { gridlines: { count: 4 } },
                  
        colors:['#785ef7','#cfcfcf'],
         width:330
          
        };

        var chart6 = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart6.draw(data6, options6);
      }
*/
      //polar chart

  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Mat', 'Sci', 'Eng', 'His', 'Geo', 'Com','Art','Bio'],
        datasets: [{
           label:2019,
            data: [84, 77,79 , 80, 91, 78,98,87],
           
            borderWidth: 1,
            borderColor:'#de59ff',
            
        },

        {
           label:2018,
          data: [70, 65,73 , 77, 97, 60,82,69],
         
          borderWidth: 1,
          backgroundColor:'#edb9fa'
      }]
    },
    options: {
      scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    },
   
  }
 
});

//donut-1
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data6 = google.visualization.arrayToDataTable([
    ['Day', 'This Week','Previous Week'],
    ['Mon',  20.1,11.2],
    ['Tue',  10.2,15],
    ['Wed',  15,14.3],
    ['Thurs',  20,11.7],
    ['Fri',17,30],
    ['Sat',29,25],
    ['Sun',30.5,29]
  ]);
  var options6 = {
    title: 'Spend Time',
    hAxis: {  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
  
    vAxis: { gridlines: { count: 4 } },
            
  colors:['#785ef7','#cfcfcf'],
   width:330
    
  };
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     25],
    ['Spent',75]
   
  ]);
  var data2 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',   40  ],
    ['Spent',60]
   
  ]);

  var data3 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',   24  ],
    ['Spent',76]
   
  ]);

  var data4 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Uncompleted',   25  ],
    ['Completed',75]
   
  ]);

  var data5 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Uncompleted',   56  ],
    ['Completed',44]
   
  ]);

  var options = {
   
    pieHole: 0.7,
    width:100,
    height:60,
    backgroundColor:'#197029',
    colors:['white','#4e9c5c']
  };
  var options2 = {
   
    pieHole: 0.7,
    width:100,
    height:60,
    backgroundColor:'#e6e6e6',
    colors:['white','yellow']
  };

  var options3 = {
   
    pieHole: 0.7,
    width:100,
    height:60,
    backgroundColor:'#e6e6e6',
    colors:['white','purple']
  };

  var options4 = {
   
    pieHole: 0.7,
    width:230,
    height:130,
    backgroundColor:'white',
    colors:['#e6e6e6','#b271f0']
  };

  var options5 = {
   
    pieHole: 0.7,
    width:100,
    height:60,
    backgroundColor:'#e6e6e6',
    colors:['white','red']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart.draw(data, options);
  var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart2.draw(data2,options2)
  var chart3 = new google.visualization.PieChart(document.getElementById('donutchart3'));
  chart3.draw(data3,options3);
  var chart4 = new google.visualization.PieChart(document.getElementById('donutchart4'));
  chart4.draw(data4,options4)
  var chart5 = new google.visualization.PieChart(document.getElementById('donutchart5'));
  chart5.draw(data5,options5);
  var chart6 = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart6.draw(data6, options6);
}

//donut-2


