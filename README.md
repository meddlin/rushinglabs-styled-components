## CSS/SCSS Modules

A getting started tutorial for `styled-components` with React. 

Created with [create-react-app](https://github.com/facebook/create-react-app).

<hr />

*This repo was created to supplement a video for my [RushingLabs](https://www.youtube.com/channel/UCMbD6urmMQBUUxjjvyXgaxw) Youtube channel.*

[<img src="https://meddlin-web.s3.us-east-2.amazonaws.com/video-thumbnails/2019-10-20_react-styled-components/styled-components-thumbnail_final.png" width="720" height="405">](https://www.youtube.com/watch?v=V73rC4cijvQ)

[https://www.youtube.com/watch?v=V73rC4cijvQ](https://www.youtube.com/watch?v=V73rC4cijvQ)

<hr />

### Explanation: Styling a `<div>`

Import the `styled-components` package

```js
import styled from 'styled-components'
```

Declare a `<div>` component using the `styled` template literal. Include some styles.

```js
const StyledDiv = styled.div`
    color: blue;
    padding: 10px;
    border: 1px solid black;
`;
```

*Note:* this creates a functional component by using a template literal function. Check out the docs from MDN for this coolness. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Then we can use the newly created `StyledDiv` in our component like this:

```js
const MyComponent = (props) => {

    return (
        <div>
            <StyledDiv>
                <span>this is some other content included</span>
            </StyledDiv>
        </div>
    );
}
```

### References

Styled Components Documentation: [https://www.styled-components.com/docs](https://www.styled-components.com/docs)

MDN Template Literals: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)