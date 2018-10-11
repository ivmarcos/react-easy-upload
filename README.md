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
* `withUpload` makes it simpler - https://codesandbox.io/s/llk00mxj3m

## Usage

**Basic**

```jsx

import Upload from 'react-easy-upload'

...

<Upload onUpload={files => console.log('files uploaded', files)}>
    {({ files, requestUpload }) => (
        <div 
            style={{width: 500, height: 500, background: 'red'}} 
            onClick={requestUpload}
        >
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</Upload>
```

**All options**

```jsx
import Upload from 'react-easy-upload'

...

<Upload onUpload={files => console.log('files uploaded', files)} maxSize={1024*1024} multiple required accept="image/*">
    {({ files, requestUpload }) => (
        <div 
            style={{width: 500, height: 500, background: 'red'}} 
            onClick={requestUpload}
        >
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</Upload>
```

**Using withUpload**
```jsx
import { withUpload } from 'react-easy-upload'

...
const Box = ({ requestUpload, files, valid }) => (
    <div 
        style={{width: 500, height: 500, background: valid ? 'green' : 'red'}} 
        onClick={requestUpload}>
        {files.length ? files[0].name : 'no file selected'}
    </div>
);

const BoxUpload = withUpload(Box);

<BoxUpload onUpload={files => console.log('files', files)} maxSize={1024*1024}/>
```

## Props

|Prop name  |Type                                            |Default    |Description
|-----------|------------------------------------------------|-----------|---------------------------------------
|onUpload   |`function(files: File[], event: SyntheticEvent)`|           | Callback when user uploads
|maxSize    |`number`                                        |           | Max size in bytes for each file on upload
|accept     |`string`                                        |           | Which files to accept. [See more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Limiting_accepted_file_types)
|multiple   |`boolean`                                       |   false   | True to accept multiple files
|required   |`boolean`                                       |   false   | True to define as required 
