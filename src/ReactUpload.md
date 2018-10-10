## Props

|Prop name        |Type               |Default            |Description
|-----------------|-------------------|-------------------|--------------------------------
|onUpload         | `string`          | `'download.pdf'`  | Name of the pdf file
|targetRef        | `string`          |                   | Reference for the target component (use this or inner target reference)
|x                | `number`          |         0         | X position in document
|y                | `number`          |         0         | Y position in document
|options          | `number`          |         0         | options for the jsPdf document - [view more details](https://rawgit.com/MrRio/jsPDF/master/docs/)


**Using inner target ref**

```jsx
<ReactUpload>
    {({files, requestUpload}) => <div style={{width: 500, height: 500, background: 'red'}} onClick={requestUpload}>{files.length ? files[0].name : 'no file selected'}</div>}
</ReactUpload>
```
