// sbrtList = ["oooSbrt","ootSbrt","oznSbrt","ozeSbrt","ozsvSbrt","ozsxSbrt",
//               "ozfvSbrt","ozfrSbrt","oztrSbrt","oztwSbrt","ozoSbrt","ozzSbrt",
//               "nnSbrt","neSbrt","nsvSbrt","nsxSbrt","nfvSbrt"]; 

var selectYear ;

// function getOption() {
//   var e = document.getElementById("sunburstYearSelect");
//   var output = e.options[e.selectedIndex].text;
//   console.log('Select: ',output);
//   console.log(typeof(output));
//   selectYear = output;
// };

function selectDataset(set) {
  console.log('Select: ',set);
}


// SUNBURST DATA VISUALIZATIONS
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
var chart = am4core.create("snbrts", am4plugins_sunburst.Sunburst);
chart.padding(0,0,0,0);
chart.radius = am4core.percent(100);

// DATA
if (selectYear === '111'){
  console.log('got the value 111')
};

chart.data = oooSbrt;//oooSbrt;


chart.colors.step = 2;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(10);

// define data fields
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";


var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
level0SeriesTemplate.hiddenInLegend = true; // false
chart.seriesTemplates.setKey("0", level0SeriesTemplate)

// this makes labels to be hidden if they don't fit
level0SeriesTemplate.labels.template.truncate = true;
level0SeriesTemplate.labels.template.hideOversized = true;

level0SeriesTemplate.labels.template.adapter.add("rotation", function(rotation, target) {
  target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
  target.maxHeight = Math.abs(target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS);

  return rotation;
})

var level1SeriesTemplate = level0SeriesTemplate.clone();
chart.seriesTemplates.setKey("1", level1SeriesTemplate)
level1SeriesTemplate.fillOpacity = 0.75;
level1SeriesTemplate.hiddenInLegend = true;

var level2SeriesTemplate = level0SeriesTemplate.clone();
chart.seriesTemplates.setKey("2", level2SeriesTemplate)
level2SeriesTemplate.fillOpacity = 0.5;
level2SeriesTemplate.hiddenInLegend = true;

chart.legend = new am4charts.Legend();

}); // end am4core.ready()

// 
