import React from "react";
import styles from "./tabs.module.scss";

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTabIndex: this.getDefaultSelectedTabIndex(props.content)
        };
    }

    render() {
        return (
            <>
                <div className={styles.tabsBar}>
                    <h2 className={styles.header}>{this.props.header}</h2>
                    <div className={styles.tabs}>
                        {this.props.content.map((tab, index) => (
                            <button
                                className={`${styles.tabButton} ${
                                    this.state.selectedTabIndex === index ? styles.selected : ""
                                }`}
                                onClick={() => this.onTabClick(tab.urlHash, index)}
                                key={index}>
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.content}>
                    {this.props.content.map((tab, index) => (
                        <div
                            className={`${styles.tabContent} ${
                                this.state.selectedTabIndex === index ? styles.selected : ""
                            }`}
                            key={index}>
                            {tab.content}
                        </div>
                    ))}
                </div>
            </>
        );
    }

    getDefaultSelectedTabIndex(tabs) {
        const currentUrlHash = window.location.hash;
        const index = tabs.findIndex(tab => tab.urlHash === currentUrlHash);
        return index !== -1 ? index : 0;
    }

    onTabClick(urlHash, index) {
        window.history.replaceState(undefined, undefined, urlHash);
        this.setState({
            selectedTabIndex: index
        });
    }
}
