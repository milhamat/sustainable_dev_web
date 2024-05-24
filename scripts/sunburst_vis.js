var data = [
    {
      name: " ", value: 111, children: [
        {
          name: "Europe", value: 87, 
          children: [
            {name: "England", value: 53},
            {name: "Austria", value: 3},
            {name: "Wales", value: 6},
            {name: "France", value: 4},
            {name: "Italy", value: 3},
            {name: "Russia", value: 3},
            {name: "Germany", value: 2},
            {name: "Ireland", value: 2},
            {name: "Spain", value: 2},
            {name: "Sweden", value: 2},
            {name: "Belgium", value: 1},
            {name: "Greece", value: 1},
            {name: "Hungary", value: 1},
            {name: "Romania", value: 1},
            {name: "Scotland", value: 1},
            {name: "Switzerland", value: 1},
            {name: "Ukraine", value: 1}
          ]
        },
        {
          name: "America", value: 14, 
          children: [
            {name: "Canada", value: 11},
            {name: "Mexico", value: 3}
          ]
        },
        {
          name: "Asia", value: 10, 
          children: [
            {name: "Japan", value: 4},
            {name: "India", value: 2},
            {name: "South Korea", value: 1}
          ]
        },
      ]
    }
  ];

var testDataTwo = [
    {
      name: "進二技", value: 111, children: [
        {
          name: "博士班", value: 87, 
          children: [
            {name: "企業管理系碩士班", value: 53},
            {name: "創研所", value: 3},
            {name: "國際商務系碩士班", value: 6},
            {name: "會計財稅碩士班", value: 4},
            {name: "會計資訊系碩士班", value: 3},
            {name: "財務金融系碩士班", value: 3},
            {name: "財政稅務系碩士班", value: 2},
            {name: "貿易實務法律暨談判碩士學位學程", value: 2},
            {name: "資研所", value: 2},
            {name: "資訊管理系人工智慧與商業應用碩士", value: 2},
            {name: "進二技企管", value: 1},
            {name: "進二技應外", value: 1},
            {name: "進二技會資", value: 1},
            {name: "進二技財稅", value: 1},
            {name: "進二技財金", value: 1},
            {name: "進二技資管", value: 1},
            {name: "進四技企管", value: 1}
          ]
        },
        {
          name: "多元專長", value: 14, 
          children: [
            {name: "財經學院博士班", value: 11},
            {name: "多元專長培力課程", value: 3}
          ]
        },
        {
          name: "日五專", value: 10, 
          children: [
            {name: "二技企管", value: 4},
            {name: "二技創科", value: 2},
            {name: "二技商務", value: 1}
          ]
        },
      ]
    }
  ];

  var oooSbrt = [
    {
      name: "", value: 4164, children: [
        {
          name: "博士班", value: 2, 
          children: [
            {name: "財經學院博士班", value: 2}
          ]
        },
        {
          name: "多元專長", value: 2, 
          children: [
            {name: "多元專長培力課程", value: 2}
          ]
        },
        {
          name: "日二技", value: 597, 
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
          name: "日五專", value: 620, 
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
          name: "日四技", value: 1276, 
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
          name: "碩士在職專班", value: 42, 
          children: [
            { name: "企業管理系EMBA在職專班	", value: 41 },
            { name: "境外碩士在職班(春季)	", value: 1 }
          ]
        },
        {
          name: "碩士班", value: 191, 
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
          name: "進二專", value: 259, 
          children: [
            { name: "進二專企管", value: 223 },
            { name: "進二專外語", value: 36 }
          ]
        },
        {
          name: "進二技", value: 768, 
          children: [
            { name: "進二技企管", value: 216 },
            { name: "進二技應外", value: 149 },
            { name: "進二技會資", value: 87 },
            { name: "進二技財稅", value: 86 },
            { name: "進二技財金", value: 93 },
            { name: "進二技資管", value: 137 }
          ]
        },
        {
          name: "進四技", value: 407, 
          children: [
            { name: "進四技企管", value: 72 },
            { name: "進四技商務", value: 58 },
            { name: "進四技數媒", value: 56 },
            { name: "進四技會資", value: 58 },
            { name: "進四技財金", value: 56 },
            { name: "進四技資管", value: 107 }
          ]
        },
      ]
    }
  ];

var selectYear;

// create a sunburst chart and set the data
// var dataTree = anychart.data.tree(data);

var chart = anychart.sunburst(oooSbrt, "as-tree");
// var chart = anychart.sunburst(dataTree, "as-tree"); // data

// set the chart title
// chart.title("Non-U.S. Born Oscar Winners for Acting");
// format the tooltip
chart.tooltip().useHtml(true);
// style of text font
chart.tooltip().format("<h5 style='font-size:14px; font-weight:400; margin: 0.25rem 0;'>{%name}</h5><h5 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'>Total : {%value}</h5");
// chart color palete
// chart.palette(['#345E80', '#00838F', '#00BFA5', '#ff6e40', '#d4e157', '#64B5F6']);
// give the actual portion of slice
chart.calculationMode("parent-dependent");
  
// create and configure a label for the center content
let label = anychart.standalones.label();
label.text(" ");
label.width("100%");
label.height("100%");
label.fontColor("#64B5F6");
label.fontSize(12);
label.fontWeight(600);
label.hAlign("center");
label.vAlign("middle");

// set the center content
chart.center().content(label);
// set a space for the center content
chart.innerRadius(40);
// hide the world level
chart.level(0).thickness("0%");
// configure the label format
chart.labels().format("{%name}");
// apply the radial position
chart.level(2).labels().position("radial");
// set the container id
chart.container("snbrts");
// chart.getCredits().setEnabled(false); // only happend after the license key
// initiate drawing the chart
chart.draw();

// setTimeout(function(){
//   // chart = anychart.sunburst(testDataTwo, "as-tree");
//   chart.data(testDataTwo);
//   console.log('Time out');
// }, 1500);

function selectDataset(set) {
  selectYear = set;
  console.log('Select: ',selectYear);
  console.log(typeof(selectYear))
  if (selectYear === "111"){
    console.log('got the value 111');
    chart.data(oooSbrt);
  }
  if (selectYear === "110"){
      console.log('got the value 110');
      chart.data(testDataTwo);
  }
  if (selectYear === "109"){
  console.log('got the value 111');
  chart.data(data);
}
}

