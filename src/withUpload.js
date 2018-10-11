import React from 'react';

import Upload from './ReactEasyUpload';

const withUpload = WrappedComponent => props => (
  <Upload {...props}>{innerProps => <WrappedComponent {...innerProps} {...props} />}</Upload>
);

export default withUpload;
