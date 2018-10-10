# React Easy Upload

Simplifying upload for React. No dependencies.

## Install

```
$ npm install react-easy-upload
```

## Examples

* Basic - https://codesandbox.io/s/rr2ym0p49q
* Image - https://codesandbox.io/s/94jy5n6zjo
* Size validation - https://codesandbox.io/s/0qmok52z5n

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

<Upload onUpload={files => console.log('files uploaded', files)} maxSize={1000000} multiple required accept="image/*">
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
|maxSize    |`number`                                        |           | Max size in bytes for each file on upload

*All other props are passed to raw input component.*