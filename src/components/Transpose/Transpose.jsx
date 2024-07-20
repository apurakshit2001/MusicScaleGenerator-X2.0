import React, { useState } from 'react';
import './Transpose.css'

const chords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const sharpChords = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const flatChords = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const Transpose = () => {
    const [inputChords, setInputChords] = useState('');
    const [outputChords, setOutputChords] = useState('');
    const [notation, setNotation] = useState('sharp');

    const toggleMenu = () => {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    };

    const transposeChord = (chord, semitones) => {
        let root = chord.match(/^[A-G]#?/)[0];
        let modifier = chord.slice(root.length);
        let currentIndex = chords.indexOf(root);
        let newIndex = (currentIndex + semitones + 12) % 12;
        return chords[newIndex] + modifier;
    };

    const transposeProgression = (semitones) => {
        let chordsArray = inputChords.split(/\s+/);
        let transposedChords = chordsArray.map((chord) => transposeChord(chord, semitones));
        setInputChords(transposedChords.join(' '));
        setOutputChords(`Transposed Chord Progression: ${transposedChords.join(' ')}`);
    };

    const changeNotation = () => {
        let useSharps = notation === 'sharp';
        let chordsArray = inputChords.split(/\s+/);

        let transposedChords = chordsArray.map((chord) => {
            let rootMatch = chord.match(/^[A-G][#b]?/);
            if (!rootMatch) return chord;
            let root = rootMatch[0];
            let modifier = chord.slice(root.length);
            let currentIndex = sharpChords.indexOf(root);
            if (currentIndex === -1) {
                currentIndex = flatChords.indexOf(root);
            }
            if (currentIndex === -1) return chord;
            return useSharps ? sharpChords[currentIndex] + modifier : flatChords[currentIndex] + modifier;
        });

        setInputChords(transposedChords.join(' '));
        setOutputChords(transposedChords.join(' '));
    };

    return (
        <div className="container">
            <h1 className="white both-side-border-white-3d">
                Welcome to the Chord Transposition Tool! This page allows you to effortlessly transpose your chord
                progressions to different keys with just a few clicks.
            </h1>
            <h3 className="textPadding">How It Works:</h3>
            <ul className="white">
                <li>
                    <strong className='black'>Input Your Chord Progression :</strong>
                    <br /> Start by entering your chord progression into the input field. For example, type 'C, Am, F, G'.
                </li>
                <li>
                    <strong className='black'>Transpose Forward or Backward :</strong>
                    <br />Use the plus (+) symbol to transpose the chords forward or the minus (-)
                    symbol to transpose them backward. For instance, clicking the plus symbol twice after entering 'C, Am, F, G' will change it to 'D, Bm, G, A'. Clicking the minus symbol once will change it to 'C#, A#m, F#, G#'.
                </li>
                <li>
                    <strong className='black'>Flexibility :</strong>
                    <br />You have the freedom to input and transpose any complex chord progression of any length.
                    Simply type in your chords and adjust as needed.
                </li>
            </ul>
            <div className='transposeContainer'>
                <textarea
                    id="inputChords"
                    placeholder="Enter your chord progression here, Enter the root note in CAPITAL.."
                    value={inputChords}
                    onChange={(e) => setInputChords(e.target.value)}
                ></textarea>
                <div className="controls">
                    <select id="notationSelect" value={notation} onChange={(e) => setNotation(e.target.value)}>
                        <option value="sharp">Sharps (e.g., C#)</option>
                        <option value="flat">Flats (e.g., Db)</option>
                    </select>
                    <div className="transposeBtn">
                        <button className='button' id="transposeForward" onClick={() => transposeProgression(-1)}>
                            -
                        </button>
                        <button className='button' id="transposeBackward" onClick={() => transposeProgression(1)}>
                            +
                        </button>
                    </div>
                </div>
                <textarea
                    id="outputChords"
                    placeholder="Resulting chord progression will appear here"
                    value={outputChords}
                    readOnly
                ></textarea>
            </div>
        </div>
    );
};

export default Transpose;
