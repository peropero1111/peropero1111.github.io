function submitForm() {
    var grade = document.getElementById("grade").value;
    var classNum = document.getElementById("class").value;

    var url = "";

    if (grade === "2") {
        switch (classNum) {
            case "1":
                url = "https://class2-1.netlify.app";
                break;
            case "2":
                url = "https://class2-2.netlify.app";
                break;
            case "3":
                url = "https://class2-3.netlify.app";
                break;
            case "4":
                url = "https://class2-4.netlify.app";
                break;
            case "5":
                url = "https://class2-5.netlify.app";
                break;
            case "6":
                url = "https://class2-6.netlify.app";
                break;
            case "7":
                url = "https://class2-7.netlify.app";
                break;
            case "8":
                url = "https://class2-8.netlify.app";
                break;
            case "9":
                url = "https://class2-9.netlify.app";
                break;
            default:
                url = "https://example.com/default";
        }
    } else {
        url = "https://example.com/default";
    }

    window.location.href = url;
}

