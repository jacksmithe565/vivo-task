/*
Filename: AdvancedDataVisualization.js
Content: Complex Data Visualization Code
*/

// Import necessary libraries
const d3 = require('d3');
const fs = require('fs');

// Read data from a CSV file
const data = d3.csvParse(fs.readFileSync('data.csv', 'utf8'));

// Define SVG dimensions and margins
const svgWidth = 800;
const svgHeight = 600;
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

// Create SVG element
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Extract unique categories from data
const categories = Array.from(new Set(data.map((d) => d.category)));

// Define color scale
const colorScale = d3.scaleOrdinal()
  .domain(categories)
  .range(d3.schemeCategory10);

// Define x and y scales
const xScale = d3.scaleLinear()
  .domain([0, d3.max(data, (d) => +d.value)])
  .range([0, width]);

const yScale = d3.scaleBand()
  .domain(data.map((d) => d.name))
  .range([height, 0])
  .paddingInner(0.1);

// Add x-axis to the SVG
svg.append('g')
  .attr('transform', `translate(${margin.left}, ${height + margin.top})`)
  .call(d3.axisBottom(xScale));

// Add y-axis to the SVG
svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)
  .call(d3.axisLeft(yScale));

// Create bars for each data point
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', margin.left)
  .attr('y', (d) => yScale(d.name) + margin.top)
  .attr('width', (d) => xScale(+d.value))
  .attr('height', yScale.bandwidth())
  .attr('fill', (d) => colorScale(d.category));

// Add legend for categories
const legend = svg.append('g')
  .attr('class', 'legend')
  .attr('transform', `translate(${width + margin.left + 20}, ${margin.top})`);

legend.selectAll('rect')
  .data(categories)
  .enter()
  .append('rect')
  .attr('x', 0)
  .attr('y', (d, i) => i * 20)
  .attr('width', 10)
  .attr('height', 10)
  .attr('fill', (d) => colorScale(d));

legend.selectAll('text')
  .data(categories)
  .enter()
  .append('text')
  .attr('x', 15)
  .attr('y', (d, i) => i * 20 + 10)
  .text((d) => d);

// Add title and axis labels
svg.append('text')
  .attr('x', svgWidth / 2)
  .attr('y', margin.top / 2)
  .attr('text-anchor', 'middle')
  .text('Advanced Data Visualization');

svg.append('text')
  .attr('x', svgWidth / 2)
  .attr('y', svgHeight - margin.bottom / 2)
  .attr('text-anchor', 'middle')
  .text('Value');

svg.append('text')
  .attr('transform', 'rotate(-90)')
  .attr('x', -height / 2)
  .attr('y', margin.left / 2)
  .attr('text-anchor', 'middle')
  .text('Name');
  
// ... Additional lines of code to enhance and customize the visualization ...

// End of code