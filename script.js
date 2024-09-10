async function replaceWords() {
    let text = document.getElementById('inputText').value;

    // Fetch the replacements from the JSON file
    let response = await fetch('replacements.json');
    let replacements = await response.json();

    for (let [curse, replacementList] of Object.entries(replacements)) {
        let regex = new RegExp(curse, 'gi');
        text = text.replace(regex, () => {
            // Select a random replacement from the list
            return replacementList[Math.floor(Math.random() * replacementList.length)];
        });
    }

    document.getElementById('outputText').innerText = text;
}
