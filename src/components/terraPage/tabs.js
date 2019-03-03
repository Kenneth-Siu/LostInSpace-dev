import React from "react";
import styles from "./tabs.module.scss";

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClient: false,
            selectedTabIndex: this.getDefaultSelectedTabIndex(this.props.content)
        };
    }

    componentDidMount() {
        this.setState({
            isClient: true
        });
    }

    render() {
        if (!this.state.isClient) {
            return null;
        }
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
        const windowGlobal = typeof window !== "undefined" && window;
        if (!windowGlobal) {
            return 0;
        }
        const currentUrlHash = windowGlobal.location.hash;
        const index = tabs.findIndex(tab => tab.urlHash === currentUrlHash);
        return index !== -1 ? index : 0;
    }

    onTabClick(urlHash, index) {
        const windowGlobal = typeof window !== "undefined" && window;
        if (windowGlobal) {
            windowGlobal.history.replaceState(undefined, undefined, urlHash);
        }
        this.setState({
            selectedTabIndex: index
        });
    }
}
