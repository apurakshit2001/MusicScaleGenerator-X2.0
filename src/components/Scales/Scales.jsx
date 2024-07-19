import React, { useState } from 'react';
// Scales.css
import './Scales.css'

const scaleArray = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const Scales = () => {
    const [note, setNote] = useState("");
    const [heading, setHeading] = useState("Enter any note to receive its desired scale.");
    const [scale, setScale] = useState("");

    const handleNoteChange = (event) => {
        setNote(event.target.value.toUpperCase());
    };

    const reset = () => {
        setNote("");
        setScale("");
        setHeading("Enter any note to receive its desired scale.");
    };

    const generateScale = (formula, scaleName) => {
        let noteIndex = scaleArray.indexOf(note);
        let generatedScale = [];

        for (let i = 0; i < formula.length; i++) {
            noteIndex = noteIndex + formula[i];
            if (noteIndex > 11) {
                noteIndex = noteIndex - 12;
            }
            generatedScale.push(scaleArray[noteIndex]);
        }

        setHeading(`${note} ${scaleName}`);
        setScale(`${note}, ${generatedScale.join(", ")}`);
    };

    const majorScale = () => generateScale([2, 2, 1, 2, 2, 2, 1], "Major scale (Ionian mode)");
    const minorScale = () => generateScale([2, 1, 2, 2, 1, 2, 2], "Natural Minor scale (Aeolian mode)");
    const maJchord = () => generateScale([4, 3], "Major chord");
    const miNchord = () => generateScale([3, 4], "Minor chord");
    const harmonicMinor = () => generateScale([2, 1, 2, 2, 1, 3, 1], "Harmonic Minor scale");
    const melodicMinor = () => generateScale([2, 1, 2, 2, 2, 2, 1], "Melodic Minor scale");
    const blues = () => generateScale([3, 2, 1, 2, 2, 1, 3, 1], "Blues scale");
    const dorian = () => generateScale([2, 1, 2, 2, 1, 2, 2], "Dorian mode");
    const phrygian = () => generateScale([1, 2, 2, 2, 1, 2, 2], "Phrygian mode");
    const lydian = () => generateScale([2, 2, 2, 1, 2, 2, 1], "Lydian mode");
    const mixolydian = () => generateScale([2, 2, 1, 2, 2, 1, 2], "Mixolydian mode");
    const locrian = () => generateScale([1, 2, 2, 1, 2, 2, 2], "Locrian mode");

    return (
        <main>
            <div className="description">
                <p>The 12 notes are :</p>
                <p>
                    ❝ C - C# - D - D# - E - F - F# - G - G# - A - A# - B ❞ /
                    <br /><br />
                    ❝ C - D♭ - D - E♭ - E - F - G♭ - G - A♭ - A - B♭ - B ❞
                </p>
                <p>Choose a note and a scale type to generate the scale.</p>
                <p># are called sharp</p>
                <p>♭ are called flat</p>
            </div>

            <div className="ScaleGenerator">
                <h1 id="heading">{heading}</h1>
                <h1 id="Scale">{scale}</h1>
                <div className="input-container">
                    <select id="noteInput" className="input" value={note} onChange={handleNoteChange}>
                        <option value="" disabled>Select a note ▼</option>
                        {scaleArray.map((noteOption) => (
                            <option key={noteOption} value={noteOption}>{noteOption}</option>
                        ))}
                    </select>
                    <button className="button-9 reset" role="button" onClick={reset}>Reset</button>
                </div>
                <div className="moBbtns">
                    <button className="button-9" role="button" onClick={majorScale}>Major Scale (Ionian mode)</button>
                    <button className="button-9" role="button" onClick={minorScale}>Natural Minor Scale (Aeolian mode)</button>
                    <button className="button-9" role="button" onClick={maJchord}>Major Chord Notes</button>
                    <button className="button-9" role="button" onClick={miNchord}>Minor Chord Notes</button>
                    <button className="button-9" role="button" onClick={harmonicMinor}>Harmonic Minor Scale</button>
                    <button className="button-9" role="button" onClick={melodicMinor}>Melodic Minor Scale</button>
                    <button className="button-9" role="button" onClick={blues}>Blues Scale</button>
                    <button className="button-9" role="button" onClick={dorian}>Dorian Mode</button>
                    <button className="button-9" role="button" onClick={phrygian}>Phrygian Mode</button>
                    <button className="button-9" role="button" onClick={lydian}>Lydian Mode</button>
                    <button className="button-9" role="button" onClick={mixolydian}>Mixolydian Mode</button>
                    <button className="button-9" role="button" onClick={locrian}>Locrian Mode</button>
                </div>
            </div>
            <div className="btns">
                <button className="button-9" role="button" onClick={majorScale}>Major Scale (Ionian mode)</button>
                <button className="button-9" role="button" onClick={minorScale}>Natural Minor Scale (Aeolian mode)</button>
                <button className="button-9" role="button" onClick={maJchord}>Major Chord Notes</button>
                <button className="button-9" role="button" onClick={miNchord}>Minor Chord Notes</button>
                <button className="button-9" role="button" onClick={harmonicMinor}>Harmonic Minor Scale</button>
                <button className="button-9" role="button" onClick={melodicMinor}>Melodic Minor Scale</button>
                <button className="button-9" role="button" onClick={blues}>Blues Scale</button>
                <button className="button-9" role="button" onClick={dorian}>Dorian Mode</button>
                <button className="button-9" role="button" onClick={phrygian}>Phrygian Mode</button>
                <button className="button-9" role="button" onClick={lydian}>Lydian Mode</button>
                <button className="button-9" role="button" onClick={mixolydian}>Mixolydian Mode</button>
                <button className="button-9" role="button" onClick={locrian}>Locrian Mode</button>
            </div>
        </main>
    );
};

export default Scales;
