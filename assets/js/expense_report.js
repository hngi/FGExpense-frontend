const ctx1 = document.getElementById('graph_canvas1').getContext('2d');
const ctx2 = document.getElementById('graph_canvas2').getContext('2d');
const ctx3 = document.getElementById('graph_canvas3').getContext('2d');
//the new object helps plot a line chart from chart.js  
let chart1 = new Chart(ctx1, { 
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', '', '', '','','','',''],
        datasets: [{
            fill: 'origin',
            backgroundColor: [
                'rgba(0,128,0,0.2)'
            ],
            pointBackgroundColor: "#00945E",
            pointBorderColor: "#00945E",
            pointHoverBackgroundColor: "#00945E",
            pointHoverBorderColor: "#00945E",
            lineTension:0,
            data: [10, 40, 30, 45, 31, 30, 47, 40, 35, 50],
            borderColor: '#00945E',
            borderWidth: 1,
            label: ''
        }]
    },
    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
            gridLines: {
                color: "#f2f2f2",
                display:false
            },
            ticks: {
                fontSize: 15,
                fontColor: "black",
            },
        }],
        yAxes: [{
            gridLines: {
              color: "#f2f2f2",
            },
            ticks: {
                fontSize: 11,
                fontColor: "black",
                beginAtZero: false,     
            }
        }]
    },
    title: {
      display: false
    },
      legend: {
        display:false
      }
  }
});
let chart2 = new Chart(ctx2, { 
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', '', '', '','','','',''],
        datasets: [{
            fill: 'origin',
            backgroundColor: [
                'rgba(0,128,0,0.2)'
            ],
            pointBackgroundColor: "#00945E",
            pointBorderColor: "#00945E",
            pointHoverBackgroundColor: "#00945E",
            pointHoverBorderColor: "#00945E",
            lineTension:0,
            data: [10, 40, 30, 45, 31, 30, 47, 40, 35, 50],
            borderColor: '#00945E',
            borderWidth: 1,
            label: ''
        }]
    },
    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
            gridLines: {
                color: "#f2f2f2",
                display:false
            },
            ticks: {
                fontSize: 15,
                fontColor: "black",
            },
        }],
        yAxes: [{
            gridLines: {
              color: "#f2f2f2",
            },
            ticks: {
                fontSize: 11,
                fontColor: "black",
                beginAtZero: false,     
            }
        }]
    },
    title: {
      display: false
    },
      legend: {
        display:false
      }
  }
});
let chart3 = new Chart(ctx3, { 
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov', 'Dec'],
        datasets: [{
            fill: 'origin',
            backgroundColor: [
                'rgba(0,128,0,0.2)'
            ],
            pointBackgroundColor: "#00945E",
            pointBorderColor: "#00945E",
            pointHoverBackgroundColor: "#00945E",
            pointHoverBorderColor: "#00945E",
            lineTension:0,
            data: [10, 40, 30, 45, 31, 30, 47, 40, 35, 50,49,45],
            borderColor: '#00945E',
            borderWidth: 1,
            label: ''
        }]
    },
    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
            gridLines: {
                color: "#f2f2f2",
                display:false
            },
            ticks: {
                fontSize: 15,
                fontColor: "black",
            },
        }],
        yAxes: [{
            gridLines: {
              color: "#f2f2f2",
            },
            ticks: {
                fontSize: 11,
                fontColor: "black",
                beginAtZero: false,     
            }
        }]
    },
    title: {
      display: false
    },
      legend: {
        display:false
      }
  }
});
const chart_table = document.querySelector('.table_chart_body select')
chart_table.addEventListener("change", function() {
    if(chart_table.value == "Tables")
    {
        document.querySelector('.table_body').style.display = "block";
        document.querySelector('.chart_body').style.display = "none";
    }
    else if(chart_table.value == "Charts"){
        document.querySelector('.table_body').style.display = "none";
        document.querySelector('.chart_body').style.display = "block";
    }
});