import * as React from 'react';
import BodyComponent from '../BodyComponent';

const LIST_NAME = 'لیست نامه ها';

class LettersComponent extends React.Component {

    public render() {
        return (
            <BodyComponent name={LIST_NAME}/>
        );
    }
}

export default LettersComponent;