
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
var chart = am4core.create("snbrts", am4plugins_sunburst.Sunburst);
chart.padding(0,0,0,0);
chart.radius = am4core.percent(100);

chart.data = [{
  name: "博士班",
  children: [
    { name: "財經學院博士班", value: 2 }
  ]
},

{
    name: "多元專長",
    children: [
      { name: "多元專長培力課程", value: 2 }
    ]
  },

{
  name: "日二技",
  children: [
    { name: "二技企管", value: 63 },
    { name: "二技創科", value: 57 },
    { name: "二技商務", value: 65 },
    { name: "二技商設", value: 85 },
    { name: "二技應外", value: 56 },
    { name: "二技數媒", value: 2 },
    { name: "二技會資", value: 63 },
    { name: "二技菁英", value: 8 },
    { name: "二技財稅", value: 63 },
    { name: "二技財金", value: 72 },
    { name: "二技資管	", value: 63 }
  ]
},

{
    name: "日五專",
    children: [
      { name: "五專企管", value: 100 },
      { name: "五專國貿", value: 92 },
      { name: "五專應外", value: 88 },
      { name: "五專會計與資料科學科", value: 102 },
      { name: "五專財稅	", value: 75 },
      { name: "五專財金", value: 96 },
      { name: "五專資管", value: 67 }
    ]
  },

  {
    name: "日四技",
    children: [
      { name: "四技企管", value: 223 },
      { name: "四技創科", value: 78 },
      { name: "四技商務", value: 203 },
      { name: "四技商設", value: 95 },
      { name: "四技應外", value: 72 },
      { name: "四技數媒", value: 100 },
      { name: "四技會資", value: 189 },
      { name: "四技財稅", value: 162 },
      { name: "四技財金", value: 89 },
      { name: "四技資管", value: 65 }
    ]
  },

  {
    name: "碩士在職專班",
    children: [
      { name: "企業管理系EMBA在職專班	", value: 41 },
      { name: "境外碩士在職班(春季)	", value: 1 }
    ]
  },

  {
    name: "碩士班",
    children: [
      { name: "企業管理系碩士班", value: 27 },
      { name: "創研所", value: 29 },
      { name: "國際商務系碩士班", value: 29 },
      { name: "會計財稅碩士班", value: 9 },
      { name: "會計資訊系碩士班", value: 18 },
      { name: "財務金融系碩士班", value: 26 },
      { name: "財政稅務系碩士班", value: 15 },
      { name: "貿易實務法律暨談判碩士學位學程", value: 13 },
      { name: "資研所", value: 17 },
      { name: "資訊管理系人工智慧與商業應用碩士", value: 8 }
    ]
  },

  {
    name: "進二專",
    children: [
      { name: "進二專企管", value: 223 },
      { name: "進二專外語", value: 36 },
      { name: "進二技企管", value: 216 },
      { name: "進二技應外", value: 149 },
      { name: "進二技會資", value: 87 },
      { name: "進二技財稅", value: 86 },
      { name: "進二技財金", value: 93 },
      { name: "進二技資管", value: 137 }
    ]
  },

  {
    name: "進四技",
    children: [
      { name: "進四技企管", value: 72 },
      { name: "進四技商務", value: 58 },
      { name: "進四技數媒", value: 56 },
      { name: "進四技數媒", value: 58 },
      { name: "進四技財金", value: 56 },
      { name: "進四技資管", value: 107 }
    ]
  },
];

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
