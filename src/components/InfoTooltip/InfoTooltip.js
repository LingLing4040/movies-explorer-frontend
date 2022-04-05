import React from 'react';
import closePath from '../../images/close-button.svg';
import okPath from '../../images/ok.svg';
import notOkPath from '../../images/not-ok.svg';

function InfoTooltip({ isSuccess, onClose, isOpened, handlePopupClick, infoMessage }) {
    return (
        <div
            className={`info-tooltip  ${isOpened ? 'info-tooltip_opened' : ''}`}
            onClick={handlePopupClick}
        >
            <div className='info-tooltip__container'>
                <button type='button' className='info-tooltip__close-button' onClick={onClose}>
                    <img className='info-tooltip__close-icon' src={closePath} alt='Закрыть' />
                </button>
                <img
                    className='info-tooltip__message-icon'
                    src={isSuccess ? okPath : notOkPath}
                    alt={isSuccess ? 'Ок' : 'Не Ок'}
                />
                <h2 className='info-tooltip__message'>{infoMessage}</h2>
            </div>
        </div>
    );
}

export default InfoTooltip;
