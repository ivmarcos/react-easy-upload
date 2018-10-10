# React Upload

Simplifying upload for React. No dependencies.

## Install

```
$ npm install react-upload
```

## Usage

**Basic**

```jsx
<ReactUpload onUpload={files => console.log('files uploaded', files)}>
    {({ files, requestUpload }) => (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</ReactUpload>
```

**All options**

```jsx
<ReactUpload onUpload={files => console.log('files uploaded', files)} multiple required accept="image/*">
    {({ files, requestUpload }) => (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>
            {files.length ? files[0].name : 'no file selected'}
        </div>
    )}
</ReactUpload>
```

## Props

|Prop name  |Type                                            |Default    |Description
|-----------|------------------------------------------------|-----------|---------------------------------------
|onUpload   |`function(files: File[], event: SyntheticEvent)`|           | Callback called when user does an upload

*All other props are passed to raw input component.*