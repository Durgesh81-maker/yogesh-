const users = [
  {
    fullName: "Rohit Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Software Engineer",
    description: "Passionate full-stack developer who loves building scalable web applications.",
    tags: ["JavaScript", "React", "Node.js"]
  },
  {
    fullName: "Ananya Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    description: "Creative designer focused on crafting clean and user-friendly interfaces.",
    tags: ["UI Design", "Figma", "UX Research"]
  },
  {
    fullName: "Aman Patel",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    profession: "Data Analyst",
    description: "Data-driven thinker who enjoys finding insights from complex datasets.",
    tags: ["Python", "SQL", "Data Visualization"]
  },
  {
    fullName: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Digital Marketer",
    description: "Marketing strategist with experience in SEO and social media growth.",
    tags: ["SEO", "Content Marketing", "Analytics"]
  },
  {
    fullName: "Kunal Mehta",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    profession: "Mobile App Developer",
    description: "Android and iOS developer who builds fast and user-friendly mobile apps.",
    tags: ["Flutter", "Android", "iOS"]
  }];

var sum = '';

users.forEach(function(elem) { 
  sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description} </p>
            <p>${elem.tags[length]} </p>
        </div>`
}); 
var main = document.querySelector('main')
main.innerHTML= sum