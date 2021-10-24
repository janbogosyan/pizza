import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import ItemEdit from '../item-edit/ItemEdit';
import { constants } from '../../../utils';
import { Button } from '../../UI';

import './Item.css';

const Item = ({ currency, price, productImage, tampons }) => {
    const [packageAmount, setPackageAmount] = useState(0);
    const [editedPackageAmount, setEditedPackageAmount] = useState(0);
    const [tamponSize, setTamponSize] = useState(constants.REGULAR_SIZE);
    const [currentPackageTampons, setCurrentPackageTampons] = useState([...tampons]);

    useEffect(() => {
        let sum = 0;
        let size = '';
        tampons.forEach(element => {
            sum += +element.amount;
            size = element.size;
        });
        setTamponSize(size);
        setPackageAmount(sum);
        setEditedPackageAmount(sum);
    }, [tampons]);

    const changePackageAmount = (amount, index, fromInput = false) => {
        if (!checkBounds(amount, index, fromInput)) return;
        const newPackage = [...tampons];
        newPackage[index].amount = amount;
        setCurrentPackageTampons(newPackage);
    };

    const checkBounds = (amount, index, fromInput = false) => {
        if (amount < 0) return false;
        let sum = 0;
        currentPackageTampons.forEach((tampon, i) => {
            if (index !== i) {
                let amount = +tampon.amount;
                if (isNaN(amount)) amount = 0;
                sum += amount;
            }
        });
        setEditedPackageAmount(sum + amount);
        if (amount + sum >= packageAmount && fromInput) {
            const newPackage = [...tampons];
            newPackage[index].amount = packageAmount - sum;
            setCurrentPackageTampons(newPackage);
            return false;
        }
        return true;
    };

    const renderPackageActions = () => {
        return tampons.map((tampon, index) => {
            let amount = +tampon.amount;
            if (isNaN(amount)) amount = 0;
            return (
                <ItemEdit 
                    key={index}
                    index={index}
                    addingActive={packageAmount > editedPackageAmount}
                    changePackageAmount={changePackageAmount}
                    {...tampon}
                    itemsCount={tampons.length}
                    amount={amount}
                />
            );
        });
    };

    return (
        <div className="wrapper">
            <div className="product-image">
                <img src={productImage} alt="Product image" />
            </div>
            <div className="product-info">Tampons package {packageAmount} pcs - {tamponSize} size</div>
            {renderPackageActions()}
            <div className="product-price">{price} {currency}</div>
            <Button
                onClick={() => console.log('Btn clicked')}
                className="buy-btn"
                text="Buy now"
            />
        </div>
    );
};

Item.propTypes = {
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
    tampons: PropTypes.array.isRequired,
};

export default Item;