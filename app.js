// Fetch all breeds and render them
async function loadBreeds() {
    const response = await fetch("https://dogapi.dog/api/v2/breeds", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    const data = await response.json();
    const list = document.getElementById("breedList");

    data.data.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed.attributes.name;

        li.addEventListener("click", () => {
            document.querySelectorAll("#breedList li").forEach(item => {
                item.classList.remove("selected-breed");
            });

            li.classList.add("selected-breed");
            loadBreedDetails(breed.id);
        });

        list.appendChild(li);
    });
}



// Fetch details for a single breed (details only)
async function loadBreedDetails(id) {
    const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`, {
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    const data = await response.json();
    const details = data.data.attributes;

    const container = document.getElementById("breedDetails");

    // Base breed details
    container.innerHTML = `
        <h3>${details.name}</h3>
        <p>${details.description}</p>

        <ul>
            <li><strong>Life Span:</strong> ${details.life.min}–${details.life.max} years</li>
            <li><strong>Male Weight:</strong> ${details.male_weight.min}–${details.male_weight.max} kg</li>
            <li><strong>Female Weight:</strong> ${details.female_weight.min}–${details.female_weight.max} kg</li>
            <li><strong>Hypoallergenic:</strong> ${details.hypoallergenic ? "Yes" : "No"}</li>
        </ul>
    `;
}



// Fetch top 5 facts for the sidebar
async function loadFacts() {
    const response = await fetch("https://dogapi.dog/api/v2/facts?limit=5", {
        headers: { "User-Agent": "Mozilla/5.0" }
    });

    const data = await response.json();
    const list = document.getElementById("factsList");

    list.innerHTML = "";

    data.data.forEach(fact => {
        const li = document.createElement("li");
        li.textContent = fact.attributes.body;
        list.appendChild(li);
    });
}



loadBreeds();
loadFacts();
