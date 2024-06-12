let loginForm = document.getElementById("authenticate-button");
let pagePrincipale = document.getElementById("root");
let dashoboardPage = document.createElement("div")
let dashoboardPage2 = document.createElement("div");
let dashoboardPage3 = document.createElement("div");
//div reservé au premier schema
let graphicXP = document.createElement("div");

let token;
let user;
let transaction;
mainPage();

//Fais apparaître la page principale
function mainPage() {
    pagePrincipale.innerHTML = '';
    let mainpage = document.createElement("div")
    mainpage.innerHTML = "<div id=\"error\"></div>"
        + "<div id=\"welcome\" class=\"title welcome\">Bienvenue à <span style=\"color:rgb(16,110,250);\">GraphQl</span> !</div>"
        + "<div class=\"blocks-container\">"
        + "<div class=\"left\">"
        + "<div class=\"text\">"
        + "<h2>Veux-tu en savoir plus sur Zone01 Rouen ?</h2>"
        + "<br>"
        + "<span>Suis-nous sur nos <a href=\"https://linktr.ee/zone01rouen\" target=\"_blank\" style=\"color: hsl(216, 96%, 52%)\">réseaux sociaux</a> et consulte notre <a href=\"https://zone01rouennormandie.org/\" target=\"_blank\" style=\"color: hsl(216, 96%, 52%)\">site web</a>.</span>"
        + "</div>"
        + "<div class=\"contact\">"
        + "<a id=\"contact-link\" href=\"mailto:contact@zone01normandie.org\">"
        + "<span class=\"arrow\">→</span>"
        + "<span id=\"contact\">Nous contacter.</span>"
        + "</a>"
        + "</div>"
        + "</div>"
        + "<div class=\"right\" style=\"justify-content: normal!important\">"
        + "<!-- <iframe width=\"720\" height=\"340\" src=\"https://www.youtube.com/embed/nBFEsXr5A4A\" title=\"Zone01 Presentation\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" style=\"margin-bottom: 100px\"></iframe> -->"
        + "<div id=\"cas-sign-in-wrapper\" class=\"cas-sign-in-wrapper\">"
        + "<button class=\"sign-in-button hoverWhite\" style=\"opacity: 1; cursor: pointer;\">se connecter</button>"
        + "</div>"
        + "<div id=\"authenticate\" class=\"authenticate\" style=\"display: block;\">"
        + "<form id=\"login-form\">"
        + "<div class=\"login\">"
        + "<ul>"
        + "<li class=\"login-register\">"
        + "<label id=\"email-label\" for=\"email-field\">Email ou Nom d'utilisateur</label>"
        + "<input type=\"text\" id=\"email-field\" name=\"email\" required=\"\">"
        + "</li>"
        + "<li id=\"firstname\" class=\"join-us\">"
        + "<label for=\"firstname-field\">Prénom</label>"
        + "<input type=\"text\" pattern=\"[\x20-\x7E]+$\" title=\"seuls les caractères ascii\" id=\"firstname-field\" name=\"firstname\">"
        + "</li>"
        + "<li id=\"lastname\" class=\"join-us\">"
        + "<label for=\"lastname-field\">Nom de famille</label>"
        + "<input type=\"text\" pattern=\"[\x20-\x7E]+$\" title=\"seuls les caractères ascii\" id=\"lastname-field\" name=\"lastname\">"
        + "</li>"
        + "<li id=\"password-wrap\" class=\"password\">"
        + "<label for=\"password-field\">Mot de passe</label>"
        + "<div class=\"password-container\">"
        + "<input type=\"password\" id=\"password-field\" name=\"password\" minlength=\"6\" autocomplete=\"new-password\" title=\"Le mot de passe ne répond pas aux exigences\" required=\"\">"
        + "<!-- oeil svg -->"
        + "<span class=\"eye\"><i id=\"eye\" class=\"far fa-eye\"></i></span>"
        + "</div>"
        + "</li>"
        + "<li class=\"join-us\">"
        + "<label for=\"confirm-password-field\">Confirmer le mot de passe</label>"
        + "<input type=\"password\" id=\"confirm-password-field\" name=\"confirmPassword\"minlength=\"6\" autocomplete=\"new-password\">"
        + "</li>"
        + "</ul>"
        + "</div>"
        + "<p id=\"error-message\" class=\"error-message\"></p>"
        + "<div class=\"password-strength-indicator\" id=\"password-strength-indicator\">"
        + "<ul>"
        + "<p> Le mot de passe doit contenir :</p>"
        + "<li class=\"password-strength-info\" id=\"passwd-length\"> - Au moins 6 caractères</li>"
        + "<li class=\"password-strength-info\" id=\"passwd-lower-letter\"> - Une lettre minuscule</li>"
        + "<li class=\"password-strength-info\" id=\"passwd-upper-letter\"> - Une lettre majuscule</li>"
        + "<li class=\"password-strength-info\" id=\"passwd-number\"> - Un chiffre</li>"
        + "<li class=\"password-strength-info\" id=\"passwd-special-character\"> - Un caractère spécial</li>"
        + "</ul>"
        + "</div>"
        + "<div id=\"buttons\">"
        + "<button type=\"button\" class=\"authenticate-button\" id=\"authenticate-button\" onclick=login(event)>Se connecter</button>"
        + "</div>"
        + "</form>"
        + "</div>"
        + "</div>"
        + "</div>";
    pagePrincipale.appendChild(mainpage)

    let eye = document.getElementById("eye")
    let inputpwd = document.getElementById("password-field")
    // <span class="eye"><i id="eye" class="far fa-eye"></i></span>
    if (eye != null) {
        eye.onclick = function () {
            (inputpwd.type == "password") ? (inputpwd.setAttribute("type", "text"), inputpwd.setAttribute("type", "text"), eye.classList.add("fa-eye-slash")) : (eye.classList.remove("fa-eye-slash"), inputpwd.setAttribute("type", "password"), inputpwd.setAttribute("type", "password"))
        }
    }
}
// Fait apparaître la page de statistique
function dashboard() {
    //Initialisation Bouton de logout
    let logoutBtn = document.createElement("button");
    logoutBtn.id = "logout";
    logoutBtn.className = "logout";
    logoutBtn.innerText = "logout";
    logoutBtn.onclick = logout;

    //Calcul avant écriture du ratio
    let message = "";
    let ratioCalculated = parseFloat((user.totalUp / user.totalDown).toFixed(1));
    if (ratioCalculated >= 1 || ratioCalculated < 1.2) {
        message = "You can do better!"
    } else if (user.transactions.progress.grade < 1) {
        message = "Ow do more Audits!"
    } else if (user.transactions.progress.grade >= 1.2) {
        message = "Very well!"
    }
    let str = user.attrs.Phone;
    let numero = "";

    for (let i = 0; i < str.length; i += 2) {
    numero += str.substr(i, 2);
    if (i + 2 < str.length) {
        numero += ".";
    }
    }
    ///
    pagePrincipale.innerHTML = ''
    dashoboardPage.innerHTML = ''
    dashoboardPage2.innerHTML = ''
    dashoboardPage3.innerHTML = ''

    dashoboardPage.classList.add("grid")
    dashoboardPage3.classList.add("grid2")
    // dashoboardPage3.classList.add("test")
    // dashoboardPage3.innerText = 'lorem Ipsum'


    //Donnée Personnelle
    let donneePersonnelle = document.createElement("div")
    donneePersonnelle.innerHTML = `<h2>Personal Data</h2>
    <p>Fullname: ${user.attrs.firstName} ${user.attrs.lastName}</p>
    <p>Pseudo: ${user.login}</p>
    <p>Email: ${user.attrs.email}</p>
    <p>Phone: ${numero}</p>`
    if (donneePersonnelle != null) {
        dashoboardPage.appendChild(donneePersonnelle)
    }

    //Audit Ratio
    let AuditRatio = document.createElement("div")
    AuditRatio.innerHTML = `<h2>Audit Radio</h2>
    <p>${parseFloat((user.totalUp / 1000000).toFixed(2))} MB Done</p>
    <p>${parseFloat((user.totalDown / 1000000).toFixed(2))} MB Received</p>
    <p>Ratio: ${ratioCalculated} ${message}</p>`
    if (AuditRatio != null) {
        dashoboardPage.appendChild(AuditRatio)
    }
    //Case status
    SystemStatusXP() //aucun filtre


    // Graphique pour Visualisation des audits selon projet, date
    xpManagement()

    // intervention du dashoboardPage3, schéma de skill objectTechnologies & obectTechnicalSkill
    GraphicSystemSkill()

    if (dashoboardPage != null) {
        pagePrincipale.appendChild(dashoboardPage);
        pagePrincipale.appendChild(dashoboardPage2);
        pagePrincipale.appendChild(dashoboardPage3);
    }
    pagePrincipale.appendChild(logoutBtn)

}

