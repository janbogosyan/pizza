import { useEffect, useState } from 'react';

import Item from './item/Item';
import { getData } from '../../apis/daye';

import './Items.css';

const Items = () => {
    const [products, setProducts] = useState(null);
    const [err, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await getData();
            setProducts(data);
            setError(error);
        };
        fetchData();
    }, []);

    const render = () => {
        if (err) {
            return <div className="error">{err}</div>;
        }

        return products && products.map((product, index) => {
            return (
                <Item 
                    key={index}
                    {...product}
                />
            );
        });
    };

    return (
        <>
            <h1 className="title">Select and customize your package</h1>
            <div className="packages-wrapper">
                {render()}
            </div>
        </>
    );
};

export default Items;