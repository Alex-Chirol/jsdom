
const monBouton = document.getElementById('monBouton');

// Ex 1

// monBouton.addEventListener('click', () => {
//     alert('Ca marche');
// });


//  Ex 2

monBouton.addEventListener('click', () => {

    const monParagraphe = document.getElementById('monParagraphe');
    monParagraphe.textContent = 'Je suis un paragraphe modifié';
});


// 2.

monParagraphe.addEventListener('mouseover', () => {

    monParagraphe.style.color = 'blue';
    monParagraphe.style.fontSize = '30px';
});

monParagraphe.addEventListener('mouseout', () => {

    monParagraphe.style.color = 'black';
    monParagraphe.style.fontSize = '16px';
});

// 3.

monBouton.addEventListener('click', () => {

    const nouvelItem = document.createElement('li');
    nouvelItem.textContent = 'Nouvel élément';

    const list = document.getElementById('maListe');
    list.appendChild(nouvelItem);

});


// monBouton.addEventListener('click', () => {
  
//   const liste = document.getElementById('maListe');
//   liste.innerHTML += '<li>Nouvel élément</li>';

// });
