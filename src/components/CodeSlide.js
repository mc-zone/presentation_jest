import React, { Component } from "react";
import { Layout, Fill } from "spectacle";
import CodeSlide from "spectacle-code-slide";

export default class _CodeSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.removeListener = null;
    this.codeSlide = null;
    this.height = window.innerHeight;
  }
  componentDidMount() {
    const listener = e => this.onKeyDown(e);
    document.addEventListener("keydown", listener);
    this.removeListener = () => {
      document.removeEventListener("keydown", listener);
    };
    this.checkActive();
  }
  componentWillUnmount() {
    this.removeListener && this.removeListener();
    this.removeListener = null;
  }
  onKeyDown(e) {
    this.checkActive();
  }
  checkActive() {
    const slide = this.codeSlide;
    const current =
      slide && slide.state && slide.state.active
        ? parseInt(slide.state.active, 10)
        : 0;
    if (current > this.props.fullAfterIndex) {
      this.setState({
        active: true
      });
    } else {
      this.setState({
        active: false
      });
    }
  }
  render() {
    const { children, fullAfterIndex, ...props } = this.props;
    return (
      <>
        <Layout style={{ height: this.height }}>
          <CodeSlide
            {...props}
            ref={c => {
              this.codeSlide = c;
            }}
            transition={[]}
          />
          {!this.state.active && children ? (
            <Fill className="code-slide-children">{children}</Fill>
          ) : null}
        </Layout>
      </>
    );
  }
}

_CodeSlide.defaultProps = {
  fullAfterIndex: 0
};
