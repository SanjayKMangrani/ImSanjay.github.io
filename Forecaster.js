let myChart = document.getElementById('ForecastChart').getContext('2d');
const btnScrollRight = document.getElementById('scrollright');
const btnScrollLeft = document.getElementById('scrollleft');
btnScrollRight.addEventListener("click", scrollRight);
btnScrollLeft.addEventListener("click", scrollLeft);
const ChartData='http://127.0.0.1:5500/Data.csv';
// d3.csv(ChartData).then(function(datapoints){
//     console.log(datapoints)
//     const SolidFuels=[];
//     const Year=[];
//     const Month=[];
//     const Electricity=[];
//     const Gas=[];
//     const Liquidfuels=[];
//     for(i=0;i<datapoints.length;i++){
//         if(datapoints[i].Year=='2021'){
//             console.log(datapoints[i].Month+datapoints[i].Gas)
//         }
//     }
// });
let demoChart = new Chart(myChart,
    {
        type: 'line',
        data: {
            // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'

            // ],
            datasets: [{
                label:'GAS',
                data: [
                    {x: '2022-01-01' ,y:131},
                    {x: '2022-02-01',y:131},
                    {x: '2022-03-01',y:131},
                    {x: '2022-04-01',y:218},
                    {x: '2022-05-01',y:218},
                    {x: '2022-06-01',y:218},
                    {x: '2022-07-01',y:219},
                    {x: '2022-08-01',y:218},
                    {x: '2022-09-01',y:219}
                
                ],backgroundColor: 'rgba(21,7,91, 0.45)',
                borderWidth: 1,
                borderColor: 'rgb(21,7,91)'

            },
            {
                label:'SOLID FUEL',
                data: [
                    {x: '2022-01-01' ,y:137 },
                    {x: '2022-02-01',y:140},
                    {x: '2022-03-01',y:144},
                    {x: '2022-04-01',y:147},
                    {x: '2022-05-01',y:152},
                    {x: '2022-06-01',y:150},
                    {x: '2022-07-01',y:140},
                    {x: '2022-08-01',y:165},
                    {x: '2022-09-01',y:169}
                
                ],backgroundColor: 'rgba(255,127,80, 0.45)',
                borderWidth: 1,
                borderColor: 'rgb(255,127,80)'
            },
            {
                label:'ELECTRICITY',
                data: [
                    {x: '2022-01-01' ,y:185},
                    {x: '2022-02-01',y:185},
                    {x: '2022-03-01',y:260},
                    {x: '2022-04-01',y:260},
                    {x: '2022-05-01',y:260},
                    {x: '2022-06-01',y:260},
                    {x: '2022-07-01',y:260},
                    {x: '2022-08-01',y:260},
                    {x: '2022-09-01',y:261}
                
                ],backgroundColor: 'rgba(225,227,70, 0.45)',
                borderWidth: 1,
                borderColor: 'rgb(255,227,70)'
            },
            {
                label:'Liquid Fuel',
                data: [
                    {x: '2022-01-01' ,y:125},
                    {x: '2022-02-01',y:140},
                    {x: '2022-03-01',y:202},
                    {x: '2022-04-01',y:193},
                    {x: '2022-05-01',y:211},
                    {x: '2022-06-01',y:223},
                    {x: '2022-07-01',y:210},
                    {x: '2022-08-01',y:200},
                    {x: '2022-09-01',y:180}
                
                ],backgroundColor: 'rgba(200,127,80, 0.45)',
                borderWidth: 1,
                borderColor: 'rgb(200,127,80)'
            }
        ],
            
        },
        options:  {
            scales:  {
                y:  {
                    title:  {
                        display: true,
                        text: 'Price',
                        font:   {
                            size: 15
                        }
                    },
                    min:120,
                    max:300
                },
                x: {
                    type: 'time',
                    time: {
                        unit: 'month'
                    },
                    title:  {
                        display: true,
                        text: 'Months',
                            font:   {
                                size: 15
                            }
                    },
                     min:'2022-01-01',
                     max:'2022-09-01'
                }
            },
            plugins:{
                title:{
                    display: true,
                    text:'AvFuel price indices in the domestic sector in real terms',
                    font:{
                        size:25
                    }
                },
                legend: {
                   position: 'right'
                },
            }
        }
    });
function scrollRight() {
    const dataLength = demoChart.data.labels.length;
    if(demoChart.config.options.scales.x.max >= dataLength - 1) {
        demoChart.config.options.scales.x.min = dataLength - 12;
        demoChart.config.options.scales.x.max = dataLength - 1;
    }
    else {
        demoChart.config.options.scales.x.min += 1;
        demoChart.config.options.scales.x.max += 1;
    }       
    demoChart.update();
}
function scrollLeft() {
    if(demoChart.config.options.scales.x.min <= 0) {
        demoChart.config.options.scales.x.min = 0;
        demoChart.config.options.scales.x.max = 11;
    }
    else {
        demoChart.config.options.scales.x.min -= 1;
        demoChart.config.options.scales.x.max -= 1;
    }       
    demoChart.update();
}

// function GasValue(number){
//     let parts =number.split('-');
//     let year=parts[0];
//     var gasValue=0;
//     d3.csv(ChartData).then(function(datapoints){
//         for(i=0;i<datapoints.length;i++){
//             if(datapoints[i].Year==year && datapoints[i].Month=="January"){
//                 gasValue= datapoints[i].Gas;
//             }
//         }

//     })
//     console.log(gasValue)
//     return gasValue;
// }

    