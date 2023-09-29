const grid = document.getElementById('grid');
const h3 = document.createElement('h3');
h3.setAttribute('class', 'sub-title');
h3.innerHTML = "gmc Headquarters"; 

grid.appendChild(h3);

// arrays of courses
const courses = ["HTML", "CSS", "Javascript", "Node.js", "MongoDB"];
const ul = document.createElement('ul');


for (let course of courses) {
    let li = document.createElement('li');
    li.innerHTML = course;
    ul.appendChild(li);
}

grid.appendChild(ul);


// add image to page
const img = document.createElement('img');
img.setAttribute('src','https://th.bing.com/th?id=OAID.0bf516fee4d8968c38b42bece96b0806&w=180&h=120&c=2&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1');
img.setAttribute('alt','blue car');

grid.appendChild(img);

img.setAttribute('class', 'car-img');

// add image to page
const cars = ["https://th.bing.com/th?id=OIP.1C4uQn5s-hyi7XaW_25m4wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "https://th.bing.com/th?id=OIP.UJxK0oNqZiJQrUqiLNy__AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "https://th.bing.com/th?id=OIP.xQpJ3XdZ19bbWIGlx4x20AHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "https://th.bing.com/th?id=OIP.WYQVl5mwgWAY_uTpm3QR1QHaEm&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2","https://th.bing.com/th?id=OIP.vcU_GTxIdqQAGRJsvlVbuQHaFW&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"]

const grid2 = document.getElementById('grid2');

for (let car of cars) {
    let card = document.createElement('div');
    card.setAttribute('class','car');
    let img = document.createElement('img');
    img.setAttribute('src', car);
    img.setAttribute('alt', 'car');
    // append img to card
    card.appendChild(img);
    // append card to grid
    grid2.appendChild(card);
}





