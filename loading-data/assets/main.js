function dataLoaded(data) {
    console.log(data.name);
}

d3.json('/data.json', function(data) {
   dataLoaded(data);
});