import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import data from './data.json' with {type : 'json'}

const timeScale = d3.scaleLinear ([5, 3600], [10, 800])
const dateScale = d3.scaleLinear ([1900, 2024], [60, 500])                               
const mapScale = d3.scaleOrdinal (["Triangle", "Orb", "Disc", "Unknown", "Cylinder"], [10, 10])
const item = d3.select('.chart')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', function(d){
        return mapScale(d.shape)
    })
    .attr('cx', function(d){
        return timeScale(d.duration_seconds)
    })
    .attr('cy', function(d){
        return dateScale(d.date)
    })
    .classed('dot', true)   
    
const burbuja = d3.select('body').append('div')
    .attr('class', 'country-info')

item.on('mouseenter', function(e, d){
    console.log(e.target, e.type)
    burbuja.style('opacity', .8)
    burbuja.style('top', e.pageY + 'px')
    burbuja.style('left', e.pageX + 'px')
    burbuja.html(`<p>${d.shape}<br>${(d.location)}</p>`)
})
    .on('mouseout', function(e, d){
    burbuja.style('opacity', 0)
})

d3.select('.y-axis')
    .selectAll('circle')
    .data(data)
    .join('circle')
    
d3.select('.x-axis')
    .selectAll('circle')
    .data(data)
    .join('circle')
    
d3.select('.x-axis')
    .append('text')
    .text('DATE')
    .attr('x', -75)
    .attr('y', -250)
    .attr('font-size', '20px')
    .attr('fill', '#000000')

    d3.select('.x-axis')
    .append('text')
    .text('DURATION-SEC')
    .attr('x', 400)
    .attr('y', 60)
    .attr('font-size', '20px')
    .attr('fill', '#000000')
    
    d3.select('.y-axis')
    .append('text')
    .text('UFO')
    .attr('x', 450)
    .attr('y', 10)
    .attr('font-size', '45px')
    .attr('fill', '#000000')

const xAxis = d3.axisBottom(timeScale)
d3.select('.x-axis')
    .call(xAxis)
const yAxis = d3.axisLeft(dateScale)
d3.select('.y-axis')
    .call(yAxis)



