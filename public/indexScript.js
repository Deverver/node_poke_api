async function loadAll() {
    const status = document.getElementById('status');
    const list = document.getElementById('pokemon-list');
    status.textContent = 'Indlæser…';
    status.className = 'muted';
    list.innerHTML = '';

    try {
        // Hent hele listen fra Del 4 (in-memory CRUD)
        const res = await fetch('/pokemon-crud');

        if (!res.ok) throw new Error('HTTP ' + res.status);

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
            status.textContent = 'Ingen Pokémon endnu. Opret via POST /pokemon-crud i Postman.';
            status.className = 'muted';
            return;
        }

        status.textContent = '';
        status.className = 'muted';

        for (const p of data) {
            const li = document.createElement('li');
            const name = (p && p.name) ? p.name : '(uden navn)';
            const types = (p && p.types) ? p.types : '(ukendt type)';
            const abilities = Array.isArray(p?.abilities) && p.abilities.length ? p.abilities.join(', ') : '(ingen abilities)';

            const typeText = 'It has the following typing(s);';
            const abilityText = 'Possible abilities;';

            li.textContent = `Pokémon: ${name}`;
            li.appendChild(document.createElement("br"));
            li.append(`– ${typeText} ${types.join(', ')}`);
            li.appendChild(document.createElement("br"));
            li.append(`– ${abilityText} ${abilities.replaceAll('-',' ')}`);
            list.appendChild(li);
        }

    } catch (err) {
        status.textContent = 'Kunne ikke hente data. Tjek at serveren kører.';
        status.className = 'error';
        console.error('Fetch-fejl:', err);
    }
}

document.getElementById('reload').addEventListener('click', loadAll);
document.addEventListener('DOMContentLoaded', loadAll);
