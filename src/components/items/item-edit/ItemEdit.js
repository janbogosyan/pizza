import PropTypes from 'prop-types';

import { Button, Input } from '../../UI';
import { constants } from '../../../utils';

import './ItemEdit.css';

const ItemEdit = ({ amount, index, coating, changePackageAmount, addingActive, itemsCount }) => {
    const subtractDisabled = amount <= 0 || itemsCount <= 1;

    return (
        <div className="edit-wrapper">
            <div className="action-wrapper">
                <div className="tampon-type">{coating === 'none' ? constants.NAKED : coating}</div>
                <div className="actions">
                    <Button
                        onClick={() => changePackageAmount(amount - 1, index)}
                        disabled={subtractDisabled}
                        className={`action-btn ${subtractDisabled ? 'disabled' : ''}`}
                        text="-"
                    />
                    <Input
                        className={`amount-input ${itemsCount <= 1 ? 'disabled' : ''}`}
                        disabled={itemsCount <= 1}
                        value={amount}
                        onChange={(e) => changePackageAmount(+e.target.value, index, true)}
                    />
                    <Button
                        onClick={() => changePackageAmount(amount + 1, index)}
                        disabled={!addingActive}
                        className={`action-btn ${!addingActive ? 'disabled' : ''}`}
                        text="+"
                    />
                </div>
            </div>
        </div>
    );
};

ItemEdit.propTypes = {
    amount: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    coating: PropTypes.string.isRequired,
    changePackageAmount: PropTypes.func.isRequired,
    addingActive: PropTypes.bool.isRequired,
    itemsCount: PropTypes.number.isRequired
};

export default ItemEdit;