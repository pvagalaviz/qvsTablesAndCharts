
  const data = {
    labels: [
      'Habito 1',
      'Habito 2',
      'Habito 3',
      'Habito 4',
      'Habito 5',
      'Habito 6',
      'Habito 7',
      'Habito 8'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [10, 5, 15, 4, 13, 24, 12, 21],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(54, 162, 135)',
        'rgb(54, 162, 225)',
        'rgb(54, 162, 435)',
        'rgb(54, 162, 543)',
        'rgb(54, 162, 231)',
        'rgb(255, 205, 21)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'pie',
    data: data,
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );