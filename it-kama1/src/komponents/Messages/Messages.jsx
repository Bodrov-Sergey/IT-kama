import React from "react";
import s from './Messages.module.css';
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <section className={s.messages}>
            <Dialog name='Ivan Ivanov' lastMessage='Hi, how are you?' date='08.04.2021' unreadenNum='1'/>
            <Dialog name='Ivan Ivanov' lastMessage='Hi, how are you?' date='08.04.2021' unreadenNum='1'/>
            <Dialog name='Ivan Ivanov' lastMessage='Hi, how are you?' date='08.04.2021' unreadenNum='1'/>
            <Dialog name='Ivan Ivanov' lastMessage='Hi, how are you?' date='08.04.2021' unreadenNum='1'/>
            <Dialog name='Ivan Ivanov' lastMessage='Hi, how are you?' date='08.04.2021' unreadenNum='1'/>

        </section>
    )
}
export default Messages;