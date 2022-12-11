
fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(res => res.json())
    .then(data => setHeroes(data));  


function setHeroes({squadName, homeTown, formed, members}) {
    document.body.insertAdjacentHTML('afterbegin', `
        <h1>${squadName}</h1>
        <h2>HomeTown: ${homeTown} // Formed: ${formed}</h2>
        <div class="heroes">${SetMembers(members)}</div>
    `);
}

function SetMembers(members) {
    return members.map(
        (hero) => `<div>
        <h3>${hero.name}</h3>
        <p>${hero.secretIdentity}</p>
        <p>${hero.age}</p>
        <p>Superpowers:</p>
        <ul>
            ${hero.powers.map(power => `
                <li>${power}</li>
            `).join(' ')}
        </ul></div>
    `).join(' ');
}