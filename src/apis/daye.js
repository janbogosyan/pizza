import axios from 'axios';

import { constants, helpers } from '../utils';

export const getData = async () => {
    try {
        const response = await axios.get(constants.ENDPOINT);
        const result = [];
        response.data.forEach(element => {
            const el = {};
            helpers.constructProductData(element, el);
            result.push(el);
        });

        const { REGULAR_SIZE } = constants;

        result.sort((a, b) => {
            let aTampons = a.tampons;
            let bTampons = b.tampons;
            if (aTampons[0].size === REGULAR_SIZE) {
                return -1;
            } else if (bTampons[0].size === REGULAR_SIZE) {
                return 1;
            } else {
                return 0;
            }
        });
        return {data: result, error: null };
    } catch (error) {
        console.error(error);
        return { data: null, error: 'Oops, something went wrong.' };
    }
};
