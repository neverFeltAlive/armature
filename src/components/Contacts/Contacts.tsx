import React from 'react';
import {IconFeature} from "../About/About";
import styles from "./Contacts.module.sass";
import {CONTACTS} from "../../utils/constants";

const Contacts = (): JSX.Element => {
    return (
        <section className={styles.contacts}>
            <h2>Контактная информация</h2>

            <div className={styles.featureBar}>
                <IconFeature text={CONTACTS.tel} src="/phone.png"/>
                <IconFeature text={CONTACTS.address} src="/address.png"/>
                <IconFeature text={CONTACTS.email} src="/email.png"/>
            </div>
        </section>
    );
};

export default Contacts;