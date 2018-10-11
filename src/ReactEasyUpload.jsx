import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  input: {
    visibility: 'hidden',
    height: 0,
    width: 0,
    position: 'fixed',
  },
};

class ReactEasyUpload extends PureComponent {
  constructor(props) {
    super(props);
    this.requestUpload = this.requestUpload.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.isValid = this.isValid.bind(this);
    this.inputRef = React.createRef();
    this.state = {
      files: [],
      valid: true,
    };
  }

  requestUpload() {
    this.inputRef.current.click();
  }

  isValid(files) {
    const { maxSize } = this.props;
    if (maxSize === undefined) return true;
    for (const i in files) {
      if (files[i].size > maxSize) {
        return false;
      }
    }
    return true;
  }

  handleUpload(e) {
    const { files } = e.target;
    const { onUpload } = this.props;
    const valid = this.isValid(files);
    this.setState({
      files,
      valid,
    });
    if (onUpload && valid) {
      onUpload(files, e);
    }
  }

  render() {
    const { children, accept, multiple, required } = this.props;
    const { files, valid } = this.state;
    return (
      <Fragment>
        <input
          ref={this.inputRef}
          style={styles.input}
          type="file"
          onChange={this.handleUpload}
          multiple={multiple}
          accept={accept}
          required={required}
        />
        {children({ requestUpload: this.requestUpload, files, valid })}
      </Fragment>
    );
  }
}

ReactEasyUpload.propTypes = {
  maxSize: PropTypes.number,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.number.isRequired,
  onUpload: PropTypes.func,
};

ReactEasyUpload.defaultProps = {
  maxSize: undefined,
  accept: undefined,
  multiple: false,
  required: false,
  onUpload: undefined,
};

export default ReactEasyUpload;
