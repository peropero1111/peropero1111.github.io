function submitForm() {
    var grade = Document.getElementById("grade").VALUE;
    var classNum = Document.getElementById("class").VALUE;

    var url = "";

    if (grade == "2" && classNum == "1") {
        url = "https://class2-1.netlify.app";
    } else if (grade == "2" && classNum == "2") {
        url = "https://class2-2.netlify.app";
    } else if (grade == "2" && classNum == "3") {
        url = "https://class2-3.netlify.app";
    } else if (grade == "2" && classNum == "4") {
        url = "https://class2-4.netlify.app";
    } else if (grade == "2" && classNum == "5") {
        url = "https://class2-5.netlify.app";
    } else if (grade == "2" && classNum == "6") {
        url = "https://class2-6.netlify.app";
    } else if (grade == "2" && classNum == "7") {
        url = "https://class2-7.netlify.app";
    } else if (grade == "2" && classNum == "8") {
        url = "https://class2-8.netlify.app";
    } else if (grade == "2" && classNum == "9") {
        url = "https://class2-9.netlify.app";
    } else {
        url = "https://example.com/default";
    }

    window.Location.href = url;
}
