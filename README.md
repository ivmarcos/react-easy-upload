# React Upload

Simplifying upload for React. No dependencies.

## Install

```
$ npm install react-upload
```

## Usage

```jsx
<ReactUpload>
    {({ files, requestUpload }) => (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</ReactUpload>
```

## Props

|Prop name        |Type                                                 |Default            |Description
|-----------------|-----------------------------------------------------|-------------------|---------------------------------------
|onUpload         | `function(files: File[], event: SyntheticEvent)`    |                   | Callback called when user does an upload

*All other props are passed to raw input component.*