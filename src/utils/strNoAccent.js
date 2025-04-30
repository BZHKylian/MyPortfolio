// Fonction pour enlever les accents des caractères
// src/utils/strNoAccent.js

export function strNoAccent(str) {
    if (!str) return '';  // Vérifier que str est défini
    const accents = {
        a: /[àáâãäå]/g,
        e: /[èéêë]/g,
        i: /[ìíîï]/g,
        o: /[òóôõö]/g,
        u: /[ùúûü]/g,
        c: /[ç]/g,
        n: /[ñ]/g
    };

    for (let letter in accents) {
        str = str.replace(accents[letter], letter);
    }

    return str;
}
