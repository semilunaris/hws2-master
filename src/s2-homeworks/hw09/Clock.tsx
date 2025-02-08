import React, { useEffect, useState } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        if (timerId) return;

        const id = window.setInterval(() => {
            setDate(new Date());
        }, 1000);

        setTimerId(id);
        console.log('Таймер запущен, ID:', id);
    };

    const stop = () => {
        if (timerId) {
            clearInterval(timerId);
            setTimerId(undefined);
            console.log('Таймер остановлен');
        }
    };

    const onMouseEnter = () => {
        setShow(true)
    };

    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = date.toLocaleTimeString('ru-RU') || <br />;
    const stringDate = date.toLocaleDateString('ru-RU') || <br />;
    const stringDay = date.toLocaleDateString('en-US', { weekday: 'long' }) || <br />;
    const stringMonth = date.toLocaleString('en-US', { month: 'long' }) || <br />;

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;