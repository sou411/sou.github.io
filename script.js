
var score1=[];
var score2=[];
var score3=[];
var score4=[];
var score5=[];
var score6=[];
var score7=[];
var score8=[];
var score9=[];
var score10=[];
var score11=[];
var score12=[];

function register(){
  scorea1 = document.getElementById('scorea1').value;
  scoreb1 = document.getElementById('scoreb1').value;
  scorec1 = document.getElementById('scorec1').value;
  scored1 = document.getElementById('scored1').value;
  scoree1 = document.getElementById('scoree1').value;
  scoref1 = document.getElementById('scoref1').value;
  scoreg1 = document.getElementById('scoreg1').value;
  scoreh1 = document.getElementById('scoreh1').value;
  scorei1 = document.getElementById('scorei1').value;
  scorej1 = document.getElementById('scorej1').value;
  scorek1 = document.getElementById('scorek1').value;
  scorel1 = document.getElementById('scorel1').value;

  namea1 =  document.getElementById('namea1').value;
  nameb1 =  document.getElementById('nameb1').value;
  namec1 =  document.getElementById('namec1').value;
  named1 =  document.getElementById('named1').value;
  namee1 =  document.getElementById('namee1').value;
  namef1 =  document.getElementById('namef1').value;
  nameg1 =  document.getElementById('nameg1').value;
  nameh1 =  document.getElementById('nameh1').value;
  namei1 =  document.getElementById('namei1').value;
  namej1 =  document.getElementById('namej1').value;
  namek1 =  document.getElementById('namek1').value;
  namel1 =  document.getElementById('namel1').value;

  var a=Number(scorea1);
  var b=Number(scoreb1);
  var c=Number(scorec1);
  var d=Number(scored1);
  var e=Number(scoree1);
  var f=Number(scoref1);
  var g=Number(scoreg1);
  var h=Number(scoreh1);
  var i=Number(scorei1);
  var j=Number(scorej1);
  var k=Number(scorek1);
  var l=Number(scorel1);
  score1.push(a);
  score2.push(b);
  score3.push(c);
  score4.push(d);
  score5.push(e);
  score6.push(f);
  score7.push(g);
  score8.push(h);
  score9.push(i);
  score10.push(j);
  score11.push(k);
  score12.push(l);
  max1=Math.max.apply(null, score1);  
　min1=Math.min.apply(null, score1);  
  max2=Math.max.apply(null, score2);  
　min2=Math.min.apply(null, score2);  
  max3=Math.max.apply(null, score3);  
　min3=Math.min.apply(null, score3); 
  max4=Math.max.apply(null, score4);  
　min4=Math.min.apply(null, score4);  
  max5=Math.max.apply(null, score5);  
　min5=Math.min.apply(null, score5);  
  max6=Math.max.apply(null, score6);  
　min6=Math.min.apply(null, score6); 
  max7=Math.max.apply(null, score7);  
　min7=Math.min.apply(null, score7);  
  max8=Math.max.apply(null, score8);  
　min8=Math.min.apply(null, score8);  
  max9=Math.max.apply(null, score9);  
　min9=Math.min.apply(null, score9); 
  max10=Math.max.apply(null, score10);  
　min10=Math.min.apply(null, score10);  
  max11=Math.max.apply(null, score11);  
　min11=Math.min.apply(null, score11);  
  max12=Math.max.apply(null, score12);  
　min12=Math.min.apply(null, score12);  
　var sum=0;
  for (var index=0; index<score1.length; index++){
      sum+=score1[index];
  var average=sum/score1.length;
  ave1=average
  }
  var sum=0;
  for (var index=0; index<score2.length; index++){
      sum+=score2[index];
  var average=sum/score2.length;
  ave2=average
  }
  var sum=0;
  for (var index=0; index<score3.length; index++){
      sum+=score3[index];
  var average=sum/score3.length;
  ave3=average
  }
  var sum=0;
  for (var index=0; index<score4.length; index++){
      sum+=score4[index];
  var average=sum/score4.length;
  ave4=average
  }
  var sum=0;
  for (var index=0; index<score5.length; index++){
      sum+=score5[index];
  var average=sum/score5.length;
  ave5=average
  }
  var sum=0;
  for (var index=0; index<score6.length; index++){
      sum+=score6[index];
  var average=sum/score6.length;
  ave6=average
  }
  var sum=0;
  for (var index=0; index<score7.length; index++){
      sum+=score7[index];
  var average=sum/score7.length;
  ave7=average
  }
  var sum=0;
  for (var index=0; index<score8.length; index++){
      sum+=score8[index];
  var average=sum/score8.length;
  ave8=average
  }
  var sum=0;
  for (var index=0; index<score9.length; index++){
      sum+=score9[index];
  var average=sum/score9.length;
  ave9=average
  }
  var sum=0;
  for (var index=0; index<score10.length; index++){
      sum+=score10[index];
  var average=sum/score10.length;
  ave10=average
  }
  var sum=0;
  for (var index=0; index<score11.length; index++){
      sum+=score11[index];
  var average=sum/score11.length;
  ave11=average
  }
  var sum=0;
  for (var index=0; index<score12.length; index++){
      sum+=score12[index];
  var average=sum/score12.length;
  ave12=average
  }

  document.getElementById("max1").innerText = max1
  document.getElementById("min1").innerText = min1
  document.getElementById("ave1").innerText = ave1
  document.getElementById("max2").innerText = max2
  document.getElementById("min2").innerText = min2
  document.getElementById("ave2").innerText = ave2
  document.getElementById("max3").innerText = max3
  document.getElementById("min3").innerText = min3
  document.getElementById("ave3").innerText = ave3
  document.getElementById("max4").innerText = max4
  document.getElementById("min4").innerText = min4
  document.getElementById("ave4").innerText = ave4
  document.getElementById("max5").innerText = max5
  document.getElementById("min5").innerText = min5
  document.getElementById("ave5").innerText = ave5
  document.getElementById("max6").innerText = max6
  document.getElementById("min6").innerText = min6
  document.getElementById("ave6").innerText = ave6
  document.getElementById("max7").innerText = max7
  document.getElementById("min7").innerText = min7
  document.getElementById("ave7").innerText = ave7
  document.getElementById("max8").innerText = max8
  document.getElementById("min8").innerText = min8
  document.getElementById("ave8").innerText = ave8
  document.getElementById("max9").innerText = max9
  document.getElementById("min9").innerText = min9
  document.getElementById("ave9").innerText = ave9
  document.getElementById("max10").innerText = max10
  document.getElementById("min10").innerText = min10
  document.getElementById("ave10").innerText = ave10
  document.getElementById("max11").innerText = max11
  document.getElementById("min11").innerText = min11
  document.getElementById("ave11").innerText = ave11
  document.getElementById("max12").innerText = max12
  document.getElementById("min12").innerText = min12
  document.getElementById("ave12").innerText = ave12
  

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
  labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
  datasets: [{
    label: namea1,
    type: "line",
    fill: false,
    data: score1,
    borderColor: "rgb(255, 0, 0)",
    yAxisID: "y-axis-1",
    },{
    label: nameb1,
    type: "line",
    fill: false,
    data: score2,
    borderColor: "rgb(0, 0, 255)",
    yAxisID: "y-axis-1",
    },{
    label: namec1,
    type: "line",
    fill: false,
    data: score3,
    borderColor: "rgb(255, 255, 0)",
    yAxisID: "y-axis-1",
    },{
    label: named1,
    type: "line",
    fill: false,
    data: score4,
    borderColor: "rgb(0, 128, 0)",
    yAxisID: "y-axis-1",
    },{
    label: namee1,
    type: "line",
    fill: false,
    data: score5,
    borderColor: "rgb(255, 0, 255)",
    yAxisID: "y-axis-1",
    },{
    label: namef1,
    type: "line",
    fill: false,
    data: score6,
    borderColor: "rgb(0, 255, 255)",
    yAxisID: "y-axis-1",
    },{
    label: nameg1,
    type: "line",
    fill: false,
    data: score7,
    borderColor: "rgb(0, 0, 128)",
    yAxisID: "y-axis-1",
    },{
    label: nameh1,
    type: "line",
    fill: false,
    data: score8,
    borderColor: "rgb(0, 128, 0)",
    yAxisID: "y-axis-1",
    },{
    label: namei1,
    type: "line",
    fill: false,
    data: score9,
    borderColor: "rgb(128, 128, 0)",
    yAxisID: "y-axis-1",
    },{
    label: namej1,
    type: "line",
    fill: false,
    data: score10,
    borderColor: "rgb(128, 0, 128)",
    yAxisID: "y-axis-1",
    },{
    label: namek1,
    type: "line",
    fill: false,
    data: score11,
    borderColor: "rgb(128, 128, 0)",
    yAxisID: "y-axis-1",
    },{
    label: namel1,
    type: "line",
    fill: false,
    data: score12,
    borderColor: "rgb(0, 0, 0)",
    yAxisID: "y-axis-1",
    }
    ],},
    options: {
    tooltips: {
    mode: 'nearest',
    intersect: false,
    },
    responsive: true,
    scales: {
    yAxes: [{
    id: "y-axis-1",
    type: "linear",
    position: "left",
    ticks: {
    max: 300,
    min: 0,
    stepSize: 10,
    
    },
                   
    gridLines: {
    drawOnChartArea: false,
    },
    }],
    },
    }
    });
}



