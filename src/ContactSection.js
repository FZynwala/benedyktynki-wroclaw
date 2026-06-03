import { useState } from 'react';
import HouseIcon from './icons/HouseIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import './index.css';

export default function ContactSection({ data }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const { title, phoneNumber, email, address, accountNumber } = data;

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center space-around mt-5 mb-7 w-full">
                {/* <div className="text-5xl font-bold mt-7 mb-5">{title}</div> */}
                {/* <Line color={'border-neutral-300'} /> */}
                <div className="flex flex-row items-center justify-between">
                    <HouseIcon />
                    <div className="ml-2">
                        <div className="w-50 md:w-80 mt-5">{address.name}</div>
                        <div className="w-64">{address.street}</div>
                        <div className="w-64">{`${address.zipCode} ${address.city}`}</div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row space-around mt-5 text-l font-semibold items-center">
                        <PhoneIcon />
                        <div className="ml-2">{phoneNumber}</div>
                    </div>
                    <div className="flex flex-row space-around mt-3 text-l font-semibold items-center">
                        <MailIcon />
                        <div className="ml-2">{email}</div>
                    </div>
                    <div className="flex flex-row space-around mt-3 text-l font-semibold items-center">
                        <div>Nr konta: </div>
                        <div className="ml-2">{accountNumber}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
