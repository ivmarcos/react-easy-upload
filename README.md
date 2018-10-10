# React Easy Upload

Simplifying upload for React. No dependencies.

## Install

```
$ npm install react-easy-upload
```

## Usage

**Basic**

```jsx

import Upload from 'react-easy-upload'

...

<Upload onUpload={files => console.log('files uploaded', files)}>
    {({ files, requestUpload }) => (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</Upload>
```

**All options**

```jsx
import Upload from 'react-easy-upload'

...

<Upload onUpload={files => console.log('files uploaded', files)} multiple required accept="image/*">
    {({ files, requestUpload }) => (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</Upload>
```

## Props

|Prop name  |Type                                            |Default    |Description
|-----------|------------------------------------------------|-----------|---------------------------------------
|onUpload   |`function(files: File[], event: SyntheticEvent)`|           | Callback when user uploads

*All other props are passed to raw input component.*