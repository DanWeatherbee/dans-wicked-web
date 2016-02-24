


var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
var projects = {
	"projects": [
	{
		"title" : "<a href='https://resume-1231.appspot.com/'>Stage 5 - Javascript Resume Builder</a>",
		"dates" : "Feb 24 2016",
		"description" : "This is my resume builder Project. I built it off the Javascript Basics Course",
		"images" : ["images/website.jpg", "images/website2.jpg"]
	},
	{
		"title" : "<a href='https://stage5-1231.appspot.com/'>Stage 4 - Allow Comments</a>",
		"dates" : "2016",
		"description" : "This is my Allow Comments Project. This app uses the datastore.",
		"images" : ["images/stage4.jpg", "images/stage4lower.jpg"]
	}
	]
}

// contacts i misspelled as contact and it broke google maps(tough bug to solve).
var bio = {
	"name": "Dan",
	"role": "Junior Web Developer",
	"welcome_msg": "Welcome to my code.",
	"contacts": {
		"mobile": "250-307-6272",
		"email": "tinahelf@jedi-clan.com",
		"github": "Danscode",
		"twitter": "@johndoe",
		"blog": "<a href=''>Dan's Blog</a>",
		"location": "Vernon, BC"
	},
	"welcome" : "Welcome to my Java script resume builder project.",

	"skills": ["Programmer", "Designer", "Developer"
	],
	"biopic": ["images/me.jpg"
	]
}

var education = {
	"schools" : [
	{
			"name" : "<a href='http://www.okanagan.bc.ca'>Okanagan College</a>",
			"location" : "Vernon, BC",
			"degree" : "Math Upgrade",
			"majors" : ["Math 72"],
			"dates" : "2014 2015"

	},
	{
			"name" : "<a href='https://www.sd57.bc.ca/school/pgss/Pages/default.aspx'>Prince George Senior Secondary</a>",
			"location" : "Prince George, BC",
			"degree" : "Diploma",
			"majors" : ["Grade Twelve"],
			"dates" : "1977 1979"

	}
	],
	"online" : [
	{
		"title" : "<a href='https://www.udacity.com/course/intro-to-programming-nanodegree--nd000'>Intro to Programming Nanodegree</a>",
		"school" : "<a href='https://www.udacity.com'>udacity</a>",
		"dates" : "2015 2016",
		"url" : "<a href='https://www.udacity.com'>www.udacity.com</a>"
	},
	{
		"title" : "<a href='https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'>Front-End Web Developer Nanodegree</a>",
		"school" : "<a href='https://www.udacity.com'>Udacity</a>",
		"dates" : "2016",
		"url" : "<a href='https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'>Front End Resume Builder</a>"
	},
	{
		"title" : "<a href='https://www.udacity.com/courses/ud804'>JavaScript Basics</a>",
		"school" : "<a href='https://www.udacity.com'>Udacity,</a>",
		"dates" : "2016",
		"url" : "<a href='https://www.udacity.com/courses/ud804'>Resume Builder</a>"
	}

	]
}

var formattedName = HTMLheaderName.replace(
	"%data%", "Dan Weatherbee");
var formattedRole = HTMLheaderRole.replace(
	"%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#education").append(HTMLschoolStart);
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

// Note the school variable represents an index and returns a number.
// Then we use it in the rest of the statements(no magic numbers).

education.display = function() {
	for (school in education.schools) {

		formattedSchoolName = HTMLschoolName.replace
		("%data%", education.schools[school].name);

		formattedSchoolDegree = HTMLschoolDegree.replace
		("%data%", education.schools[school].degree);
		$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);

		formattedSchoolDates = HTMLschoolDates.replace
		("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedSchoolDates);

		formattedSchoolLocation = HTMLschoolLocation.replace
		("%data%", education.schools[school].location);
		$(".education-entry").append(formattedSchoolLocation);

		formattedSchoolMajors = HTMLschoolMajor.replace
		("%data%", education.schools[school].majors);
		$(".education-entry").append(formattedSchoolMajors);
	}
	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.online) {
		formattedOnlineTitle1 = HTMLonlineTitle.replace
		("%data%", education.online[course].title);

		formattedOnlineSchool1 = HTMLonlineSchool.replace
		("%data%", education.online[course].school);

		formattedOnlineDates1 = HTMLonlineDates.replace
		("%data%", education.online[course].dates);

		formattedOnlineUrl1 = HTMLonlineURL.replace
		("%data%", education.online[course].url);

		$(".education-entry:last").append(formattedOnlineTitle1 + formattedOnlineSchool1 +
		  formattedOnlineDates1 + formattedOnlineUrl1);
	}
}

education.display()

bio.display = function() {

	formattedBioName = HTMLcontactGeneric.replace
	("%data%", bio.name);

	formattedMobile = HTMLmobile.replace
	("%data%", bio.contacts.mobile);

	formattedEmail = HTMLemail.replace
	("%data%", bio.contacts.email);

	formattedTwitter = HTMLtwitter.replace
	("%data%", bio.contacts.twitter);

	formattedGithub = HTMLgithub.replace
	("%data%", bio.contacts.github);

	formattedLocation = HTMLlocation.replace
	("%data%", bio.contacts.location);

	formattedBlog = HTMLblog.replace
	("%data%", bio.contacts.blog);

	$("#topContacts").append(formattedLocation +
	 formattedGithub + formattedTwitter + formattedEmail +
	  formattedMobile + formattedBioName + formattedBlog);

	$("#footerContacts").append(formattedGithub +
	 formattedTwitter + formattedEmail + formattedMobile);

	formattedBiopic = HTMLbioPic.replace
	("%data%", bio.biopic);

	formattedWelcome = HTMLwelcomeMsg.replace
	("%data%", bio.welcome);

	$("#header").append(formattedBiopic +
		formattedWelcome);

	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {

	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[skill]);

	$("#skills").append(formattedSkill);
	}
}
}

bio.display()

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);

		formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);

		formattedEmployerTitle = formattedEmployer +
		 formattedTitle;

		formattedDates = HTMLworkDates.replace
		("%data%", work.jobs[job].dates);

		formattedDescription = HTMLworkDescription.replace
		("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle + formattedDates +
			formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		formattedTitle = HTMLworkTitle.replace
		("%data%", projects.projects[project].title);

		formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].dates);

		formattedDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle +
						formattedDates + formattedDescription);

		for (image in projects.projects[project].images) {

			if (projects.projects[project].images.length > 0) {
			formattedImage = HTMLprojectImage.replace
			("%data%", projects.projects[project].images[image]);

			$(".project-entry:last").append(formattedImage);
		}
	}
	}
}

projects.display()

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

var formattedName = HTMLheaderName.replace(
	"%data%", "Dan Weatherbee");
var formattedRole = HTMLheaderRole.replace(
	"%data%", "Web Developer");

function inName() {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}


