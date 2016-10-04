d3.select('#main').append('svg').attr('height', '600px').attr('width', '600px');

d3.select("svg")
.append("circle")
.attr("id", "red")
.attr("r", 20)
.attr("cx",20)
.attr("cy",20)
.style("fill","red");

d3.select("svg")
.append("text")
.attr("id", "a")
.attr("x",20)
.attr("y",20)
.style("opacity", 0)
.text("HELLO WORLD");

d3.select("svg")
.append("circle")
.attr("id", "blue")
.attr("r", 100)
.attr("cx",400)
.attr("cy",400)
.style("fill","lightblue");

d3.select("svg")
.append("text")
.attr("id", "b")
.attr("x",400)
.attr("y",400)
.style("opacity", 0)
.text("Uh, hi.");

d3.select("#a").transition().delay(1000).style("opacity", 1);
d3.select("#b").transition().delay(3000).style("opacity", .75);
//d3.selectAll('circle').transition().delay(4000).duration(3000).attr('cy', 200);
d3.selectAll('#red').transition().delay(4000).duration(3000).attr('cx', 200).attr('cy', 200);
d3.selectAll('#blue').transition().delay(4000).duration(3000).attr('cx', 600);