function addplayer(nums){
  switch (nums){
    case 1: 
      document.getElementById("label1").style.visibility="visible";
      document.getElementById("addplayer1").style.visibility="hidden";
      document.getElementById("addplayer2").style.visibility="visible";
      break;
    case 2:
      document.getElementById("label2").style.visibility="visible"; 
      document.getElementById("addplayer2").style.visibility="hidden";
      document.getElementById("addplayer3").style.visibility="visible";
      break;
    case 3:
      document.getElementById("label3").style.visibility="visible"; 
      document.getElementById("addplayer3").style.visibility="hidden";
      document.getElementById("addplayer4").style.visibility="visible";
      break;
    case 4:
      document.getElementById("label4").style.visibility="visible"; 
      document.getElementById("addplayer4").style.visibility="hidden";
      document.getElementById("addplayer5").style.visibility="visible";
      break;
    case 5:
      document.getElementById("label5").style.visibility="visible"; 
      document.getElementById("addplayer5").style.visibility="hidden";
      document.getElementById("addplayer6").style.visibility="visible";
      break;
    case 6:
      document.getElementById("label6").style.visibility="visible"; 
      document.getElementById("addplayer6").style.visibility="hidden";
      document.getElementById("addplayer7").style.visibility="visible";
      break;
    case 7:
      document.getElementById("label7").style.visibility="visible"; 
      document.getElementById("addplayer7").style.visibility="hidden";
      document.getElementById("addplayer8").style.visibility="visible";
      break;
    case 8:
      document.getElementById("label8").style.visibility="visible"; 
      document.getElementById("addplayer8").style.visibility="hidden";
      document.getElementById("addplayer9").style.visibility="visible";
      break;
    case 9:
      document.getElementById("label9").style.visibility="visible"; 
      document.getElementById("addplayer9").style.visibility="hidden";
      document.getElementById("addplayer10").style.visibility="visible";
      break;
    case 10:
      document.getElementById("label10").style.visibility="visible"; 
      document.getElementById("addplayer10").style.visibility="hidden";
      document.getElementById("addplayer11").style.visibility="visible";
      break;
    case 11:
      document.getElementById("label11").style.visibility="visible"; 
      document.getElementById("addplayer11").style.visibility="hidden";
      document.getElementById("addplayer12").style.visibility="visible";
      break;
    case 12:
      document.getElementById("label12").style.visibility="visible"; 
      document.getElementById("addplayer12").style.visibility="hidden";
      break;
  }
}

function pop1(){
  document.getElementById("pop1").style.visibility="hidden";
  document.getElementById("pop2").style.visibility="visible";
}

function pop2(){
  document.getElementById("pop2").style.visibility="hidden";
 
}


function startbtn(){
  document.getElementById("page1").style.visibility="hidden";
  document.getElementById("page2").style.visibility="visible";
}

function okappear(){
   document.getElementById("reload").style.visibility="visible";
    document.getElementById("regisfin").style.visibility="hidden";
}
