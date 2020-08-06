import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
    it("Renders Correctly", () => {
        const { getByText } = render(<App />);
        expect(getByText(/POC with Datamuse API/i)).toBeTruthy();
    });
});
