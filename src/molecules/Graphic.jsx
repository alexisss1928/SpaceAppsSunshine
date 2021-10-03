import { Bar, Line, Doughnut } from 'react-chartjs-2';

function GraphicBar({graphic_data, height = "100%", width = "100%"}) {
    // Example of graphic
    // return <Bar data={{
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
    //             'rgba(255, 159, 64, 0.2)'
    //         ],
    //         borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //             'rgba(255, 159, 64, 1)'
    //         ],
    //         borderWidth: 1
    //     }]
    // }} height="100%" width="100%" />

    return <div height={height} width={width}>
        <Bar data={graphic_data} />
    </div>
}

export default GraphicBar

export function GraphicDoughnut({graphic_data, height = "10px", width = "10px"}) {
    return <div height={height} width={width}>
        <Doughnut data={graphic_data} />
    </div>
}

export function GraphicLine({graphic_data, height = "10px", width = "10px"}) {
    return <div height={height} width={width}>
        <Line data={graphic_data} />
    </div>
}