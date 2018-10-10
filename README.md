# React Upload

Simplifying upload for React. No dependencies.

## Install

```
$ npm install react-upload
```

## Usage

**Using inner target ref**

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
|onUpload         | `function(files: File[], event: SyntheticEvent)`    |                   | Callback called when user do an upload

*All other props are passed to raw input component.*