import React from 'react';
import {IconFeature} from "../About/About";
import styles from "./Contacts.module.sass";
import {CONTACTS} from "../../utils/constants";
import phone from "../../static/images/phone.png";
import address from "../../static/images/address.png";
import email from "../../static/images/email.png";

const Contacts = (): JSX.Element => {
    return (
        <section className={styles.contacts}>
            <h2>Контактная информация</h2>

            <div className={styles.featureBar}>
                <IconFeature text={CONTACTS.tel} src={phone}/>
                <IconFeature text={CONTACTS.address} src={address}/>
                <IconFeature text={CONTACTS.email} src={email}/>
            </div>
        </section>
    );
};

export default Contacts;