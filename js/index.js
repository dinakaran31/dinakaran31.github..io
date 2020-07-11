$(document).ready(function () {
  anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
})
$('.project_name').text("my project");
$('.project_content').text('This is my project content')
var project_count=1;
$('.next').click(function(){
  console.log("clicked");
  if(project_count==4){
    project_count=0;
  }
  project_count++;
  $('.actual_img').attr('src','./img/project_'+project_count+'.png')
  if(project_count==1){
    $('.project_name').text("my project");
$('.project_content').text('This is my project content')
  }else if (project_count==2){
    $('.project_name').text("my project 2");
    $('.project_content').text('This is my project content 2')
 }else if (project_count==3){
  $('.project_name').text("my project 3");
  $('.project_content').text('this is my project content 3')
 }else if (project_count==4){
  $('.project_name').text("my project 4");
  $('.project_content').text('This is my project content 4')
 }
})