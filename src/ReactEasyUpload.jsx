import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  input: {
    visibility: 'hidden',
    height: 0,
    width: 0,
    position: 'fixed'
  }
};

class ReactEasyUpload extends PureComponent {
  constructor(props) {
    super(props);
    this.requestUpload = this.requestUpload.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.inputRef = React.createRef();
    this.state = {
      files: []
    };
  }

  requestUpload() {
    this.inputRef.current.click();
  }

  handleUpload(e) {
    const { files } = e.target;
    const { onUpload } = this.props;
    this.setState({
      files
    });
    if (onUpload) {
      onUpload(files, e);
    }
  }

  render() {
    const { children, onUpload, ...rest } = this.props;
    const { files } = this.state;
    return (
      <Fragment>
        <input
          ref={this.inputRef}
          style={styles.input}
          type="file"
          onChange={this.handleUpload}
          {...rest}
        />
        {children({ requestUpload: this.requestUpload, files })}
      </Fragment>
    );
  }
}

ReactEasyUpload.propTypes = {};

ReactEasyUpload.defaultProps = {};

export default ReactEasyUpload;