//Fonction principal pour la gestion
async function login(event) {
    event.preventDefault();
    getJWT()
}
// Grâce au Crédential btoa permet d'obtenir un TOKEN qui permet l'accès a l'api 
async function getJWT() {
    const username = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;

    const credentials = btoa(username + ':' + password); // Encoder les identifiants en base64
    // alert("oy "+credentials)
    // console.log("credentials: "+credentials)

    const signinEndpoint = 'https://zone01normandie.org/api/auth/signin';

    fetch(signinEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
        },
        body: JSON.stringify({
            Email: username,
            Password: password,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de la connexion. Veuillez vérifier vos informations d\'identification.');
            }
            return response.json();
        })
        .then(result => {
            // console.log('Signin Response:', result); // Log de la réponse pour inspection

            if (result) {
                // Stocker le token
                // console.log("mon token", result)
                token = result;
                localStorage.setItem('authToken', token);
                //redirect and fetch
                fetchData()
            } else {
                alert('Échec de la connexion. Veuillez vérifier vos informations d\'identification.');
            }
        })
        .catch(error => {
            console.error('Error during signin:', error);
            alert('Une erreur s\'est produite. Veuillez réessayer.');
        });
}

//Permet d'obtenir les information de l'api, utilise le jeton JSON WEB TOKEN
async function fetchData() {
    // console.log("mon token", token)

    fetch('https://zone01normandie.org/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
            query{
                user {
                    id
                    login
                    attrs
                    totalUp
                    totalDown
                    transactions (where: {eventId: {_eq: 148}}, order_by: {createdAt:asc}){
                    amount
                    type
                    createdAt
                    path
                    }
                }
                transaction{
                    id
                    type
                    amount
                    objectId
                    userId
                    createdAt
                    path
                }
            }`
        })
    })
        .then(reponse => reponse.json())
        .then(data => {
            // console.log("Mes données: ", data)
            user = data.data.user[0];
            transaction = data.data.transaction;
            // console.log("transaction: ", transaction, "type: ", transaction[0].type)
            //function pour gestion
            dashboard()

        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
        })
}

//Filter for data transaction
//Filtre pour les données de transaction
async function getTransactionsByPeriod(period = null) {
    const transactions = transaction
    if (period == null) {
        return transactions
    }
    // Obtenir la date actuelle
    const currentDate = new Date();

    // Déterminer la date de début en fonction de la période choisie
    let startDate;
    switch (period) {
        case 'lastWeek':
            startDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
            break;
        case 'lastMonth':
            startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
            break;
        case 'last3Months':
            startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 3));
            break;
        case 'last6Months':
            startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 6));
            break;
        default:
            throw new Error('Période non reconnue');
    }

    // Filtrer les transactions par la période définie
    const filteredTransactions = transactions.filter(transaction => {
        const transactionDate = new Date(transaction.createdAt);
        return transactionDate >= startDate;
    });

    return filteredTransactions;
}

//Fetch la cellule status, cree la progressbar SVG
async function SystemStatusXP(choice = null) {
    let transactionStatus = document.createElement("div");
    transactionStatus.className = "status"
    // transactionStatus.style.overflow = "auto";
    // transactionStatus.style.height = "fit-content";

    const filteredTransactions = await getTransactionsByPeriod(choice);
    // console.log("Nombre de transactions filtrées:", filteredTransactions.length);

    let upStat = 0;
    let downStat = 0;
    let xpStat = 0;
    let Level = 0;
    for (let i = 0; i < filteredTransactions.length; i++) {
        let type = filteredTransactions[i].type;
        switch (type) {
            case "up":
                // pour statistique Xp progression
                upStat += parseInt(filteredTransactions[i].amount)
                break;
            case "down":
                // pour statistique Xp progression
                downStat += parseInt(filteredTransactions[i].amount)
                break;
            case "xp":
                // transactionStatus.innerHTML += "xp\n"
                xpStat += parseInt(filteredTransactions[i].amount)
                break;
            case "level":
                // transactionStatus.innerHTML += "level\n"
                Level = parseInt(filteredTransactions[i].amount)
                break;
            default:
                transactionStatus.innerHTML += `autre-${transaction[i].type}\n`
                break;
        }
    }
    // <p>Stat total up: ${upStat} B</p>
    // <p>Stat total down: ${downStat} B</p>
    transactionStatus.innerHTML = `<h2>Status</h2>
        <p>Audit Données</p>
        <p style="margin-bottom: 2rem;">Stat total up: ${upStat} B</p>
        ${generateProgressBarChart(downStat, upStat, 0)}
        <p>Audit Reçus</p>
        <p>Stat total down: ${downStat} B</p>
        ${generateProgressBarChart(downStat, upStat, 1)}
        <p>Xp Cumulé ${xpStat} xp</p>
        <p>Level ${Level}</p>`

    if (transactionStatus != null) {
        dashoboardPage.appendChild(transactionStatus)
    }

}
// sert au bouton de filtre sert egalement de centre de controle du graphique de gestion des Audits reçus et données
async function xpManagement() {
    let choiceDays = ["last6Months", "last3Months", "lastMonth", "lastWeek"];
    let choice2 = null;
    let transactiongraphic = document.createElement("div");
    transactiongraphic.id = "svgContainer"
    transactiongraphic.style.overflow = "auto";
    transactiongraphic.style.height = "100%";
    let transactionTitle = document.createElement("h2")
    transactionTitle.innerText = "Schéma des transactions Audits"

    //Titre du schéma
    transactiongraphic.appendChild(transactionTitle);

    // Créer l'élément select
    let graphicSelect = document.createElement("select");
    graphicSelect.className = "GraphSelect"

    // Créer et ajouter les options au select
    for (let i = 0; i < choiceDays.length; i++) {
        let graphicOption = document.createElement("option");
        graphicOption.innerText = choiceDays[i]; // lastWeek, lastMonth, last3Months, last6Months
        graphicOption.value = choiceDays[i]; // lastWeek, lastMonth, last3Months, last6Months

        // Pré-sélectionner "last6Months" par défaut
        if (choiceDays[i] === "last6Months") {
            graphicOption.selected = true;
        }

        graphicSelect.appendChild(graphicOption);
    }

    graphicSelect.onchange = function () {
        GraphicSystemXP(graphicSelect.value, choice2);
    }
    // Ajouter l'élément select au conteneur
    transactiongraphic.appendChild(graphicSelect);

    let graphicBtn = document.createElement("button");
    graphicBtn.id = "graphxp";
    graphicBtn.innerText = "all";

    graphicBtn.onclick = function () {
        if (choice2 == null) {
            graphicBtn.innerText = "done";
            choice2 = "up";
        } else if (choice2 == "up") {
            graphicBtn.innerText = "received";
            choice2 = "down";
        } else {
            graphicBtn.innerText = "all";
            choice2 = null;

        }
        GraphicSystemXP(graphicSelect.value, choice2);
    };

    transactiongraphic.appendChild(graphicBtn);
    transactiongraphic.appendChild(graphicXP)

    dashoboardPage2.appendChild(transactiongraphic);


    // Fonction pour filtre et fetch du graphique
    await GraphicSystemXP(graphicSelect.value, choice2);
    // dashoboardPage2.appendChild()

}
//Graphique pour la gestion de l'xp fonction de transition pour completer le graphique
//Filtre les entrées selon une date prédéfinie pour avoir uniquement les données requises puis les répartis selon leur type
async function GraphicSystemXP(choice = null, choice2 = null) {

    const filteredTransactions = await getTransactionsByPeriod(choice);
    // console.log("Nombre de transactions filtrées:", filteredTransactions.length);

    let upStat = [];
    let downStat = [];
    let allStat = [];
    for (let i = 0; i < filteredTransactions.length; i++) {
        let type = filteredTransactions[i].type;
        switch (type) {
            case "up":
                // pour statistique Xp par date
                if (choice2 == "up" || choice2 == null) {
                    upStat.push({
                        path: filteredTransactions[i].path,
                        amount: parseInt(filteredTransactions[i].amount),
                        createdAt: filteredTransactions[i].createdAt,
                        type: filteredTransactions[i].type
                    });
                    allStat.push({
                        path: filteredTransactions[i].path,
                        amount: parseInt(filteredTransactions[i].amount),
                        createdAt: filteredTransactions[i].createdAt,
                        type: filteredTransactions[i].type
                    });
                }
                break;
            case "down":
                // pour statistique Xp par date
                if (choice2 == "down" || choice2 == null) {
                    downStat.push({
                        path: filteredTransactions[i].path,
                        amount: parseInt(filteredTransactions[i].amount),
                        createdAt: filteredTransactions[i].createdAt,
                        type: filteredTransactions[i].type
                    });
                    allStat.push({
                        path: filteredTransactions[i].path,
                        amount: parseInt(filteredTransactions[i].amount),
                        createdAt: filteredTransactions[i].createdAt,
                        type: filteredTransactions[i].type
                    });
                }
                break;
            default:
                break;
        }
    }
    if (choice2 == null) {
        // console.log("allStat: ", allStat)
        generateBarChart(allStat)
        historiCell("xp")
    } else if (choice2 == "up") {
        // console.log("up: ", upStat)
        generateBarChart(upStat)
        historiCell("xp")
    } else {
        // console.log("down: ", downStat)
        historiCell("xp")
        generateBarChart(downStat)
    }
}
//function pour créer le premier graphique en barre et l'append sur la page
function generateBarChart(data) {
    const svgWidth = 700;
    const svgHeight = 400;
    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const barWidth = 7; //10
    const barGap = 4; //15

    // Calcul de la hauteur maximale des barres pour normaliser les données
    const maxAmount = Math.max(...data.map(d => d.amount));
    const scaleY = (svgHeight - margin.bottom - margin.top) / maxAmount;

    // Création de l'élément SVG
    let svg = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

    // Axes
    svg += `<line x1="${margin.left - 10}" y1="${svgHeight - margin.bottom + 10}" x2="${svgWidth}" y2="${svgHeight - margin.bottom + 10}" stroke="red"/>`;
    svg += `<line x1="${margin.left - 10}" y1="${svgHeight - margin.bottom + 10}" x2="${margin.left - 10}" y2="${margin.top}" stroke="red"/>`;

    // Barres creation
    data.forEach((d, i) => {
        const barHeight = d.amount * scaleY;
        const x = margin.left + (barWidth + barGap) * i;
        const y = svgHeight - margin.bottom - barHeight;
        if (d.type == "up") {
            svg += `
                <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="green">
                    <title>Path: ${d.path}\nDate: ${new Date(d.createdAt).toISOString().split('T')[0]}\nAmount: ${d.amount} B\nType: ${d.type}</title>
                </rect>
            `;

        } else {
            svg += `
                <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="blue">
                    <title>Path: ${d.path}\nDate: ${new Date(d.createdAt).toISOString().split('T')[0]}\nAmount: ${d.amount} B\nType: ${d.type}</title>
                </rect>
            `;
        }
    });

    // Labels de l'axe des X
    data.forEach((d, i) => {
        const x = margin.left + (barWidth + barGap) * i + barWidth / 2;
        const y = svgHeight - margin.bottom + 20;
        const date = new Date(d.createdAt).toISOString().split('T')[0];
        if (i == 0) {
            // svg += `<text x="${margin.left+10}" y="${svgHeight - margin.bottom+30}" font-size="15" text-anchor="middle" stroke="white">Dates</text>`;
            svg += `<text x="${x + 20}" y="${svgHeight - margin.bottom + 30}" font-size="15" text-anchor="middle" stroke="white">${date}</text>`;
        }
        if (data.length - 1 == i) {
            svg += `<text x="${x + 20}" y="${svgHeight - margin.bottom + 30}" font-size="15" text-anchor="middle" stroke="white">${date}</text>`;
        }
        // svg += `<text x="${x}" y="${y}" font-size="12" text-anchor="middle" transform="rotate(40, ${x+10}, ${y+60})" stroke="white">${d.path}</text>`;
    });



    // Labels de l'axe des Y (valeurs approximatives pour l'exemple)
    const yLabels = [0, maxAmount / 2, maxAmount];
    yLabels.forEach(label => {
        const x = margin.left - 10;
        const y = svgHeight - margin.bottom - label * scaleY + 5;
        svg += `<text x="${x - 20}" y="${y}" font-size="15" text-anchor="middle" stroke="white">${Math.round(label / 1000)}K</text>`;
    });

    // Fermeture de l'élément SVG
    svg += `</svg>`;

    // Ajout du SVG au conteneur de la page
    let parentElement = graphicXP;
    let existingSVG = parentElement.querySelector("svg");
    if (existingSVG) {
        graphicXP.innerHTML = '';
    }
    graphicXP.innerHTML = svg;

}
//cree une svg progressbar qui sera return sous le format let svgContent: string
function generateProgressBarChart(received, done, number) {
    // let svgContent;
    let xpAuditsRecus = received
    let xpAuditsDonnes = done
    let totalXp = xpAuditsDonnes + xpAuditsRecus;

    let percentDonnes = (xpAuditsDonnes / totalXp) * 100;
    let percentRecus = (xpAuditsRecus / totalXp) * 100;
    // Crée un élément SVG
    if (number == 0) {
        //<p>Audit Données</p> viewBox="0 0 100 60"
        let svgContent = `
        <svg width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100%" height="25" fill="lightgray"></rect>
            <rect x="0" y="0" width="${percentDonnes}%" height="25" fill="blue"></rect>
        </svg>
    `;
        return svgContent
    } else {
        //<p>Audit Reçus</p> viewBox="0 0 100 60"
        let svgContent = `
        <svg width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="35" width="100%" height="25" fill="lightgray"></rect>
            <rect x="0" y="35" width="${percentRecus}%" height="25" fill="red">Reçus</rect>
        </svg>
    `;
        return svgContent
    }


}

//crée un Historique pour un graphique svg, (incomplet, manque 1 historique svg)
function historiCell(choice) {

    let choiceHistorique = [
        { color: "blue", description: "Audit reçu par les autres" },
        { color: "green", description: "Audit donnés aux autres" }
    ]
    if (choice == "xp") {
        if (dashoboardPage2.querySelector("div#historique")) {
            return
        }
        let histoDiv = document.createElement("div")
        histoDiv.id = "historique"
        histoDiv.innerHTML = "<h3>Historique des interactions</h3>"
        let histoUl = document.createElement("ul")
        histoUl.id = "historique-list"
        for (let i = 0; i < choiceHistorique.length; i++) {
            let histoLi = document.createElement("li")
            histoLi.className = "HistoricLine"
            histoLi.innerText += choiceHistorique[i].description
            // Création de la barre colorée
            let colorBar = document.createElement("div");
            colorBar.style.backgroundColor = choiceHistorique[i].color;
            colorBar.style.width = "20px";  // largeur de la barre
            colorBar.style.height = "20px";  // hauteur de la barre
            colorBar.style.display = "inline-block";  // alignement en ligne
            colorBar.style.marginRight = "10px";  // espace après la barre
            histoLi.appendChild(colorBar)
            histoUl.appendChild(histoLi)
        }
        histoDiv.appendChild(histoUl)
        dashoboardPage2.appendChild(histoDiv)
    }
}


async function GraphicSystemSkill() {
    let objectLangage = {
        type: "",
        amount: 0
    }
    let objectTechnologies = {
        go: objectLangage,
        js: objectLangage,
        html: objectLangage,
        css: objectLangage,
        unix: objectLangage,
        docker: objectLangage,
        sql: objectLangage,
        django: objectLangage,
    }
    let obectTechnicalSkill = {
        skill_prog: objectLangage,
        skill_algo: objectLangage,
        skill_sysadmin: objectLangage,
        skill_frontend: objectLangage,
        skill_backend: objectLangage,
        skill_stats: objectLangage,
        skill_ai: objectLangage,
        skill_game: objectLangage,
        skill_tcp: objectLangage,
    }

    const transactions = transaction
    // console.log("Nombre de transactions filtrées:", transactions.length);

    for (let i = 0; i < transactions.length; i++) {
        let type = transactions[i].type;
        switch (type) {
            //Technologies
            case "skill_go":
                if (transactions[i].amount > objectTechnologies.go.amount) {
                    objectTechnologies.go = transactions[i]
                }
                break;
            case "skill_js":
                if (transactions[i].amount > objectTechnologies.js.amount) {
                    objectTechnologies.js = transactions[i]
                }
                break;
            case "skill_html":
                if (transactions[i].amount > objectTechnologies.html.amount) {
                    objectTechnologies.html = transactions[i]
                }
                break;
            case "skill_css":
                if (transactions[i].amount > objectTechnologies.css.amount) {
                    objectTechnologies.css = transactions[i]
                }
                break;
            case "skill_unix":
                if (transactions[i].amount > objectTechnologies.unix.amount) {
                    objectTechnologies.unix = transactions[i]
                }
                break;
            case "skill_docker":
                if (transactions[i].amount > objectTechnologies.docker.amount) {
                    objectTechnologies.docker = transactions[i]
                }
                break;
            case "skill_sql":
                if (transactions[i].amount > objectTechnologies.sql.amount) {
                    objectTechnologies.sql = transactions[i]
                }
                break;

            //Technical Skill
            case "skill_prog":
                if (transactions[i].amount > obectTechnicalSkill.skill_prog.amount) {
                    obectTechnicalSkill.skill_prog = transactions[i]
                }
                break;
            case "skill_algo":
                if (transactions[i].amount > obectTechnicalSkill.skill_algo.amount) {
                    obectTechnicalSkill.skill_algo = transactions[i]
                }
                break;
            case "skill_sys-admin":
                if (transactions[i].amount > obectTechnicalSkill.skill_sysadmin.amount) {
                    obectTechnicalSkill.skill_sysadmin = transactions[i]
                }
                break;
            case "skill_front-end":
                if (transactions[i].amount > obectTechnicalSkill.skill_frontend.amount) {
                    obectTechnicalSkill.skill_frontend = transactions[i]
                }
                break;
            case "skill_back-end":
                if (transactions[i].amount > obectTechnicalSkill.skill_backend.amount) {
                    obectTechnicalSkill.skill_backend = transactions[i]
                }
                break;
            case "skill_stats": //Statistics
                if (transactions[i].amount > obectTechnicalSkill.skill_stats.amount) {
                    obectTechnicalSkill.skill_stats = transactions[i]
                }
                break;
            case "skill_ai":
                if (transactions[i].amount > obectTechnicalSkill.skill_ai.amount) {
                    obectTechnicalSkill.skill_ai = transactions[i]
                }
                break;
            case "skill_game":
                if (transactions[i].amount > obectTechnicalSkill.skill_game.amount) {
                    obectTechnicalSkill.skill_game = transactions[i]
                }
                break;
            case "skill_tcp":
                if (transactions[i].amount > obectTechnicalSkill.skill_tcp.amount) {
                    obectTechnicalSkill.skill_tcp = transactions[i]
                }
                break;
            default:
                //Blochain, Mobile Development, Cybersecurity, UX/UI
                // console("pour type: ", type, " veuillez faire la dernière MAJ")
                break;
        }
    }
    // console.log("objectTechnologies: ", objectTechnologies)
    // Supprimer les entrées avec un montant de 0
    for (const key in objectTechnologies) {
        if (objectTechnologies[key].amount === 0) {
            delete objectTechnologies[key];
        }
    }
    for (const key in obectTechnicalSkill) {
        if (obectTechnicalSkill[key].amount === 0) {
            delete obectTechnicalSkill[key];
        }
    }

    let elementDiv = document.createElement("div")
    elementDiv.className = "elementdiv"
    let titleTechnologies = document.createElement("h2")
    titleTechnologies.className = "titleschema2"
    titleTechnologies.innerText = "Diagramme de technologies maitrisées"
    elementDiv.appendChild(titleTechnologies)

    drawRadarChart(objectTechnologies, elementDiv)

    let elementDiv2 = document.createElement("div")
    elementDiv2.className = "elementdiv"
    let titleTechnicalSkill = document.createElement("h2")
    titleTechnicalSkill.className = "titleschema2"
    titleTechnicalSkill.innerText = "Diagramme des compétences techniques maitrisées";

    elementDiv2.appendChild(titleTechnicalSkill)
    
    drawRadarChart(obectTechnicalSkill, elementDiv2)
}

// Fonction pour dessiner le graphique en toile d'araignée
function drawRadarChart(data, htmlelement) {
    let debordement = 0
    if(data[Object.keys(data)[0]].type == "skill_go"){
        debordement = 20
    } else {
        debordement = 40
    }
    const canvas = document.createElement("canvas")
    canvas.className = "radarChart";
    htmlelement.appendChild(canvas);
    dashoboardPage3.appendChild(htmlelement);

    const ctx = canvas.getContext('2d');

    const maxValue = 100;
    const numberOfData = Object.keys(data).length;
    const angle = (Math.PI * 2) / numberOfData;

    // Taille du canvas
    canvas.width = canvas.height = 500;
    const centerX = canvas.width / 2 - debordement; //-20 est un réajustement
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.4;

    // Dessiner le fond gris
    // ctx.fillStyle = '#665';
    ctx.fillStyle = '#9b9b81';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dessiner le fond violet transparent du graphique
    ctx.beginPath();
    for (let i = 0; i < numberOfData; i++) {
        const percent = data[Object.keys(data)[i]].amount / maxValue;
        const x = centerX + radius * Math.cos(angle * i) * percent;
        const y = centerY + radius * Math.sin(angle * i) * percent;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(128, 0, 128, 0.2)'; // Fond violet transparent
    ctx.fill();

    // Dessiner les lignes radiales et les pourcentages
    for (let i = 0; i < numberOfData; i++) {
        const x = centerX + radius * Math.cos(angle * i);
        const y = centerY + radius * Math.sin(angle * i);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(128, 0, 128, 0.8)';
        ctx.stroke();
        ctx.closePath();

        // Afficher le pourcentage à chaque extrémité du graphique
        const percent = Math.round((data[Object.keys(data)[i]].amount / maxValue) * 100);
        ctx.fillStyle = 'rgba(128, 0, 128, 1)';
        // ctx.fillStyle = '#5c1ce8';
        ctx.fillText(Object.keys(data)[i] + ' - ' + percent + '%', x + 10, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(128, 0, 128, 0.8)';
    ctx.stroke();

    // Dessiner et relier les points de données par des lignes rouges
    ctx.beginPath();
    let index = 0;
    for (const skill in data) {
        const percent = data[skill].amount / maxValue;
        const x = centerX + radius * Math.cos(angle * index) * percent;
        const y = centerY + radius * Math.sin(angle * index) * percent;
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        // ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
        ctx.fill();
        ctx.closePath();

        // Ajouter le nom de la compétence à côté du point
        ctx.fillStyle = 'rgba(128, 0, 128, 0.6)';
        // ctx.fillText(skill, x + 10, y);

        index++;
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(128, 0, 128, 0)';
    ctx.stroke();
}

function logout() {
    token = null
    user = null
    transaction = null
    document.getElementById("root").innerHTML = ''
    mainPage();
    //Revenir sur l'ecran principal
}