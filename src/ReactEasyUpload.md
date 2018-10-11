## Props

|Prop name  |Type                                            |Default    |Description
|-----------|------------------------------------------------|-----------|---------------------------------------
|onUpload   |`function(files: File[], event: SyntheticEvent)`|           | Callback when user uploads

*All other props are passed to raw input component.*

**Basic**

```jsx
<ReactEasyUpload>
    {({files, requestUpload}) => (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>{files.length ? files[0].name : 'no file selected'}</div>
    )}
</ReactEasyUpload>
```

**Size validation**
```jsx
<ReactEasyUpload maxSize={1000000}>
    {({files, requestUpload, valid}) => (
        <div style={{width: 500, height: 500, background: valid ? 'green' : 'red'}} onClick={requestUpload}>{files.length ? files[0].name : 'no file selected'}</div>
    )}
</ReactEasyUpload>
```

**Using withUpload**
```jsx
const withUpload = require('./withUpload').default;
const Box = ({requestUpload, files, valid}) => (
    <div style={{width: 500, height: 500, background: valid ? 'green' : 'red'}} onClick={requestUpload}>{files.length ? files[0].name : 'no file selected'}</div>
);
const BoxUpload = withUpload(Box);
<BoxUpload onUpload={files => console.log('files', files)} maxSize={1024*1024}/>
```
