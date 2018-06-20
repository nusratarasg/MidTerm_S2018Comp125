/* Custom javaScripts goes here */
/*  File name          contact.js
    Author's name      Nusrat Ara Riaz
    Student id         300759574
    Mid term test      S2018 Comp125
    File description   This file contain JavaScript Code 
*/

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
    "use strict";


    // YOUR CODE GOES HERE
    function textAdd() {
        let IntroParagraph = document.getElementById("IntroParagraph");
        let introtext = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
        IntroParagraph.textContent = introtext;

        let Folegandros = document.getElementById("Folegandros");
        let text2 = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets. ";
        Folegandros.textContent = text2;

        let Alonissos = document.getElementById("Alonissos");
        let text3 = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy. ";
        Alonissos.textContent = text3;

        let Spetses = document.getElementById("Spetses");
        let text4 = "Off the mainland, ";
        Spetses.textContent = text4;

        let Amorgos = document.getElementById("Amorgos");
        let text5 = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff. ";
        Amorgos.textContent = text5;

        let Syros = document.getElementById("Syros");
        let text6 = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways. ";
        Syros.textContent = text6;

        let Milos = document.getElementById("Milos");
        let text7 = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as `the island of colours` it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape. ";
        Milos.textContent = text7;

        let Hydra = document.getElementById("Hydra");
        let text8 = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves. ";
        Spetses.textContent = text8;

        let Ithaca = document.getElementById("Ithaca");
        let text9 = "Most famous for being the home of Odysseus, and a prominent figure in Homer's `The Odyssey,` Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries. ";
        Ithaca.textContent = text9;

        let Gavdos = document.getElementById("Gavdos");
        let text10 = "Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping. ";
        Gavdos.textContent = text10;



    }

    //Form Started here

    // Form Decoration
    // Local Variables
    let FirstName = document.getElementById("firstName");
    let LastName = document.getElementById("lastName");
    let ContactNumber = document.getElementById("contactNumber");
    let EmailAddress = document.getElementById("email");
    let Message = document.getElementById("yourMessage");


    function OutputFormDataToConsole() {
        console.log(`%c ----------------------------------------------`, "color: blue;background-color:grey;font-weight:bold;");
        console.log(`%c Personal Data:`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ----------------------------------------------`, "color: blue;background-color:grey;font-weight:bold;");
        console.log(`%c First Name    : ${FirstName.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Last Name     : ${LastName.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: blue;font-weight:bold;");
        console.log(`%c Your Message  : ${Message.value}`, "color: blue;font-weight:bold;");
        console.log(`%c ----------------------------------------------`, "color: blue;background-color:grey;font-weight:bold;");

    }

    function clearValidationMessages() {
        FirstName.setCustomValidity("");
        LastName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                // when the user is inputting data
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });

                // when the user enters incorrect data
                element.addEventListener("invalid", function () {
                    switch (element.id) {
                        case "FirstName":
                            element.setCustomValidity("Enter at least initial for name");
                            break;
                        case "LastName":
                            element.setCustomValidity("Enter at least initial for name");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("Required pattern is (###) ###-####");
                            break;
                        case "EmailAddress":
                            element.setCustomValidity("Email should like this xxx@x.xxx");
                            break;
                        case "Message":
                            element.setCustomValidity("Can not be Empaty");
                            break;
                        default:
                            element.setCustomValidity("This Field is Required");
                            break;
                    }

                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function AboutContactContent() {

        clearValidationMessages();

        console.log("%c  Form Data will be displayed below", "font-weight:bold; font-size: 15px;color:blue");



        let SendButton = document.getElementById("sendButton");
        SendButton.addEventListener("click", (event) => {

            event.preventDefault();

            OutputFormDataToConsole();
            ValidateForm();

        });

    }
    function Start() {
        AboutContactContent();
        textAdd();

    }
    
    window.addEventListener("load", Start);
})();

