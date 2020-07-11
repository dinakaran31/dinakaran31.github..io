$(document).ready(function () {
$('.project_name').text('WorkRe');
$('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
//Changing project images while clicking next and prev
var project_count = 1;
$('.next').click(function () {
  if (project_count == 4) {
    project_count = 0;
  }
  project_count++;
  $('.actual_img').attr('src', '/img/project_' + project_count + '.png');
  if (project_count == 1) {
    $('.project_name').text('WorkRe');
    $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
  } else if (project_count == 2) {
    $('.project_name').text('MovieMan');
    $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
  } else if (project_count == 3) {
    $('.project_name').text('Geofence App');
    $('.project_content').text('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
  } else if (project_count == 4) {
    $('.project_name').text('TechUtsav');
    $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

  }

});
$('.prev').click(function () {
    if (project_count == 1) {
      project_count = 5;
    }
    project_count--;
    $('.actual_img').attr('src', '/img/project_' + project_count + '.png');
    if (project_count == 1) {
      $('.project_name').text('WorkRe');
      $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
    } else if (project_count == 2) {
      $('.project_name').text('MovieMan');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
    } else if (project_count == 3) {
      $('.project_name').text('Geofence App');
      $('.project_content').text('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');
    } else if (project_count == 4) {
      $('.project_name').text('TechUtsav');
      $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')

    }

  });



});