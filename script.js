const animeData = [
    { name: "Sword Art Online", imageUrl: "https://i.pinimg.com/564x/14/98/9e/14989ec2bc8d3dbc96340ce5be282d43.jpg", link: "https://zorox.to/watch/sword-art-online-5y9/ep-1" },
    { name: "Solo Leveling", imageUrl: "https://i.pinimg.com/564x/51/d0/ca/51d0ca88aa01f44ca855ea4e35675fa4.jpg", link: "https://zorox.to/watch/solo-leveling-3rpv2/ep-2" },
    { name: "Vinland Saga", imageUrl: "https://i.pinimg.com/564x/25/f5/0b/25f50b6306707e7ac7d0814267529117.jpg", link: "https://zorox.to/watch/vinland-saga-77zy/ep-1" },
    { name: "Berserk", imageUrl: "https://i.pinimg.com/564x/bc/3f/05/bc3f057c2482069465c30b97bacfbc31.jpg", link: "https://zorox.to/watch/berserk-xrp8/ep-1" },
    { name: "Black Clover", imageUrl: "https://i.pinimg.com/564x/f8/ef/4b/f8ef4b59a6bdb7b9f0d5c8f3a32edf00.jpg", link: "https://zorox.to/watch/black-clover-v2k6/ep-1" },
    { name: "Tokyo Revengers", imageUrl: "https://i.pinimg.com/564x/38/f9/1e/38f91ebf2cbaa5423f136d14b3c50d8d.jpg", link: "https://zorox.to/watch/tokyo-revengers-vpq4/ep-0" },
    { name: "The Classroom of The Elite", imageUrl: "https://i.pinimg.com/564x/95/fb/1a/95fb1abee8273aae44be5c6f014e4547.jpg", link: "https://zorox.to/watch/welcome-to-the-classroom-of-the-elite-you-zitsu-3r712/ep-1" },
    { name: "The God of High School", imageUrl: "https://static.bunnycdn.ru/i/cache/images/a/a4/a4574f15a407a592a4201f1cf0dade84.jpg", link: "https://zorox.to/watch/the-god-of-high-school-p01x/ep-1" },
    { name: "Fire Force", imageUrl: "https://i.pinimg.com/564x/43/8c/d0/438cd08728c92d7b1ed5d6dc2fa16d7d.jpg", link: "https://zorox.to/watch/fire-force-v186/ep-1" },
    { name: "Fullmetal Alchemist: Brotherhood", imageUrl: "https://i.pinimg.com/564x/36/0f/5f/360f5f432c94d162c86cdc5ac3bc8b03.jpg", link: "https://zorox.to/watch/fullmetal-alchemist-brotherhood-0r7/ep-1" },
    { name: "ode Geass: Lelouch of the Rebellion", imageUrl: "https://i.pinimg.com/564x/68/4c/6e/684c6e81d0e064ec6f917f88a1fdda7e.jpg", link: "https://zorox.to/watch/code-geass-lelouch-of-the-rebellion-2x52/ep-1" },
    { name: "Made in Abyss", imageUrl: "https://i.pinimg.com/564x/0f/20/68/0f206850efd2f68832d6f26f1e927f8c.jpg", link: "https://zorox.to/watch/made-in-abyss-582v/ep-1" },
    { name: "Death Note", imageUrl: "https://i.pinimg.com/564x/89/77/0f/89770f07354176ff9418be7dc6c139b0.jpg", link: "https://zorox.to/watch/death-note-z02/ep-1" },
    { name: "Monster", imageUrl: "https://i.pinimg.com/564x/8d/4c/ac/8d4cacf7dde0861ddc6e06a07e7e7b24.jpg", link: "https://zorox.to/watch/monster-60jp/ep-1" },
    { name: "Akame ga Kill!", imageUrl: "https://i.pinimg.com/564x/78/16/61/7816616d0628be88a5a0773b15e155dc.jpg", link: "https://zorox.to/watch/akame-ga-kill-908/ep-1" },
    { name: "Steins;Gate", imageUrl: "https://i.pinimg.com/564x/ab/43/40/ab4340ec37451ba6d9c89df90481e6fc.jpg", link: "https://zorox.to/watch/steinsgate-1rx/ep-1" },
    { name: "Neon Genesis Evangelion", imageUrl: "https://i.pinimg.com/564x/ff/b1/b9/ffb1b91ca943ac84d4ae7fd4a1f86bf5.jpg", link: "https://zorox.to/watch/neon-genesis-evangelion-dub-v2-dub-qoqj/ep-1" },
    { name: "Bleach", imageUrl: "https://i.pinimg.com/564x/28/67/a0/2867a0530493f774367a1872cf5eb50f.jpg", link: "https://zorox.to/watch/bleach-6j9/ep-1" },
    { name: "Attack on Titan", imageUrl: "https://i.pinimg.com/564x/d1/89/e3/d189e3a014f2c7604e62822efdaf9813.jpg", link: "https://zorox.to/watch/attack-on-titan-kww/ep-1" },
];


function searchAnime() {
    const input = document.getElementById("searchbar").value.toLowerCase();
    const animeListContainer = document.getElementById("lol");

    // Clear previous suggestions
    animeListContainer.innerHTML = "";

    // Filter and display matching suggestions
    animeData.forEach(anime => {
        const animeNameLower = anime.name.toLowerCase();
        if (animeNameLower.includes(input)) {
            const boxElement = createBoxElement(anime);
            animeListContainer.appendChild(boxElement);
        }
    });
}

function createBoxElement(anime) {
    const boxElement = document.createElement("div");
    boxElement.classList.add("box");
    boxElement.style.backgroundImage = `url('${anime.imageUrl}')`;

    const linkElement = document.createElement("a");
    linkElement.href = anime.link;
    linkElement.target = "_blank";
    linkElement.classList.add("box-link");

    const proElement = document.createElement("p");
    proElement.classList.add("pro");
    proElement.textContent = anime.name;

    linkElement.appendChild(proElement);
    boxElement.appendChild(linkElement);

    return boxElement;
}

// Add event listener for the search icon
document.getElementById("searchbar").addEventListener("input", searchAnime);

// Menubar/navbar functionality using event listener
const icon = document.getElementById("icon");
const menubar = document.getElementById("menubar");

icon.addEventListener("click", function () {
    menubar.classList.toggle("page");
    menubar.classList.toggle("linkopen");
    icon.innerHTML = (menubar.className == "linkopen") ? "\u00d7" : "☰";
});

