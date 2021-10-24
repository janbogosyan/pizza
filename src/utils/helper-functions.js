import { stringSimilarity } from 'string-similarity-js';
import { xml2json } from 'xml-js';

import { ACCEPTED_DIFF_BET_STRS, CORRECT_PROP_NAMES } from './constants';

export const isSimilar = (str1, str2) => {
    return stringSimilarity(str1, str2) > ACCEPTED_DIFF_BET_STRS;
};

const removeJsonTextAttribute = (value, parentElement) => {
    try {
        const keyNum = Object.keys(parentElement._parent).length;
        const keyName = Object.keys(parentElement._parent)[keyNum - 1];
        parentElement._parent[keyName] = value;
    }
    catch (e) {
        console.error(e);
    }
};
  
export const findTamponData = (data, prev) => {
    if (prev === 'tampon') {
        return Array.isArray(data) ? data : [data];
    }
    
    for (let el in data) {
        return findTamponData(data[el], el);
    }
};

export const constructProductData = (element, el) => {
    Object.keys(element).forEach((key) => {
        for (let i = 0; i < CORRECT_PROP_NAMES.length; i++) {
            const name = CORRECT_PROP_NAMES[i];
            if (isSimilar(name, key)) {
                el[name] = element[key];
                if (name === 'tampons' && typeof(element[key]) !== 'object') {
                    const parsedData = JSON.parse(xml2json(element[key],{ compact: true, trim: true, textFn: removeJsonTextAttribute }));
              
                    el[name] = findTamponData(parsedData, null);
                }
                break;
            }
        }
    });
};