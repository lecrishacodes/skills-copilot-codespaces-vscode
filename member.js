function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var projectsText = document.getElementById("projectsText");
    var contactText = document.getElementById("contactText");

    member.style.color = "#ff0000";
    skills.style.color = "#000000";
    projects.style.color = "#000000";
    contact.style.color = "#000000";

    memberText.style.display = "block";
    skillsText.style.display = "none";
    projectsText.style.display = "none";
    contactText.style.display = "none";
}