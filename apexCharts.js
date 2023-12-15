document.addEventListener('DOMContentLoaded', () =>{
    new ApexCharts(document.querySelector('#reportsChart'),{
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
            foreColor: '#ffffff',
            tooltip:{
                theme:'dark',
            }

        },
        series: [{
            name: 'Product Count',
            data: [105, 30, 60, 155, 90, 40],
            
        }],
        plotOptions: {
            bar: {
                distributed: true,
                borderRadius: 4,
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            categories: ['veggies', 'fruits', 'Drinks', 'snacks', 'chocolate', 'cakes'],
            labels:{
                style: {
                    colors: '#ffffff',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#ffffff', // Change the color of y-axis labels
                },
            },
        },
        
        colors: ["#50e991", "#ffa300", "#0000FF", "#e60049", "#ffffff", "#c80064"],
    }).render();

    new ApexCharts(document.querySelector('#trafficChart'),{
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
            foreColor: '#ffffff',
            tooltip:{
                theme:'dark',
            },

        },
        series: [{
            name: 'Product Count',
            data: [19, 4, 15, 11, 22, 5],
            
        }],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            categories: ['Kurkure', 'County Fresh Banana', 'Amul Paneer', 'Wai WaiNoodles', 'Potato Chips', 'KitKat'],
            labels:{
                style: {
                    colors: '#ffffff',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#ffffff', // Change the color of y-axis labels
                },
            },
        },
        colors:'#CC0000',
    }).render();

    
} );