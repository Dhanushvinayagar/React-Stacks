import React from 'react'
import { usePDF } from 'react-to-pdf';

const Pagetopdf = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (
        <div>
            <button onClick={() => toPDF()}>Download PDF</button>
            <div ref={targetRef}>
                Only this div will shown in pdf can be html / component
            </div>
        </div>
    )
}

export default Pagetopdf
