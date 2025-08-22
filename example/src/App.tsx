import React, { Component, ReactNode } from "react";
import { Icon, generateSvgUrl } from "svgr-react-icons";
import SampleIcon from "./assets/Sample.svg?react";
import styles from "./App.module.css";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Check the console for details.</h1>;
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  console.log("App is rendering");
  return (
    <ErrorBoundary>
      <div>
        <div className={styles.infoIconsContainer}>
          <Icon
            src={SampleIcon}
            size={24}
            fill="#007bff"
            className={styles.infoIcon}
            alt="Sample Icon"
          />
          <div className={styles.descriptionContainer}>
            <div className={styles.iconTitle}>Sample</div>
            <div className={styles.iconText}>Icon Demo</div>
          </div>
        </div>

        <div className={styles.infoIconsContainer}>
          <Icon
            src={generateSvgUrl("/assets/Sample.svg", {
              size: 30,
              fill: "red",
            })}
            size={30}
            fill="red"
            className={styles.infoIcon}
            isUrl
            alt="Dynamic Icon"
          />
          <div className={styles.descriptionContainer}>
            <div className={styles.iconTitle}>Dynamic</div>
            <div className={styles.iconText}>URL Icon</div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
