document.addEventListener('DOMContentLoaded',()=>{
    var budgetChart = echarts.init(document.querySelector('#budgetChart')).
    setOption({

  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    // doesn't perfectly work with our tricks, disable it
    selectedMode: false,
    textStyle: {
        // Set the font color for the legend here
        color: 'white' // Change 'white' to your desired font color
    },
  },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start angle
            startAngle: 180,
            label: {
                show: true,
                formatter(param) {
                // correct the percentage
                return ' (' + param.percent * 2 + '%)';
                },
                fontSize: 10,
                color: '#ffffff',
            },
            data: [
                { value: 7350000, name: 'Expenditure' },
                { value: 10000000, name: 'Budget' },
                
                {
                // make an record to fill the bottom 50%
                    value: 10000000 + 7350000,
                    itemStyle: {
                        // stop the chart from rendering this piece
                        color: 'none',
                        decal: {
                        symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }
    ]
    })
})