import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import styles from "./Experience.module.css";
import 'react-vertical-timeline-component/style.min.css'
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (

        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <VerticalTimeline lineColor="#000">
                {
                    history?.map((historyItem, id) => {
                        return (
                            <VerticalTimelineElement key={id}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)',
                                    background: 'linear-gradient(90deg, #19376d 0%, rgba(25, 55, 109, 0) 100%)',
                                    borderRadius: '10px',
                                    padding: '24px'
                                }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                iconClassName={styles.imgIcon}
                                icon={<img
                                    className={styles.img}
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`}
                                />}
                                date={`${historyItem.startDate} - ${historyItem.endDate}`}
                                dateClassName={styles.date}
                            >
                                <div className={styles.historyItemDetails}>
                                    <h3 className="vertical-timeline-element-title">{`${historyItem.role}`}</h3>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id} className="vertical-timeline-element-subtitle">{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </section>
    );
};