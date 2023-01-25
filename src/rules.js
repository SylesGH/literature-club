fetch("./settings.json")
    .then((e) => e.json())
    .then((data) => {
        document.title = "Rules | " + data.title;
    }).catch((e) => console.log(e));