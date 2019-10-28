<<<<<<< HEAD
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Male', 9],
  ['Female', 27],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Gender', 'width':150, 'height':106, colors: ['#F0C419', '#71C285']};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart.draw(data, options);
}


// chart 2
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);

// Draw the chart and set the chart values
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Abuja', 9],
  ['Lagos', 5],
  ['Jos', 22]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Location', 'width':150, 'height':106, colors: ['#F0C419', '#71C285', '#556080']};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
  chart.draw(data, options);
}

// chart 3
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart3);

// Draw the chart and set the chart values
function drawChart3() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Airtel', 4],
  ['MTN', 32],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Mobile Network', 'width':150, 'height':106, colors: ['#F0C419', '#F0785A']};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
  chart.draw(data, options);
}


// chart 4
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart4);

// Draw the chart and set the chart values
function drawChart4() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['IOS', 8],
  ['Android', 28],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Phone', 'width':150, 'height':106, colors: ['#B771C2', '#19F0F0']};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart4'));
  chart.draw(data, options);
}


=======
// const options = document.querySelectorAll('.options')

// function put() {
//   options.forEach(cur => cur.classList.remove('options1'))
//   this.classList.add('options1')
// }

// options.forEach(cur => cur.addEventListener('click', put))

/**** Charts */
var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');


var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Male    ', 'Female'],
    datasets: [{
      label: '# of Votes',
      data: [9, 27],
      backgroundColor: [
        '#F0C419',
        '#71C285'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Gender',
      position: 'top'
    },
    legend: {
      display: true,
      position: 'bottom',
    }
  }
});

// chart 2

var myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Abuja', 'Lagos', 'Jos    '],
    datasets: [{
      label: '# of Votes',
      data: [9, 5, 22],
      backgroundColor: [
        '#F0C419', 
        '#71C285', 
        '#556080'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Location',
      position: 'top'
    },
    legend: {
      display: true,
      position: 'bottom',
    }
  }
});

// chart 3

var myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: ['Airtel', 'MTN'],
    datasets: [{
      label: '# of Votes',
      data: [4, 32],
      backgroundColor: [
        '#F0C419', 
        '#F0785A'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Mobile Networks',
      position: 'top'
    },
    legend: {
      display: true,
      position: 'bottom',
    }
  }
});

// chart 4

var myChart4 = new Chart(ctx4, {
  type: 'pie',
  data: {
    labels: ['IOS      ', 'Android'],
    datasets: [{
      label: '# of Votes',
      data: [8, 28],
      backgroundColor: [
        '#B771C2', 
        '#19F0F0'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Phone',
      position: 'top'
    },
    legend: {
      display: true,
      position: 'bottom',
    }
  }
});
>>>>>>> 82a883ef88dbf127ef2bb6a400f2f7ff50442df5
