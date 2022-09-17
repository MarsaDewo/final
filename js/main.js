
const txtElement = [ 'Web Developer' , 'Frontend Developer', 'Junior WebDeveloper'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';




(function tulisan () {
    if(count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tulisan').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tulisan, 500);
})();