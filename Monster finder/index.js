{/* <div class="monster">
        <img src="https://robohash.org/4?set=set2" alt="Amit Hasan Sadhin" />
        <p class="name">Amit Hasan Sadhin</p>
        <p class="email">amithasan7866@gmail.com</p> </div>

      <div class="p-5 not-found" style="display: none">
        <span>404</span>
        <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
      </div> */}

//Creating Elements for monster div


import { monsters } from './monsters.js';


for (let monster of monsters) {
    showMonsters(monster);
}



function showMonsters(monster) {
    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt = monster.name;

    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = monster.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monster.email;

    //appending img,p tag to the monster div
    monsterDiv.append(img, name, email);
    document.querySelector('.monsters').append(monsterDiv);

    console.log(monster);
}

notFound();
function notFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️Opps No Monster Found 🧟‍♂️';

    notFoundDiv.append(span, h1);
    document.querySelector('.monsters').append(notFoundDiv);
    console.log(notFoundDiv);
}



// Search operation
document.querySelector('#search-monster').addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();
    const monsters = document.querySelectorAll('.monster');

    let notFound = true;


    for (let monster of monsters) {
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();

        if (name.includes(keyword) || email.includes(keyword)) {
            monster.style.display = 'block';
            notFound = false;
        } else {
            monster.style.display = 'none';
        }

    }
    if (notFound) {
        document.querySelector('.not-found').style.display = 'block';
    } else {
        document.querySelector('.not-found').style.display = 'none';
    }
});


// Preventing default from behaviour.

document.querySelector('#search-monster-form').addEventListener('submit', e=> {
    e.preventDefault();
} )


