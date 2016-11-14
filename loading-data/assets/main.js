function dataLoaded(data) {
    console.log(data.name);
    var name = data.name;
    var nums = data.nums;
    var min = d3.min(nums);
    var max = d3.max(nums);
    var linearScale = d3.scale.linear().domain([min, max]).range([0, 550]);
    console.log(max);
    d3.select('#main').append('svg').attr('height', '600px').attr('width', '600px');

    nums.forEach(function(value, idx) {
        d3.select("svg")
            .append("text")
            .attr("id", "a")
            .attr("x", linearScale(value))
            .attr("y",20)
            .style("opacity", 1)
            .text("" + value);
    })
}

function populationLoaded(dataset) {
    d3.select("body").selectAll('div.pop')
        .data(dataset).enter().append('div').attr('class', 'population')
        .html(function(data, index) {
            return "Age: " + data.age + " Population: " + data.females;
        }); 
}

d3.json('/data.json', function(data) {
   dataLoaded(data);
});
d3.json('/population.json', function(data) {
    populationLoaded(data);
});
