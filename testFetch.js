// Edge Case Test Suite for Dog API Explorer
console.log("=== EDGE CASE TESTS START ===");


// 1. Rapid clicking test
async function testRapidClicks() {
    console.log("Test 1: Rapid clicking on multiple breeds");

    try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds");
        const data = await response.json();

        const first = data.data[0].id;
        const second = data.data[1].id;
        const third = data.data[2].id;

        // Simulate rapid clicks
        loadBreedDetails(first);
        loadBreedDetails(second);
        loadBreedDetails(third);

        console.log("Rapid click test executed — UI should show the LAST breed clicked.");
    } catch (err) {
        console.error("Rapid click test failed:", err);
    }
}



// 2. Missing breed details test (invalid breed ID)
async function testMissingBreedDetails() {
    console.log("Test 2: Missing breed details simulation");

    try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds/INVALID_ID");

        if (!response.ok) {
            console.log("Breed details endpoint returned an error as expected.");
        } else {
            console.log("Unexpected success — breed details endpoint did not error.");
        }
    } catch (err) {
        console.error("Missing breed details test triggered error as expected:", err);
    }
}



// 3. Missing fact test
async function testMissingFact() {
    console.log("Test 3: Missing fact simulation");

    try {
        const response = await fetch("https://dogapi.dog/api/v2/facts/INVALID_ID");

        if (!response.ok) {
            console.log("Fact endpoint returned an error as expected.");
        } else {
            console.log("Unexpected success — fact endpoint did not error.");
        }
    } catch (err) {
        console.error("Missing fact test triggered error as expected:", err);
    }
}



// Run all tests
testRapidClicks();
testMissingBreedDetails();
testMissingFact();

console.log("=== EDGE CASE TESTS END ===");
